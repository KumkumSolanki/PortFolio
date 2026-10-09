import { useEffect, type ComponentType } from 'react';
import {
  VideoCanvas,
  VideoPausedContext,
  type VideoAspectRatio,
  useVideoPlayer,
} from '@/lib/video';
import { AnimatePresence, motion } from 'framer-motion';

import { Scene01 } from './video_scenes/Scene01';
import { Scene02 } from './video_scenes/Scene02';
import { Scene03 } from './video_scenes/Scene03';
import { Scene04 } from './video_scenes/Scene04';
import { Scene05 } from './video_scenes/Scene05';
import './video_scenes/film.css';

export const SCENE_DURATIONS = {
  intro: 4000,
  profile: 5000,
  resumatch: 5000,
  projects: 7000,
  outro: 5000,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '9:16';

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  intro: Scene01,
  profile: Scene02,
  resumatch: Scene03,
  projects: Scene04,
  outro: Scene05,
};

const CAMERA_ANGLES = [0, -0.45, 0.35, -0.3, 0] as const;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({
    durations,
    loop,
    paused,
  });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <VideoCanvas
      aspectRatio={VIDEO_ASPECT_RATIO}
      className="film-canvas"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <VideoPausedContext.Provider value={paused}>
        <motion.div
          className="film-world"
          initial={false}
          animate={{
            rotate: CAMERA_ANGLES[sceneIndex] ?? 0,
            scale: sceneIndex === 3 ? 1.006 : 1,
          }}
          transition={{ duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <AnimatePresence mode="sync" initial={false}>
            {SceneComponent && (
              <SceneComponent key={currentSceneKey} />
            )}
          </AnimatePresence>
        </motion.div>
      </VideoPausedContext.Provider>
      <audio
        data-film-audio="background"
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </VideoCanvas>
  );
}
