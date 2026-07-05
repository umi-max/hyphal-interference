import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene9() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5500),
      setTimeout(() => setPhase(5), 7000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ scale: 1.3, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover opacity-65 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat7.png`}
          alt="fungal vacuolation"
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 9, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />
        {/* Circular vignette for "inside a cell" feel */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)' }} />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">INSIDE THE ENEMY</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-5 pt-[13vh] pb-[22vh]">
        <motion.p
          className="font-mono text-[4.5vw] text-white/80 text-center italic"
          initial={{ opacity: 0, y: -10 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          Inside the villain's cell…
        </motion.p>

        {/* Expanding bubble animation */}
        <motion.div
          className="relative w-[50vw] h-[20vh] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-white/50"
              style={{ width: `${18 + i * 12}%`, height: `${18 + i * 12}%` }}
              animate={phase >= 2 ? { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] } : { scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <span className="font-mono text-[3vw] text-white/70 z-10">vacuoles inflating</span>
        </motion.div>

        <div className="flex flex-col gap-3 w-full">
          {[
            { text: 'Vacuoles (water-filled sacs) balloon outward', delay: 2 },
            { text: 'Turgor pressure drops — the force keeping cells firm', delay: 3 },
            { text: 'The cell becomes a deflating balloon.', delay: 4 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/8 border border-white/15 rounded-xl px-5 py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= item.delay ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-mono text-[3.5vw] text-white/90">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Pressure gauge */}
        <motion.div
          className="w-full bg-black/60 border border-white/20 rounded-xl px-5 py-3"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-[3vw] text-white/70 mb-2">TURGOR PRESSURE</p>
          <div className="h-4 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(to right, #10B981, #FF2D55)' }}
              initial={{ width: '95%' }}
              animate={phase >= 3 ? { width: '5%' } : { width: '95%' }}
              transition={{ duration: 3, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[2.5vw] text-[#10B981]">FULL</span>
            <span className="font-mono text-[2.5vw] text-[#FF2D55]">EMPTY</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl rounded-tl-none px-5 py-3 shadow-lg w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p className="font-display text-[4vw] uppercase text-[#FF2D55]">"Why am I full of bubbles?! WHERE IS MY TURGOR?!"</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Turgor = water pressure keeping cells firm. Lose it, and you collapse.
        </p>
      </motion.div>
    </motion.div>
  );
}
