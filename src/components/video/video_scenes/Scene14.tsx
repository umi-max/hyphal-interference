import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const bullets = [
  { icon: '🍄', text: 'Fungi grow as thread networks called hyphae' },
  { icon: '⚔️', text: 'Two species fight over the same stump' },
  { icon: '🤝', text: 'Touch triggers a molecular ID check — fail it, die' },
  { icon: '💡', text: 'No toxin needed — contact kills mechanically' },
];

export function Scene14() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2400),
      setTimeout(() => setPhase(5), 3100),
      setTimeout(() => setPhase(6), 4800),
      setTimeout(() => setPhase(7), 6400),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.9, ease: 'easeOut' } }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: 'easeIn' } }}
    >
      <div className="absolute inset-0 z-0 bg-[#050e08]">
        <motion.img
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          src={`${import.meta.env.BASE_URL}images/beat3.png`}
          alt="P. gigantea hyphae"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 9, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      {/* Story spine badge */}
      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">WHAT YOU LEARNED</span>
      </motion.div>

      {/* Main content — full height flex column */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-3 pt-[13vh] pb-[20vh]">

        <motion.p
          className="font-mono text-[3.2vw] text-white/50 uppercase tracking-wider self-start"
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          In 2 minutes, you discovered:
        </motion.p>

        <div className="flex flex-col gap-2.5 w-full">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-white/8 border border-white/15 rounded-xl px-5 py-3"
              initial={{ opacity: 0, x: -25 }}
              animate={phase >= 2 + i ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <span className="text-[5.5vw] flex-shrink-0">{b.icon}</span>
              <p className="font-mono text-[3.2vw] text-white/90 leading-snug">{b.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Title return */}
        <motion.div
          className="w-full text-center mt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-display text-[9vw] uppercase text-white leading-none tracking-tight drop-shadow-2xl">
            HYPHAL INTERFERENCE
          </p>
          <p className="font-mono text-[2.8vw] text-white/40 mt-1">
            First described 1970 · Still a mystery
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="w-full text-center mt-1"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="font-display text-[5.5vw] uppercase text-[#10B981] leading-tight"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Follow for more<br />microscopic combat.
          </motion.p>
        </motion.div>
      </div>

      {/* Explainer pill */}
      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Nature's been running biological security software for millions of years.
        </p>
      </motion.div>

      {/* Director credit */}
      <motion.div
        className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-50 text-center"
        initial={{ opacity: 0 }}
        animate={phase >= 6 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="font-mono text-[2.2vw] text-white/40 tracking-widest uppercase">
          Animation Director
        </p>
        <p className="font-mono text-[2.5vw] text-white/60 tracking-wide font-bold mt-0.5">
          Hafiz Umair Masood Awan
        </p>
        <p className="font-mono text-[2.2vw] text-white/40 tracking-wide mt-0.5">
          YouTube: HUMArecounts
        </p>
      </motion.div>
    </motion.div>
  );
}
