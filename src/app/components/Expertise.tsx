import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { name: 'VISUAL IDENTITY & BRANDING', level: 95 },
  { name: 'TYPOGRAPHY & LAYOUT', level: 92 },
  { name: 'COLOR THEORY', level: 90 },
  { name: 'CREATIVE CONCEPT DEVELOPMENT', level: 88 },
  { name: 'ATTENTION TO DETAIL', level: 94 },
];

const services = [
  'BRAND IDENTITY DESIGN',
  'LOGO DESIGN',
  'SOCIAL MEDIA DESIGN',
  'POSTERS & ADVERTISING',
  'PRINT DESIGN',
  'VISUAL CONCEPTS',
];

const tools = [
  'ADOBE PHOTOSHOP',
  'ADOBE ILLUSTRATOR',
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);

  return (
    <section id="expertise" ref={ref} className="py-32 px-4 md:px-16 border-b border-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.div
            className="text-xs tracking-[0.3em] text-[#F4D03F] mb-4"
            style={{ fontFamily: 'DotGothic16, monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CAPABILITIES
          </motion.div>
          <motion.h2
            className="text-6xl md:text-8xl tracking-tight mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            EXPERTISE
          </motion.h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="tracking-[0.2em] text-sm">{skill.name}</span>
                  <span className="font-mono text-[#F4D03F]">{skill.level}%</span>
                </div>
                <div className="h-[1px] bg-white/20 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[#F4D03F]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div style={{ y }}>
          <motion.div
            className="text-xs tracking-[0.3em] text-[#F4D03F] mb-4"
            style={{ fontFamily: 'DotGothic16, monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            TOOLS & SOFTWARE
          </motion.div>
          <motion.h3
            className="text-4xl md:text-6xl tracking-tight mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            TOOLKIT
          </motion.h3>

          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#F4D03F',
                  color: '#000000',
                  rotateY: 5,
                  z: 50,
                }}
                className="border border-white p-6 text-center tracking-[0.2em] text-xs md:text-sm transition-colors duration-300"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 500,
                  transformStyle: 'preserve-3d',
                }}
              >
                {tool}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 border border-white p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs tracking-[0.3em] mb-4 text-[#F4D03F]" style={{ fontFamily: 'DotGothic16, monospace' }}>
              WHAT I DO
            </div>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="text-sm tracking-[0.15em] border-l-2 border-[#F4D03F] pl-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
