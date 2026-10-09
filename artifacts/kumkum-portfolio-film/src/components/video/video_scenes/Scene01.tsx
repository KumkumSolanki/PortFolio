import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSceneTimer } from '@/lib/video';

const WORDS = ['IDEAS', 'INTO', 'ACTION.'];
const WORD_EASE = [0.17, 0.9, 0.25, 1] as const;

export function Scene01() {
  const [beat, setBeat] = useState(0);

  useSceneTimer([
    { time: 480, callback: () => setBeat(1) },
    { time: 960, callback: () => setBeat(2) },
  ]);

  return (
    <motion.section
      className="film-scene scene-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        scale: 1.035,
        opacity: 0,
        clipPath: 'circle(135% at 56% 46%)',
      }}
      transition={{ duration: 0.62, ease: WORD_EASE }}
    >
      <div className="intro-orb intro-orb-yellow" />
      <div className="intro-orb intro-orb-lavender" />
      <motion.div
        className="intro-ring"
        initial={{ scale: 0.72, rotate: -18 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 2.4, opacity: 0 }}
        transition={{ duration: 0.72, ease: WORD_EASE }}
      />
      <svg className="intro-route" viewBox="0 0 900 1100" aria-hidden="true">
        <motion.path
          d="M 175 475 C 315 370, 500 520, 645 390 S 770 535, 605 690"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="5"
          strokeDasharray="9 16"
          initial={{ pathLength: 0, opacity: 0.25 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.1, delay: 1.3, ease: 'easeInOut' }}
        />
      </svg>

      <div className="intro-copy">
        <motion.p
          className="film-eyebrow intro-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.16 }}
        >
          A PORTFOLIO IN MOTION
        </motion.p>
        <div className="intro-word-stage">
          <AnimatePresence mode="sync" initial={false}>
            <motion.h1
              key={WORDS[beat]}
              className="intro-word"
              initial={{ opacity: 0, y: 64, rotateX: -35, scale: 0.82 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: -52, rotateX: 22, scale: 0.94 }}
              transition={{ duration: 0.38, ease: WORD_EASE }}
            >
              {WORDS[beat]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <motion.p
          className="intro-caption"
          initial={{ opacity: 0, letterSpacing: '0.02em' }}
          animate={{ opacity: 1, letterSpacing: '0.22em' }}
          transition={{ duration: 0.45, delay: 1.18 }}
        >
          PRACTICAL AI / ML
        </motion.p>
      </div>

      <div className="intro-tags">
        {['AI', 'DATA', 'VISION'].map((tag, index) => (
          <motion.span
            className={`intro-tag intro-tag-${index + 1}`}
            key={tag}
            initial={{ opacity: 0, scale: 0.55, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 360,
              damping: 23,
              delay: 1.45 + index * 0.26,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="intro-center-dot"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.25, 1] }}
        transition={{ duration: 0.42, delay: 2.55, ease: WORD_EASE }}
      />
    </motion.section>
  );
}
