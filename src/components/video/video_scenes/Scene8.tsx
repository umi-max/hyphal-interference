import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene8() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 4000),
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
      <div className="absolute inset-0 z-0 bg-[#080c12]">
        <motion.img
          className="w-full h-full object-cover opacity-45"
          src={`${import.meta.env.BASE_URL}images/beat6.png`}
          alt="laboratory petri dish"
          animate={{ scale: [1.04, 1] }}
          transition={{ duration: 7, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      <motion.div
        className="absolute top-[5vh] left-[6vw] z-50 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <span className="font-mono text-[2.5vw] text-white/90 uppercase tracking-widest">THE MYSTERY</span>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-[8vw] gap-6 pt-[13vh] pb-[22vh]">
        <motion.div
          className="bg-white px-8 py-7 rounded-2xl shadow-2xl w-full"
          style={{ transform: 'rotate(-2deg)' }}
          initial={{ opacity: 0, x: -40, rotate: -8 }}
          animate={phase >= 1 ? { opacity: 1, x: 0, rotate: -2 } : { opacity: 0, x: -40, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <p className="font-display text-[8vw] uppercase text-[#0A0A0A] leading-none">
            Named in 1970.
          </p>
          <p className="font-display text-[7vw] uppercase text-[#FF2D55] leading-none mt-1">
            Still a mystery.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-mono text-[3.2vw] text-gray-700 leading-snug">
              Mycologists Ikediugwu &amp; Webster first described hyphal interference in 1970. More than 50 years later, exactly how the kill happens at the molecular level is still debated.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="border-l-4 border-[#00B4D8] bg-[#00B4D8]/10 px-5 py-3 rounded-r-lg w-full"
          initial={{ opacity: 0, x: -15 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.2vw] text-white/90">
            Self/non-self recognition evolved independently in multiple fungal lineages — ancient, conserved, powerful.
          </p>
        </motion.div>

        <motion.div
          className="bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-6 py-4 w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[3.5vw] text-white/80 text-center italic">
            "Great science often raises more questions than it answers."
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-6 py-3 w-[84vw]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
      >
        <p className="font-mono text-[2.8vw] text-[#0A0A0A] font-bold text-center leading-snug">
          This is one of biology's genuinely open mysteries. Scientists are still working on it.
        </p>
      </motion.div>
    </motion.div>
  );
}
