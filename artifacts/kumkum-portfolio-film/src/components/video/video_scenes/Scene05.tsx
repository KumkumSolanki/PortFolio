import { motion } from 'framer-motion';
import { Car, FileText, Leaf, TrendingUp } from 'lucide-react';

const PORTRAIT = `${import.meta.env.BASE_URL}images/kumkum-solanki-portrait.png`;
const EASE = [0.16, 1, 0.3, 1] as const;

const PROJECT_MARKS = [
  { Icon: FileText, label: 'ResuMatch' },
  { Icon: Leaf, label: 'Plant disease detection' },
  { Icon: TrendingUp, label: 'AI stock prediction' },
  { Icon: Car, label: 'Traffic detection' },
];

export function Scene05() {
  return (
    <motion.section
      className="film-scene scene-outro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.025, opacity: 0, clipPath: 'circle(135% at 56% 46%)' }}
      transition={{ duration: 0.72, ease: EASE }}
    >
      <div className="outro-sun" />
      <motion.div
        className="outro-ring"
        initial={{ scale: 0.84, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 2.35, opacity: 0 }}
        transition={{ duration: 0.72, ease: EASE }}
      />
      <motion.div
        className="outro-frame"
        initial={{ scale: 0.82, rotate: -7, clipPath: 'inset(38% 38% 38% 38%)' }}
        animate={{ scale: 1, rotate: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 0.62, ease: EASE }}
      >
        <img src={PORTRAIT} alt="Kumkum Solanki" />
        <span className="outro-initial">K</span>
      </motion.div>

      <motion.div
        className="outro-project-marks"
        initial={{ rotate: -22, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.62, delay: 0.22, ease: EASE }}
      >
        {PROJECT_MARKS.map(({ Icon, label }, index) => (
          <motion.span
            className={`outro-project-mark outro-project-mark-${index + 1}`}
            key={label}
            aria-label={label}
            initial={{ scale: 0.35, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 23,
              delay: 0.5 + index * 0.11,
            }}
          >
            <Icon size={18} strokeWidth={2.2} />
          </motion.span>
        ))}
      </motion.div>

      <div className="outro-copy">
        <motion.p
          className="film-eyebrow outro-specialty"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.65 }}
        >
          AI/ML · DATA SCIENCE · COMPUTER VISION
        </motion.p>
        <motion.h1
          className="outro-name"
          initial={{ opacity: 0, y: 46, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.5, delay: 0.76, ease: EASE }}
        >
          Kumkum<br />Solanki
        </motion.h1>
        <motion.p
          className="outro-tagline"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.36, delay: 1.2 }}
        >
          Building Intelligent Solutions,<br />One Idea at a Time.
        </motion.p>
        <motion.p
          className="outro-location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.8 }}
        >
          GREATER NOIDA · UTTAR PRADESH
        </motion.p>
        <motion.p
          className="outro-github"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 2.1 }}
        >
          github.com/KumkumSolanki
        </motion.p>
      </div>
      <motion.div
        className="outro-bottom-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.82, ease: EASE }}
      />
    </motion.section>
  );
}
