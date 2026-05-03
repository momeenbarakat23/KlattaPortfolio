import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socials = [
    { name: 'KLA TA', url: 'https://www.facebook.com/KLA.TA' },
    { name: 'THEKLATA', url: 'https://www.instagram.com/theklata' },
    { name: 'BEHANCE', url: '#' },
    { name: 'LINKEDIN', url: '#' },
  ];

  return (
    <section id="contact" className="py-32 px-4 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.div
            className="text-xs tracking-[0.3em] text-[#F4D03F] mb-4"
            style={{ fontFamily: 'DotGothic16, monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.div>
          <motion.h2
            className="text-6xl md:text-8xl tracking-tight mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
          </motion.h2>

          <motion.div
            className="space-y-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
          >
            <a
              href="mailto:klategraffiti022@Gmail.com"
              className="block hover:text-[#F4D03F] transition-colors duration-300 break-all"
            >
              KLATEGRAFFITI022@GMAIL.COM
            </a>
            <a
              href="tel:+201142859472"
              className="block text-[#999999] hover:text-[#F4D03F] transition-colors duration-300"
            >
              +20 114 285 9472
            </a>
            <div className="text-[#999999] text-sm tracking-[0.2em] pt-4 border-t border-white/20">
              CAIRO, EGYPT - MAADI
            </div>
          </motion.div>

          <motion.div
            className="mt-12 border-t border-white pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-xs tracking-[0.3em] mb-6 text-[#999999]" style={{ fontFamily: 'DotGothic16, monospace' }}>
              FOLLOW
            </div>
            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="block text-lg tracking-[0.2em] relative group"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className={hoveredSocial === social.name ? 'text-[#F4D03F]' : ''}>
                    {social.name}
                  </span>
                  <motion.div
                    className="absolute left-0 bottom-0 h-[1px] bg-[#F4D03F]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredSocial === social.name ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-md aspect-square"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-white"
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="absolute inset-8 border-2 border-[#F4D03F]"
              animate={{
                rotateZ: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-8xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  LET'S
                </div>
                <div className="text-6xl md:text-8xl text-[#F4D03F]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  WORK
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-32 border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.2em] text-[#999999]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'DotGothic16, monospace' }}
      >
        <div>© 2026 MAHMOUD MOHAMED AMER</div>
        <div>CAIRO, EGYPT</div>
      </motion.div>
    </section>
  );
}
