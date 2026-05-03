import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-16 border-b border-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#F4D03F]"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative border-4 border-white overflow-hidden aspect-[3/4]">
              <motion.img
                src="IMG_9352_2.jpg"
                alt="Mahmoud Mohamed Amer"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-[#F4D03F] p-4"
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-black text-xl tracking-[0.2em]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  MAHMOUD MOHAMED AMER
                </div>
                <div className="text-black text-sm tracking-[0.15em] mt-1" style={{ fontFamily: 'DotGothic16, monospace' }}>
                  GRAPHIC DESIGNER
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-white"
              animate={{
                rotate: [360, 270, 180, 90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </motion.div>

        <div>
          <motion.div
            className="text-xs tracking-[0.3em] text-[#F4D03F] mb-4"
            style={{ fontFamily: 'DotGothic16, monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            WHO I AM
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl tracking-tight mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl leading-relaxed mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 300 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a <span className="text-[#F4D03F]">Graphic Designer</span> focused on creating strong visual
              identities and impactful designs.
            </p>
            <p>
              I believe design is more than aesthetics — it's about{' '}
              <span className="text-[#F4D03F]">communication, emotion, and clarity</span>.
            </p>
            <p>
              My goal is transforming ideas into visuals that stand out, tell a story,
              and leave a lasting impression.
            </p>
          </motion.div>

          <motion.div
            className="border border-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="text-xs tracking-[0.2em] text-[#999999] mb-2" style={{ fontFamily: 'DotGothic16, monospace' }}>
                NAME
              </div>
              <div className="tracking-[0.1em]">Mahmoud Mohamed Amer</div>
            </div>

            <div>
              <div className="text-xs tracking-[0.2em] text-[#999999] mb-2" style={{ fontFamily: 'DotGothic16, monospace' }}>
                AGE
              </div>
              <div className="tracking-[0.1em]">29</div>
            </div>

            <div>
              <div className="text-xs tracking-[0.2em] text-[#999999] mb-2" style={{ fontFamily: 'DotGothic16, monospace' }}>
                LOCATION
              </div>
              <div className="tracking-[0.1em]">Cairo, Egypt</div>
            </div>

            <div>
              <div className="text-xs tracking-[0.2em] text-[#999999] mb-2" style={{ fontFamily: 'DotGothic16, monospace' }}>
                SPECIALIZATION
              </div>
              <div className="tracking-[0.1em]">Graphic Design</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
