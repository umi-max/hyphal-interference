import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const branches = [
  { x1: 50, y1: 50, x2: 20, y2: 20 }, { x1: 50, y1: 50, x2: 80, y2: 15 },
  { x1: 50, y1: 50, x2: 10, y2: 60 }, { x1: 50, y1: 50, x2: 85, y2: 70 },
  { x1: 50, y1: 50, x2: 40, y2: 85 }, { x1: 20, y1: 20, x2: 5, y2: 5 },
  { x1: 80, y1: 15, x2: 95, y2: 5 }, { x1: 85, y1: 70, x2: 95, y2: 85 },
  { x1: 40, y1: 85, x2: 25, y2: 95 }, { x1: 10, y1: 60, x2: 2, y2: 75 },
];

export function Scene2() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 5200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
      exit={{ opacity: 0, filter: 'blur(12px)', scale: 0.95, transition: { duration: 0.6, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-[#050a08]">
        <motion.img
          className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
          src={`${import.meta.env.BASE_URL}images/beat_fungi.png`}
          alt="fungal mycelium network"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 8, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">FUNGI 101</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-5 pt-[13vh] pb-[22vh]">
        <motion.h2
          className="font-display text-[7.5vw] uppercase text-white text-center leading-tight tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          FUNGI DON'T HAVE ROOTS.
        </motion.h2>

        <motion.p
          className="font-mono text-[4.2vw] text-white/90 text-center leading-snug"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          They grow as microscopic threads called{' '}
          <span className="text-[#10B981] font-bold">HYPHAE</span>.
        </motion.p>

        <motion.div
          className="w-[65vw] h-[22vh]"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {branches.map((b, i) => (
              <motion.line
                key={i} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
                stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={phase >= 3 ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              />
            ))}
            <motion.circle cx="50" cy="50" r="3" fill="#10B981"
              initial={{ scale: 0 }} animate={phase >= 3 ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="border-l-4 border-[#00B4D8] bg-[#00B4D8]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.5vw] text-white/90">
            Hyphae = fungal highways. They absorb nutrients and claim territory.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.0 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Think of hyphae like an underground wifi network — invisible, spreading everywhere.
        </p>
      </motion.div>
    </motion.div>
  );
}
