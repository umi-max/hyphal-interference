import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene6() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setPhase(5), 7000),
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
          className="w-full h-full object-cover opacity-55"
          src={`${import.meta.env.BASE_URL}images/beat_recognition.png`}
          alt="fungal recognition boundary"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 10, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE QUESTION</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-4 pt-[13vh] pb-[22vh]">
        <motion.h2
          className="font-display text-[11vw] uppercase text-white drop-shadow-2xl text-center leading-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          SELF?
        </motion.h2>

        <motion.h2
          className="font-display text-[9vw] uppercase text-[#FF2D55] drop-shadow-2xl text-center leading-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        >
          or NON-SELF?
        </motion.h2>

        <motion.div
          className="bg-black/80 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl w-full mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[3.5vw] text-white/90 text-center leading-snug">
            Every hypha carries a molecular <span className="text-[#10B981]">'ID badge'</span>. When two hyphae touch, they compare IDs in milliseconds.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 w-full mt-2"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 bg-[#10B981]/15 border border-[#10B981]/40 rounded-xl px-4 py-3 text-center">
            <p className="font-display text-[5vw] text-[#10B981]">✅</p>
            <p className="font-mono text-[2.8vw] text-white/90 mt-1">SAME FUNGUS<br /><span className="text-[#10B981]">→ merge & cooperate</span></p>
          </div>
          <div className="flex-1 bg-[#FF2D55]/15 border border-[#FF2D55]/40 rounded-xl px-4 py-3 text-center">
            <p className="font-display text-[5vw] text-[#FF2D55]">❌</p>
            <p className="font-mono text-[2.8vw] text-white/90 mt-1">DIFFERENT SPECIES<br /><span className="text-[#FF2D55]">→ alarm triggers</span></p>
          </div>
        </motion.div>

        <motion.div
          className="flex w-full gap-3 mt-1"
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 bg-white rounded-2xl rounded-tr-none px-4 py-2 shadow-lg">
            <p className="font-display text-[3.5vw] uppercase text-[#FF2D55]">"Wait. You're not me."</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-lg">
            <p className="font-display text-[3.5vw] uppercase text-[#2D9B6F]">"Correct. That's your problem."</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Fungi have run molecular identity checks for hundreds of millions of years.
        </p>
      </motion.div>
    </motion.div>
  );
}
