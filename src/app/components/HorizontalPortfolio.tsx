import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import img1 from '../../imports/IMG_9371.jpg'
import img2 from '../../imports/IMG_9372_2.jpg'
import img3 from '../../imports/IMG_9373.PNG'
import img4 from '../../imports/IMG_9374.PNG'

const portfolioItems = [
  {
    id: 1,
    image: {img1},
    title: 'BRAND SYSTEMS',
    year: '2026',
  },
  {
    id: 2,
    image: {img2},
    title: 'ENTERTAINMENT',
    year: '2025',
  },
  {
    id: 3,
    image: {img3},
    title: 'EDITORIAL',
    year: '2025',
  },
  {
    id: 4,
    image: {img4},
    title: 'IDENTITY',
    year: '2024',
  },
];

export default function HorizontalPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const portfolioItems = [
  {
    id: 1,
    title: "Project",
    image: [img1, img2, img3, img4],
    year:"2026"
  }
  ];

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden border-y border-white">
      <div className="px-4 md:px-16 mb-16">
        <motion.div
          className="text-xs tracking-[0.3em] text-[#F4D03F] mb-4"
          style={{ fontFamily: 'DotGothic16, monospace' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SCROLL HORIZONTAL
        </motion.div>
        <motion.h2
          className="text-6xl md:text-8xl tracking-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PORTFOLIO
        </motion.h2>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-8 px-4 md:px-16"
      >
        {[...portfolioItems, ...portfolioItems].map((item, index) => (
          
          <motion.div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-[80vw] md:w-[40vw] group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="border border-white aspect-[4/5] overflow-hidden relative">
              <motion.img
                src={item.image[index]}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="absolute top-0 right-0 bg-[#F4D03F] text-black px-4 py-2 text-xs tracking-[0.2em]"
                style={{ fontFamily: 'DotGothic16, monospace' }}
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.year}
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white pt-4">
              <div className="tracking-[0.2em] text-sm md:text-base" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
                {item.title}
              </div>
              <motion.div
                className="w-12 h-12 border border-white flex items-center justify-center"
                whileHover={{ backgroundColor: '#F4D03F', borderColor: '#F4D03F' }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
