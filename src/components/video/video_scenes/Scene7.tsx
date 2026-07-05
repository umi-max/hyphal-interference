import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const steps = [
  { icon: '👆', label: 'CONTACT', sub: 'hyphae touch' },
  { icon: '❌', label: 'ID CHECK FAILS', sub: 'non-self detected' },
  { icon: '💀', label: 'DEATH SEQUENCE', sub: 'begins immediately' },
];

export function Scene7() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 5600),
      setTimeout(() => setPhase(6), 7800),
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
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          src={`${import.meta.env.BASE_URL}images/beat5.png`}
          alt="hyphal contact point"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 10, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />
        {/* Scanner line */}
        <motion.div
          className="absolute left-0 right-0 h-[3px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, #10B981, transparent)', boxShadow: '0 0 20px #10B981' }}
          animate={{ top: ['15%', '85%', '15%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE WEAPON</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-5 pt-[13vh] pb-[22vh]">
        <motion.h2
          className="font-display text-[8vw] uppercase text-white drop-shadow-2xl text-center leading-tight tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={phase >= 1 ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        >
          HYPHAL INTERFERENCE
        </motion.h2>

        <motion.div
          className="bg-black/70 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.5vw] text-white/90 text-center">
            What happens when P. gigantea touches H. annosum:
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-white/8 border border-white/15 rounded-xl px-5 py-3"
              initial={{ opacity: 0, x: -30 }}
              animate={phase >= 3 + i ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="text-[6vw]">{step.icon}</span>
              <div>
                <p className="font-display text-[4.5vw] uppercase text-white leading-none">{step.label}</p>
                <p className="font-mono text-[3vw] text-white/60 mt-0.5">{step.sub}</p>
              </div>
              {i < 2 && <span className="ml-auto font-display text-[5vw] text-[#10B981]">→</span>}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-l-4 border-[#FF2D55] bg-[#FF2D55]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0 }}
          animate={phase >= 6 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            No spray. No toxin. Just touch — and the invader starts dying.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          Like a biological password — get it wrong, and you're deleted.
        </p>
      </motion.div>
    </motion.div>
  );
}
