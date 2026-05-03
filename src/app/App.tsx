import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import HorizontalPortfolio from './components/HorizontalPortfolio';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import StickyNav from './components/StickyNav';
import GridBackground from './components/GridBackground';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <GridBackground />
      <CustomCursor position={cursorPosition} />
      <StickyNav />

      <div className="relative z-10">
        <Hero />

        <About />

        <ProjectGrid />

        <HorizontalPortfolio />

        <Expertise />

        <Contact />
      </div>
    </div>
  );
}
