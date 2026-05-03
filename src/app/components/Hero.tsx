import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const [glitchText, setGlitchText] = useState('PORTFOLIO');

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const originalText = 'PORTFOLIO';
    let frame = 0;

    const interval = setInterval(() => {
      if (frame < 3) {
        setGlitchText(
          originalText
            .split('')
            .map((char) => (Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
            .join('')
        );
        frame++;
      } else {
        setGlitchText(originalText);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#F4D03F] tracking-[0.3em] mb-4 text-sm md:text-base"
            style={{ fontFamily: 'DotGothic16, monospace' }}
          >
            MAHMOUD MOHAMED AMER
          </motion.div>
          <h1 className="text-6xl md:text-9xl tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            {glitchText}
          </h1>
          <div className="text-xl md:text-3xl tracking-[0.2em] text-[#999999]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300 }}>
            GRAPHIC DESIGNER
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-32 h-32 md:w-64 md:h-64 mx-auto"
        >
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-full h-full relative"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute inset-0 border-4 border-white bg-white/5 backdrop-blur-md" style={{
              transform: 'translateZ(0px)',
              boxShadow: '0 0 60px rgba(244, 208, 63, 0.3)',
            }} />
            <div className="absolute inset-4 border-2 border-[#F4D03F]/50" style={{ transform: 'translateZ(20px)' }} />
            <div className="absolute inset-8 border border-white/30" style={{ transform: 'translateZ(40px)' }} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
        }} />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#F4D03F]"
            style={{
              width: Math.random() * 120 + 40,
              height: 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 180 - 90,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.15, scaleX: 1 }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[2px] h-20 bg-gradient-to-b from-[#F4D03F] to-transparent" />
      </motion.div>
    </section>
  );
}
