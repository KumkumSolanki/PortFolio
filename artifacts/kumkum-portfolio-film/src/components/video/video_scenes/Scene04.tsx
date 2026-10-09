import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useSceneTimer } from '@/lib/video';

const EASE = [0.18, 0.9, 0.22, 1] as const;

function PlantBeat() {
  return (
    <motion.div
      className="project-beat project-plant"
      initial={{ opacity: 0, scale: 0.7, rotate: -10, clipPath: 'circle(22% at 50% 50%)' }}
      animate={{ opacity: 1, scale: 1, rotate: 0, clipPath: 'circle(72% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.08, rotate: 12, clipPath: 'circle(28% at 50% 50%)' }}
      transition={{ duration: 0.56, ease: EASE }}
    >
      <svg className="plant-art" viewBox="0 0 430 520" role="img" aria-label="Illustrative leaf and Grad-CAM visualization">
        <path
          d="M214 467 C86 393 58 241 112 107 C179 131 255 57 336 60 C349 217 326 372 214 467Z"
          fill="#83dfad"
          stroke="#202444"
          strokeWidth="8"
        />
        <path d="M214 462 C213 324 226 196 325 78" fill="none" stroke="#202444" strokeWidth="8" strokeLinecap="round" />
        <path d="M214 371 C168 315 130 277 91 254 M220 311 C270 276 302 242 333 205 M223 244 C185 204 153 172 125 137 M232 185 C273 156 300 122 328 92" fill="none" stroke="#337755" strokeWidth="6" strokeLinecap="round" />
        <motion.ellipse
          cx="170"
          cy="258"
          rx="56"
          ry="78"
          fill="#f34f98"
          opacity="0.44"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.2, 1.05, 0.88], opacity: [0, 0.56, 0.34] }}
          transition={{ duration: 1.15, delay: 0.65, ease: EASE }}
        />
        <motion.ellipse
          cx="278"
          cy="149"
          rx="34"
          ry="49"
          fill="#ffd84d"
          opacity="0.62"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 0.94] }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
        />
      </svg>
      <div className="plant-label">
        <span className="film-eyebrow">CNN · GRAD-CAM</span>
        <h2>Plant disease<br />detection</h2>
      </div>
    </motion.div>
  );
}

function StockBeat() {
  return (
    <motion.div
      className="project-beat project-stock"
      initial={{ opacity: 0, scale: 0.88, rotateY: -14, clipPath: 'inset(0 50% 0 50%)' }}
      animate={{ opacity: 1, scale: 1, rotateY: 0, clipPath: 'inset(0 0% 0 0%)' }}
      exit={{ opacity: 0, scale: 1.06, rotateY: 12, clipPath: 'inset(0 0 0 100%)' }}
      transition={{ duration: 0.54, ease: EASE }}
    >
      <div className="stock-chart-frame">
        <div className="stock-chart-grid">
          <i /><i /><i /><i />
        </div>
        <svg className="stock-chart" viewBox="0 0 620 440" role="img" aria-label="Illustrative stock trend chart">
          <motion.path
            d="M 28 354 C 80 320, 105 349, 154 281 S 216 295, 264 221 S 329 250, 375 180 S 445 208, 486 123 S 544 160, 594 72"
            fill="none"
            stroke="#ffd84d"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.35, delay: 0.15, ease: 'easeInOut' }}
          />
          {[154, 264, 375, 486].map((x, index) => (
            <motion.circle
              key={x}
              cx={x}
              cy={[281, 221, 180, 123][index]}
              r="10"
              fill="#fff9ef"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.24, delay: 0.72 + index * 0.22 }}
            />
          ))}
        </svg>
      </div>
      <div className="stock-label">
        <span className="film-eyebrow">LSTM · GRU · ARIMA</span>
        <h2>AI stock price<br />prediction</h2>
      </div>
      <motion.span
        className="stock-data-point"
        initial={{ x: -80, y: 130, scale: 0.4, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        exit={{ scale: 2.1, opacity: 0 }}
        transition={{ duration: 0.48, delay: 1.35, ease: EASE }}
      />
    </motion.div>
  );
}

function TrafficBeat() {
  return (
    <motion.div
      className="project-beat project-traffic"
      initial={{ opacity: 0, scale: 1.12, rotateX: 13, clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.54, ease: EASE }}
    >
      <div className="traffic-skyline">
        <i /><i /><i /><i />
      </div>
      <div className="traffic-road">
        <motion.div
          className="road-dash"
          animate={{ y: [0, 32] }}
          transition={{ duration: 0.48, repeat: Infinity, ease: 'linear' }}
        />
        <span className="vehicle vehicle-one" />
        <span className="vehicle vehicle-two" />
        <motion.span
          className="detection-box detection-box-one"
          animate={{ x: [0, 5, 0], y: [0, -4, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="detection-box detection-box-two"
          animate={{ x: [0, -4, 0], y: [0, 5, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="detection-box detection-box-main"
          exit={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>
      <div className="traffic-label">
        <span className="film-eyebrow">YOLO · COMPUTER VISION</span>
        <h2>AI traffic density<br />detection</h2>
      </div>
    </motion.div>
  );
}

const BEATS = [PlantBeat, StockBeat, TrafficBeat];

export function Scene04() {
  const [phase, setPhase] = useState(0);

  useSceneTimer([
    { time: 2250, callback: () => setPhase(1) },
    { time: 4350, callback: () => setPhase(2) },
  ]);

  const Beat = BEATS[phase];

  return (
    <motion.section
      className={`film-scene scene-projects scene-projects-${phase}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        clipPath: 'inset(0 0 100% 0)',
      }}
      transition={{ duration: 0.62, ease: EASE }}
    >
      <motion.div
        className="projects-field"
        animate={{
          backgroundColor: phase === 0 ? '#dff5e7' : phase === 1 ? '#e8e2ff' : '#202444',
        }}
        transition={{ duration: 0.42, ease: EASE }}
      />
      <motion.p
        className="film-eyebrow projects-counter"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 0.15 }}
      >
        SELECTED PROJECTS
      </motion.p>
      <div className="project-beat-stage">
        <AnimatePresence mode="sync" initial={false}>
          <Beat key={phase} />
        </AnimatePresence>
      </div>
      <div className="project-index" aria-hidden="true">
        <motion.i animate={{ opacity: phase === 0 ? 1 : 0.25, scale: phase === 0 ? 1.35 : 1 }} />
        <motion.i animate={{ opacity: phase === 1 ? 1 : 0.25, scale: phase === 1 ? 1.35 : 1 }} />
        <motion.i animate={{ opacity: phase === 2 ? 1 : 0.25, scale: phase === 2 ? 1.35 : 1 }} />
      </div>
      <motion.div
        className="traffic-box-carrier"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 2 ? 1 : 0 }}
        exit={{ scale: 2.4, opacity: 0 }}
        transition={{ duration: 0.28 }}
      />
    </motion.section>
  );
}
