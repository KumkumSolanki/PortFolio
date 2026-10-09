import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSceneTimer } from '@/lib/video';

const INSIGHTS = ['MATCHING SKILLS', 'SKILL GAPS', 'SUGGESTIONS'];
const EASE = [0.18, 0.88, 0.22, 1] as const;

const resumeWidths = ['84%', '71%', '92%', '58%', '77%'];
const jobWidths = ['66%', '88%', '73%', '82%', '54%'];

function DocumentRows({ widths, variant }: { widths: string[]; variant: string }) {
  return (
    <div className={`document-rows ${variant}`}>
      {widths.map((width, index) => (
        <motion.i
          key={`${variant}-${index}`}
          initial={{ scaleX: 0, opacity: 0.25 }}
          animate={{ scaleX: 1, opacity: index === 2 ? 1 : 0.68 }}
          transition={{
            duration: 0.36,
            delay: 0.25 + index * 0.075,
            ease: EASE,
          }}
          style={{ width, transformOrigin: 'left' }}
        />
      ))}
    </div>
  );
}

export function Scene03() {
  const [insight, setInsight] = useState(0);

  useSceneTimer([
    { time: 2550, callback: () => setInsight(1) },
    { time: 3100, callback: () => setInsight(2) },
  ]);

  return (
    <motion.section
      className="film-scene scene-resumatch"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        scale: 1.055,
        rotate: 1.2,
        opacity: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      }}
      transition={{ duration: 0.62, ease: EASE }}
    >
      <div className="resume-grid" />
      <motion.div
        className="resume-document resume-document-main"
        initial={{ y: 88, rotate: 6, scale: 0.84, opacity: 0 }}
        animate={{ y: 0, rotate: -3, scale: 1, opacity: 1 }}
        exit={{ y: -45, rotate: -8, scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="document-topline">
          <span className="document-mark">K</span>
          <span>RESUME</span>
          <span className="document-page">01</span>
        </div>
        <DocumentRows widths={resumeWidths} variant="resume-lines" />
        <span className="document-highlight document-highlight-pink" />
      </motion.div>

      <motion.div
        className="resume-document resume-document-job"
        initial={{ y: 110, rotate: -7, scale: 0.86, opacity: 0 }}
        animate={{ y: 0, rotate: 4, scale: 1, opacity: 1 }}
        exit={{ y: 36, rotate: 9, scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.72, delay: 0.08, ease: EASE }}
      >
        <div className="document-topline">
          <span className="job-dot" />
          <span>JOB DESCRIPTION</span>
          <span className="document-page">02</span>
        </div>
        <DocumentRows widths={jobWidths} variant="job-lines" />
        <span className="document-highlight document-highlight-mint" />
      </motion.div>

      <svg className="resume-compare-trace" viewBox="0 0 720 820" aria-hidden="true">
        <motion.path
          d="M 385 248 C 610 330, 102 430, 390 525 S 580 616, 380 700"
          fill="none"
          stroke="#62d9db"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          exit={{ pathLength: 1, opacity: 0, scale: 1.3 }}
          transition={{ duration: 1.35, delay: 0.5, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="385"
          cy="248"
          r="12"
          fill="#ffd84d"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.34, delay: 0.8 }}
        />
      </svg>

      <motion.div
        className="resume-heading"
        initial={{ opacity: 0, y: -30, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
      >
        <p className="film-eyebrow">AI RESUME ANALYSIS</p>
        <h1>ResuMatch</h1>
      </motion.div>

      <div className="resume-insight">
        <span className="insight-label">RESUME × ROLE</span>
        <AnimatePresence mode="sync" initial={false}>
          <motion.strong
            key={INSIGHTS[insight]}
            initial={{ opacity: 0, y: 22, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 1.02 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            {INSIGHTS[insight]}
          </motion.strong>
        </AnimatePresence>
      </div>

      <motion.div
        className="resume-edge-carrier"
        initial={{ scaleX: 0.3, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{ scaleX: 1.35, opacity: 0 }}
        transition={{ duration: 0.38, delay: 0.28, ease: EASE }}
      />
    </motion.section>
  );
}
