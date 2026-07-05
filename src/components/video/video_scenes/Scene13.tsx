import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene13() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6500),
      setTimeout(() => setPhase(5), 8000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.9, ease: 'easeOut' } }}
      exit={{ opacity: 0, filter: 'blur(12px)', scale: 0.95, transition: { duration: 0.6, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-[#0a1008]">
        <motion.img
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}images/beat10.png`}
          alt="sunlit pine plantation"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 10, ease: 'linear' }}
        />
        {/* Golden warm overlay — visual relief after dark microscopy */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(251,191,36,0.12) 0%, transparent 50%, rgba(0,0,0,0.75) 100%)' }}
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-[#10B981]/40 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
      >
        <span className="font-mono text-[2.5vw] text-[#10B981] uppercase tracking-widest">THE REAL WORLD</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-4 pt-[13vh] pb-[22vh]">
        <motion.h2
          className="font-display text-[7.5vw] uppercase text-white text-center leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Foresters figured something out.
        </motion.h2>

        <motion.div
          className="bg-black/70 backdrop-blur-md border border-white/20 px-5 py-4 rounded-xl w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.5vw] text-white/90 leading-snug">
            When a tree is felled, the fresh stump is exposed. <span className="text-[#FF2D55]">H. annosum colonises it</span> — then spreads underground to kill neighbouring trees.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#10B981]/15 border border-[#10B981]/50 px-5 py-4 rounded-xl w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90 leading-snug">
            <span className="text-[#10B981] font-bold">Solution:</span> Spray P. gigantea spores onto the stump immediately after felling. It colonises first — and kills any H. annosum on contact.
          </p>
        </motion.div>

        <motion.div
          className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-3"
          style={{ background: '#2D9B6F' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="text-[5vw]">🔬</span>
          <div>
            <p className="font-display text-[5.5vw] uppercase text-white leading-none">BIOCONTROL</p>
            <p className="font-mono text-[3vw] text-white/80">One native fungus. Zero synthetic pesticides.</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl rounded-br-none px-5 py-3 self-end shadow-lg max-w-[75vw]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p className="font-display text-[4.2vw] uppercase text-[#2D9B6F]">"Stump's full, boys. Try me."</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Foresters have been using this living fungus as a natural pesticide since the 1960s.
        </p>
      </motion.div>
    </motion.div>
  );
}
