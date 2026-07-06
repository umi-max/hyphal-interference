# Hyphal Interference

[![Watch on YouTube](https://img.youtube.com/vi/W5pCtginuv8/maxresdefault.jpg)](https://youtube.com/shorts/W5pCtginuv8)

**[▶ Watch on YouTube](https://youtube.com/shorts/W5pCtginuv8)**

A 14-scene animated short (~2 min, 1080x1920) about hyphal interference — the mechanism by which the biocontrol fungus *Phlebiopsis gigantea* outcompetes and kills the tree pathogen *Heterobasidion annosum* on freshly cut conifer stumps.

Built as a React/Vite app where each scene is a timed component; `output/hyphal_interference.mp4` is the final rendered export (captured via headless Chromium and muxed with the background track via ffmpeg).

## Structure

- `src/components/video/video_scenes/` — the 14 scene components (Scene1–Scene14)
- `src/components/video/VideoTemplate.tsx` — scene sequencer / durations
- `src/lib/video/` — playback hook and animation presets
- `public/images`, `public/videos`, `public/audio` — source media
- `output/hyphal_interference.mp4` — final rendered video

## Development

```bash
pnpm install
PORT=22872 BASE_PATH=/ pnpm run dev
```

## Build

```bash
PORT=22872 BASE_PATH=/ pnpm run build
```

## Rendering the video

The MP4 export is fully reproducible from a fresh clone — no system `ffmpeg` install needed, it's bundled via `ffmpeg-static`. Playwright's Chromium is the one manual, one-time step (browser binaries aren't distributed via npm):

```bash
pnpm install
pnpm run render:setup   # one-time: downloads Playwright's Chromium
pnpm run render         # builds, serves, records a full playthrough, and muxes audio
```

This produces `output/hyphal_interference.mp4`. The recording is driven by the app's own `window.startRecording`/`window.stopRecording` hooks (`src/lib/video/hooks.ts`), so it automatically captures exactly one full loop regardless of scene-duration changes. See `scripts/render-video.mjs` for details, including override env vars (`RENDER_PORT`, `RENDER_WIDTH`/`RENDER_HEIGHT`, etc).

## Credit
Animation director and designer is Hafiz Umair Masood Awan.
