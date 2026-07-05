import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6500),
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
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover opacity-50"
          src={`${import.meta.env.BASE_URL}images/beat4.png`}
          alt="collision zone"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 9, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE APPROACH</span>
      </motion.div>

      {/* Villain advancing from top */}
      <motion.div
        className="absolute top-[18vh] left-[8vw] z-20 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="font-mono text-[3.5vw] text-[#FF2D55] font-bold uppercase tracking-wider">H. annosum ↓</span>
      </motion.div>

      <motion.div
        className="absolute top-[22vh] left-0 right-0 h-[3px] z-20"
        style={{ background: 'linear-gradient(to right, transparent, #FF2D55, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 2 ? { scaleX: 1, opacity: 0.7 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Center standoff text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="text-center px-[8vw]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-[6.5vw] uppercase text-white leading-tight text-center drop-shadow-2xl">
            Two colonies.<br />One stump.<br />
            <motion.span
              className="text-white/60 text-[4.5vw]"
              animate={phase >= 3 ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Growing toward each other…
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* Hero advancing from bottom */}
      <motion.div
        className="absolute bottom-[40vh] left-0 right-0 h-[3px] z-20"
        style={{ background: 'linear-gradient(to right, transparent, #10B981, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 2 ? { scaleX: 1, opacity: 0.7 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute bottom-[41vh] right-[8vw] z-20"
        initial={{ opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="font-mono text-[3.5vw] text-[#2D9B6F] font-bold uppercase tracking-wider">P. gigantea ↑</span>
      </motion.div>

      {/* Character dialogue */}
      <motion.div
        className="absolute top-[26vh] right-[8vw] z-30 bg-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[60vw] shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <p className="font-display text-[3.5vw] uppercase text-[#FF2D55]">"I can sense something… coming."</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[43vh] left-[8vw] z-30 bg-white rounded-2xl rounded-bl-none px-4 py-3 max-w-[60vw] shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.2 }}
      >
        <p className="font-display text-[3.5vw] uppercase text-[#2D9B6F]">"Here we go."</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Each fungus spreads its thread network — until inevitably, they meet.
        </p>
      </motion.div>
    </motion.div>
  );
}
