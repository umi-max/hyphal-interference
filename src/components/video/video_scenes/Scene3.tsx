import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
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
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ y: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover opacity-70 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat2.png`}
          alt="H. annosum hyphae"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 9, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF2D55]/15 to-transparent" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-[#FF2D55]/40 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-[#FF6B35] uppercase tracking-widest">THE PATHOGEN</span>
      </motion.div>

      <div className="absolute top-[13vh] w-full z-10 px-[8vw] flex flex-col items-start gap-4">
        <motion.div
          className="bg-black/70 backdrop-blur-md border border-[#FF2D55]/50 px-6 py-4 rounded-xl shadow-[0_0_40px_rgba(255,45,85,0.3)]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        >
          <p className="font-display text-[5.5vw] uppercase text-white tracking-wide">
            🦠 Heterobasidion annosum
          </p>
          <p className="font-mono text-[3vw] text-[#FF6B35] mt-1">
            (het-er-oh-BAY-sid-ee-on an-OH-sum)
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl rounded-tl-none px-5 py-4 shadow-xl relative ml-4 max-w-[80vw]"
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          animate={phase >= 2 ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -30, rotate: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="absolute -top-3 -left-3 w-5 h-5 bg-white transform rotate-45" />
          <p className="font-display text-[4.5vw] uppercase text-[#FF2D55]">
            "IT'S ALL MINE!! Every stump, every root."
          </p>
        </motion.div>

        <motion.div
          className="border-l-4 border-[#00B4D8] bg-[#00B4D8]/10 px-5 py-3 rounded-r-lg w-full mt-2"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            ⚠ The #1 fungal threat to conifer plantations worldwide. Spreads underground, kills trees from the roots up.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          H. annosum kills trees from the roots up. Entire forests fear it.
        </p>
      </motion.div>
    </motion.div>
  );
}
