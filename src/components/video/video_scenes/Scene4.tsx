import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-[#060e08]">
        <motion.img
          className="w-full h-full object-cover opacity-65 mix-blend-luminosity"
          src={`${import.meta.env.BASE_URL}images/beat3.png`}
          alt="P. gigantea hyphae"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 9, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D9B6F]/20 to-transparent" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-[#2D9B6F]/40 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-[#10B981] uppercase tracking-widest">THE DEFENDER</span>
      </motion.div>

      <div className="absolute bottom-[30vh] w-full z-10 px-[8vw] flex flex-col items-end gap-4">
        <motion.div
          className="bg-black/70 backdrop-blur-md border border-[#2D9B6F]/50 px-6 py-4 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.25)] w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        >
          <p className="font-display text-[5.5vw] uppercase text-white tracking-wide">
            🍄 Phlebiopsis gigantea
          </p>
          <p className="font-mono text-[3vw] text-[#10B981] mt-1">
            (FLEE-bee-op-sis gi-GAN-tee-a)
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl rounded-br-none px-5 py-4 shadow-xl relative mr-4 max-w-[80vw]"
          initial={{ opacity: 0, x: 30, rotate: 3 }}
          animate={phase >= 2 ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 30, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-white transform rotate-45" />
          <p className="font-display text-[4.5vw] uppercase text-[#2D9B6F]">
            "Just here to eat wood and clock out. Don't start."
          </p>
        </motion.div>

        <motion.div
          className="border-l-4 border-[#10B981] bg-[#10B981]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            A native wood-rotter. Harmless to trees. But uniquely dangerous to H. annosum.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          P. gigantea: slow-growing, overlooked, and secretly lethal to the villain.
        </p>
      </motion.div>
    </motion.div>
  );
}
