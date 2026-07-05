import { useEffect, useRef } from 'react';
import type { ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';
import { Scene8 } from './video_scenes/Scene8';
import { Scene9 } from './video_scenes/Scene9';
import { Scene10 } from './video_scenes/Scene10';
import { Scene11 } from './video_scenes/Scene11';
import { Scene12 } from './video_scenes/Scene12';
import { Scene13 } from './video_scenes/Scene13';
import { Scene14 } from './video_scenes/Scene14';

export const SCENE_DURATIONS: Record<string, number> = {
  hook:        7000,
  fungi_101:   8000,
  villain:     9000,
  hero:        9000,
  standoff:    9000,
  recognition: 10000,
  mechanism:   10000,
  mystery:     7000,
  inside:      9000,
  squash:      8000,
  evidence:    8000,
  no_poison:   7000,
  biocontrol:  10000,
  outro:       9000,
};

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  hook: Scene1,
  fungi_101: Scene2,
  villain: Scene3,
  hero: Scene4,
  standoff: Scene5,
  recognition: Scene6,
  mechanism: Scene7,
  mystery: Scene8,
  inside: Scene9,
  squash: Scene10,
  evidence: Scene11,
  no_poison: Scene12,
  biocontrol: Scene13,
  outro: Scene14,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black text-white font-body selection:bg-primary">
        {/* Persistent Background Layer: Drifting Particles & Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] opacity-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
            }}
            animate={{
              x: ['-5%', '5%', '-2%'],
              y: ['0%', '-5%', '5%'],
              scale: [1, 1.2, 0.9]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[120vw] h-[120vh] -top-[10vh] -left-[10vw] opacity-20 mix-blend-screen"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(233, 30, 99, 0.2) 0%, transparent 60%)'
            }}
            animate={{
              x: ['5%', '-5%', '2%'],
              y: ['-5%', '5%', '-2%'],
              scale: [1, 1.1, 0.95]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>


        <AnimatePresence mode="wait">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
        loop={loop}
      />
    </>
  );
}
