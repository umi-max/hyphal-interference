import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene11() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => setPhase(4), 5000),
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
          className="w-full h-full object-cover opacity-70 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat_evidence.png`}
          alt="confocal microscopy fluorescent fungi"
          animate={{ scale: [1, 1.06] }}
          transition={{ duration: 8, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/85" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE PROOF</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-5 pt-[13vh] pb-[22vh]">
        <motion.div
          className="bg-black/70 backdrop-blur-md border border-white/30 rounded-full w-[55vw] h-[55vw] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          <p className="font-display text-[8vw] uppercase text-white text-center leading-none">100%</p>
          <p className="font-display text-[4.5vw] uppercase text-white/70 text-center">REAL</p>
          <div className="w-[60%] h-[2px] bg-white/30 my-3" />
          <p className="font-display text-[8vw] uppercase text-[#10B981] text-center leading-none">0%</p>
          <p className="font-display text-[4.5vw] uppercase text-[#10B981]/70 text-center">TOXINS</p>
        </motion.div>

        <motion.p
          className="font-mono text-[3.5vw] text-white/80 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          Confirmed under confocal fluorescence microscopy.
        </motion.p>

        <div className="flex flex-col gap-3 w-full">
          {[
            { label: '← Flattened H. annosum remnants', color: '#FF2D55' },
            { label: '→ Dense P. gigantea advancing front', color: '#10B981' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 bg-black/50 border rounded-xl px-4 py-2"
              style={{ borderColor: item.color + '60' }}
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 + i ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <p className="font-mono text-[3vw] text-white/90">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-l-4 border-white bg-white/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90 font-bold">
            Scientists watched it happen. Touch kills.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Confocal microscopy = a super-powered camera that makes individual hyphae glow like neon.
        </p>
      </motion.div>
    </motion.div>
  );
}
