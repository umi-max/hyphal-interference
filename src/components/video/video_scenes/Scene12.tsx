import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['No', 'poison', 'was', 'found.'];
const line2 = ['No', 'chemical', 'weapon.'];
const line3 = ['No', 'toxin', 'sprayed', 'from', 'a', 'distance.'];
const finale = ['Just.', 'A.', 'Touch.'];

export function Scene12() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2400),
      setTimeout(() => setPhase(4), 3600),
      setTimeout(() => setPhase(5), 5500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ clipPath: 'inset(0 0 0 100%)', transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover opacity-45 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat9.png`}
          alt="confocal microscopy glow"
          animate={{ scale: [1.05, 1] }}
          transition={{ duration: 7, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE PLOT TWIST</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-6 pt-[13vh] pb-[22vh]">
        <motion.p
          className="font-display text-[7.5vw] uppercase text-white text-center leading-tight"
          initial={{ opacity: 0, y: -15 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          {words.join(' ')}
        </motion.p>

        <motion.p
          className="font-display text-[7vw] uppercase text-white/80 text-center leading-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {line2.join(' ')}
        </motion.p>

        <motion.p
          className="font-display text-[6vw] uppercase text-white/60 text-center leading-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {line3.join(' ')}
        </motion.p>

        <motion.div
          className="flex gap-3 items-center mt-2"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {finale.map((word, i) => (
            <motion.span
              key={i}
              className="font-display text-[9vw] uppercase text-[#10B981] leading-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 4 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20, delay: i * 0.18 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="border-l-4 border-[#00B4D8] bg-[#00B4D8]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            Diffusible toxin theories were tested and not confirmed. The kill is contact-based — the killer must get close.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          A biological mugging, not a sniper — the hero must make direct contact to kill.
        </p>
      </motion.div>
    </motion.div>
  );
}
