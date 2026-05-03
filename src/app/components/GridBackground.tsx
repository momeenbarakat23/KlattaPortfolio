import { motion } from 'motion/react';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.02) 49px, rgba(255,255,255,0.02) 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.02) 49px, rgba(255,255,255,0.02) 50px)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 199px, rgba(244,208,63,0.05) 199px, rgba(244,208,63,0.05) 200px),
            repeating-linear-gradient(90deg, transparent, transparent 199px, rgba(244,208,63,0.05) 199px, rgba(244,208,63,0.05) 200px)
          `,
        }}
      />
    </div>
  );
}
