#!/usr/bin/env node
// Renders the animation to output/hyphal_interference.mp4:
// builds the app, serves it statically, records one full playthrough with
// headless Chromium (Playwright), then muxes the capture with the
// background track (ffmpeg). Recording start/stop is driven by the app's
// own window.startRecording/window.stopRecording lifecycle hooks
// (see src/lib/video/hooks.ts), so this stays correct even if scene
// durations change later.

import { chromium } from 'playwright';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync, spawn } from 'node:child_process';
import { once } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const PORT = process.env.RENDER_PORT || '4173';
const BASE_PATH = process.env.RENDER_BASE_PATH || '/';
const WIDTH = Number(process.env.RENDER_WIDTH || 1080);
const HEIGHT = Number(process.env.RENDER_HEIGHT || 1920);
const TIMEOUT_MS = Number(process.env.RENDER_TIMEOUT_MS || 5 * 60 * 1000);

const TMP_DIR = path.join(ROOT, '.render-tmp');
const OUT_DIR = path.join(ROOT, 'output');
const OUT_FILE = path.join(OUT_DIR, 'hyphal_interference.mp4');
const AUDIO_FILE = path.join(ROOT, 'public/audio/bg_music.mp3');

function step(msg) {
  console.log(`\n[render] ${msg}`);
}

async function waitForServer(url, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Preview server did not become ready at ${url} within ${timeoutMs}ms`);
}

step('Building app...');
execFileSync('pnpm', ['run', 'build'], {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...process.env, PORT, BASE_PATH },
});

step('Starting static preview server...');
const server = spawn('pnpm', ['run', 'serve'], {
  cwd: ROOT,
  env: { ...process.env, PORT, BASE_PATH },
  stdio: ['ignore', 'pipe', 'pipe'],
});
server.stdout.on('data', (d) => process.stdout.write(`[serve] ${d}`));
server.stderr.on('data', (d) => process.stderr.write(`[serve] ${d}`));

const url = `http://localhost:${PORT}${BASE_PATH}`;

try {
  await waitForServer(url, 20000);

  fs.rmSync(TMP_DIR, { recursive: true, force: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  step('Recording full playthrough with headless Chromium...');
  const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    recordVideo: { dir: TMP_DIR, size: { width: WIDTH, height: HEIGHT } },
  });
  const page = await context.newPage();

  let resolveStopped;
  const stopped = new Promise((resolve) => {
    resolveStopped = resolve;
  });
  await page.exposeFunction('__onStopRecording', () => resolveStopped());
  await page.addInitScript(() => {
    // Matches the contract in src/lib/video/hooks.ts: useVideoPlayer calls
    // window.startRecording() on mount and window.stopRecording() exactly
    // once, when the final scene finishes.
    window.startRecording = () => Promise.resolve();
    window.stopRecording = () => {
      window.__onStopRecording?.();
    };
  });

  await page.goto(url, { waitUntil: 'load' });

  await Promise.race([
    stopped,
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error('Timed out waiting for window.stopRecording() to fire')),
        TIMEOUT_MS,
      ),
    ),
  ]);

  // Small buffer so the last frame isn't cut short.
  await page.waitForTimeout(400);

  await context.close();
  await browser.close();

  step('Muxing capture with background audio...');
  const webmName = fs.readdirSync(TMP_DIR).find((f) => f.endsWith('.webm'));
  if (!webmName) throw new Error('Playwright did not produce a recording in ' + TMP_DIR);
  const webmPath = path.join(TMP_DIR, webmName);

  execFileSync(
    ffmpegPath,
    [
      '-y',
      '-i', webmPath,
      '-i', AUDIO_FILE,
      '-filter_complex', '[1:a]volume=0.45[a]',
      '-map', '0:v',
      '-map', '[a]',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      '-preset', 'medium',
      '-c:a', 'aac',
      '-b:a', '192k',
      '-shortest',
      OUT_FILE,
    ],
    { cwd: ROOT, stdio: 'inherit' },
  );

  fs.rmSync(TMP_DIR, { recursive: true, force: true });
  step(`Done -> ${path.relative(ROOT, OUT_FILE)}`);
} finally {
  server.kill();
}
