import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function GlitchText({ text, className = '', delay = 0 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`01';
    const timeout = setTimeout(() => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = 8;

      const interval = setInterval(() => {
        if (iterations < maxIterations) {
          setDisplayText(
            text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iterations) return text[index];
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              })
              .join('')
          );
          iterations++;
        } else {
          setDisplayText(text);
          setIsGlitching(false);
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {displayText}
    </motion.div>
  );
}
