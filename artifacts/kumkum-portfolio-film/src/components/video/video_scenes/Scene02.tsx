import { motion } from 'framer-motion';

const PORTRAIT = `${import.meta.env.BASE_URL}images/kumkum-solanki-portrait.png`;
const EASE = [0.16, 1, 0.3, 1] as const;

export function Scene02() {
  return (
    <motion.section
      className="film-scene scene-profile"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        scale: 0.965,
        opacity: 0,
        clipPath: 'inset(3% 28% 3% 28%)',
      }}
      transition={{ duration: 0.58, ease: EASE }}
    >
      <div className="profile-sun" />
      <motion.div
        className="profile-orbit"
        initial={{ rotate: -16, scale: 0.78 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.78, ease: EASE }}
      />

      <motion.p
        className="film-eyebrow profile-eyebrow"
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.28 }}
      >
        AI / ML · DATA SCIENCE
      </motion.p>

      <motion.div
        className="profile-photo-frame"
        initial={{
          clipPath: 'circle(0% at 50% 50%)',
          scale: 0.82,
          rotate: -3,
        }}
        animate={{
          clipPath: 'circle(76% at 50% 50%)',
          scale: 1,
          rotate: 0,
        }}
        exit={{
          clipPath: 'inset(0 48% 0 48%)',
          scale: 1.04,
          rotate: 1.5,
        }}
        transition={{ duration: 0.78, ease: EASE }}
      >
        <img src={PORTRAIT} alt="Portrait of Kumkum Solanki" />
        <span className="photo-sticker">BUILD / LEARN / REPEAT</span>
      </motion.div>

      <div className="profile-name-lockup">
        <motion.h1
          className="profile-name"
          initial={{ opacity: 0, y: 48, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.54, delay: 0.48, ease: EASE }}
        >
          Kumkum
          <br />
          Solanki
        </motion.h1>
        <motion.div
          className="profile-roles"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.42, delay: 1.08, ease: EASE }}
        >
          <span>AI/ML ENGINEER ASPIRANT</span>
          <span>DATA SCIENCE ENTHUSIAST</span>
        </motion.div>
      </div>

      <motion.div
        className="profile-location"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.65 }}
      >
        <span className="location-pin">●</span>
        GREATER NOIDA · UTTAR PRADESH
      </motion.div>

      <motion.div
        className="profile-frame-carrier"
        initial={{ scaleX: 0.75, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{ scaleX: 0.34, opacity: 0 }}
        transition={{ duration: 0.44, delay: 0.32, ease: EASE }}
      />
    </motion.section>
  );
}
