import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      initial={{ scale: 0.3, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ scale: 1.3, opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          className="w-full h-full object-cover mix-blend-screen opacity-80"
          src={`${import.meta.env.BASE_URL}images/beat1.png`}
          alt="glowing pine stump"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 7, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ background: ['radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%)', 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.9) 100%)', 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Story spine badge — top-left, safely below device status bar */}
      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE BATTLEFIELD</span>
      </motion.div>

      {/* Main kinetic title — vertically centred */}
      <div className="relative z-10 flex flex-col items-center px-[8vw]">
        <motion.h1
          className="font-display text-[11vw] uppercase leading-tight tracking-tighter text-white drop-shadow-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {'A FUNGUS '.split('').map((char, i) => (
            <motion.span
              key={`a-${i}`}
              className="inline-block"
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, delay: phase >= 1 ? i * 0.08 : 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <br />
          {'TURF WAR'.split('').map((char, i) => (
            <motion.span
              key={`b-${i}`}
              className="inline-block text-[#2D9B6F]"
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, delay: phase >= 1 ? (i * 0.08) + 0.65 : 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-white/80 font-mono text-[3.5vw] mt-6 tracking-wide drop-shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Underground. Microscopic. Absolutely brutal.
        </motion.p>
      </div>

      {/* Explainer pill — anchored above bottom safe zone */}
      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw] shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          A dead pine stump is one of the most fought-over pieces of real estate in the forest.
        </p>
      </motion.div>

      {/* Director credit — bottom of frame */}
      <motion.div
        className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <p className="font-mono text-[2.2vw] text-white/50 tracking-widest uppercase">
          Animation Director
        </p>
        <p className="font-mono text-[2.5vw] text-white/70 tracking-wide font-bold mt-0.5">
          Hafiz Umair Masood Awan
        </p>
      </motion.div>
    </motion.div>
  );
}
