import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene10() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4500),
      setTimeout(() => setPhase(5), 6200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ scale: 1.3, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat8.png`}
          alt="squashing hyphae"
          animate={phase >= 2 ? { scale: [1, 1.05], filter: ['contrast(1)', 'contrast(1.4)', 'contrast(1)'] } : { scale: 1 }}
          transition={{ duration: 0.6, times: [0, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE KILL</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-5 pt-[13vh] pb-[22vh]">
        <motion.div
          className="w-full py-5 px-6 text-center"
          style={{ background: '#0A0A0A', transform: 'skewY(-2deg)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          <p className="font-display text-[9vw] uppercase text-white leading-none">💥 SQUASHED</p>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          {['FLATTENED', '→', 'THINNED', '→', 'BURST'].map((word, i) => (
            <motion.span
              key={i}
              className={`font-display text-[4.5vw] uppercase ${word === '→' ? 'text-white/40' : 'text-[#FF2D55]'}`}
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Flash ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
          transition={{ duration: 0.4, times: [0, 0.2, 1] }}
        />

        <motion.div
          className="border-l-4 border-[#00B4D8] bg-[#00B4D8]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            P. gigantea physically presses through the weakened, depressurised walls — mechanical rupture.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 opacity-40 rounded-2xl rounded-tl-none px-4 py-2 self-start"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-[3.5vw] uppercase text-white">"my… personal… bubble…"</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl rounded-br-none px-5 py-3 self-end shadow-lg"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p className="font-display text-[4vw] uppercase text-[#2D9B6F]">"Nothing personal. Science."</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Not poison. P. gigantea literally squashes the villain like a deflated juice box.
        </p>
      </motion.div>
    </motion.div>
  );
}
