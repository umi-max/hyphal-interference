# Hyphal Interference

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
