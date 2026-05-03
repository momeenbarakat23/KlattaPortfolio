import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import img1 from '../../imports/IMG_9371.jpg'
import img2 from '../../imports/IMG_9372_2.jpg'
import img3 from '../../imports/IMG_9373.PNG'
import img4 from '../../imports/IMG_9374.PNG'

const projects = [
  {
    id: 1,
    image: '../../imports/IMG_9371.jpg',
    title: 'BRAND DESIGN',
    category: 'COMMERCIAL',
    description: 'McDonald\'s & ENVIE Food Branding',
  },
  {
    id: 2,
    image: '../../imports/IMG_9372_2.jpg',
    title: 'MUSIC POSTERS',
    category: 'ENTERTAINMENT',
    description: 'Artist Promotion & Event Design',
  },
  {
    id: 3,
    image: '../../imports/IMG_9373.PNG',
    title: 'CREATIVE WORK',
    category: 'EDITORIAL',
    description: 'Bold Typography & Visual Impact',
  },
  {
    id: 4,
    image: '../../imports/IMG_9374.PNG',
    title: 'LOGO DESIGN',
    category: 'BRANDING',
    description: 'Modern Brand Identity Systems',
  },
];

export default function ProjectGrid() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section id="work" ref={ref} className="py-32 px-4 md:px-16 relative">
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 text-[20vw] font-mono opacity-5 pointer-events-none"
      >
        WORK
      </motion.div>

      <div className="mb-16 border-b border-white pb-8">
        <motion.h2
          className="text-6xl md:text-8xl tracking-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SELECTED WORK
        </motion.h2>
        <motion.div
          className="text-[#F4D03F] tracking-[0.3em] mt-4 text-sm"
          style={{ fontFamily: 'DotGothic16, monospace' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          2024 - 2026
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="border border-white overflow-hidden aspect-[3/4] relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[#F4D03F] z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotateY: isHovered ? 8 : 0,
            rotateX: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        />

        <motion.div
          className="absolute inset-0 bg-black/90 z-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center px-4">
            <motion.div
              className="text-xs tracking-[0.3em] mb-2 text-[#F4D03F]"
              style={{ fontFamily: 'DotGothic16, monospace' }}
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.category}
            </motion.div>
            <motion.div
              className="text-2xl md:text-4xl tracking-tight mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.title}
            </motion.div>
            <motion.div
              className="text-sm text-[#999999]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300 }}
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {project.description}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-4 flex justify-between items-start border-t border-white pt-4">
        <div>
          <div className="tracking-[0.2em] text-sm">{project.title}</div>
          <div className="text-xs text-[#999999] mt-1 font-mono">
            {project.category}
          </div>
        </div>
        <div className="text-4xl">
          {String(project.id).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}
