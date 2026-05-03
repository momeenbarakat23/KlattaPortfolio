import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'WORK' },
    { id: 'expertise', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-8 right-8 z-40 hidden md:flex flex-col gap-4"
    >
      {links.map((link) => (
        <motion.button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-white hover:text-[#F4D03F] transition-colors duration-300 text-xs tracking-[0.2em] text-right"
          style={{ fontFamily: 'DotGothic16, monospace' }}
          whileHover={{ scale: 1.1, x: -5 }}
          transition={{ duration: 0.2 }}
        >
          {link.label}
        </motion.button>
      ))}
    </motion.nav>
  );
}
