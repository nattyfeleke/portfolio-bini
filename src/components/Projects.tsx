import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FadeIn } from './FadeIn';
const projects = [
{
  id: 1,
  title: 'Soci3ty',
  description:
  'A community & digital engagement platform connecting members through shared experiences.',
  category: 'Web Platform',
  size: 'large',
  link: 'https://www.soci3ty.org/',
  image:
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600'
},
{
  id: 2,
  title: 'Commercial Trade App',
  description: 'A mobile trade and payments experience built on M-Pesa.',
  category: 'Mobile App',
  size: 'small',
  link: 'https://play.google.com/store/apps/details?id=com.mpesa.ctapp&pcampaignid=web_share',
  image:
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
},
{
  id: 3,
  title: 'Sitota',
  description:
  'A social gifting & engagement platform across web and mobile.',
  category: 'Web & Mobile',
  size: 'small',
  link: 'https://sitota.et/',
  image:
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800'
},
{
  id: 4,
  title: 'KisPay',
  description:
  'A payment gateway & merchant solutions platform for web and mobile.',
  category: 'Web & Mobile',
  size: 'small',
  link: 'https://www.kispay.et/',
  image:
  'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800'
}];

export function Projects() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {
    damping: 25,
    stiffness: 300
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 40); // offset by half width
      cursorY.set(e.clientY - 40); // offset by half height
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);
  return (
    <section id="work" className="py-32 bg-base relative cursor-auto">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-xs font-medium pointer-events-none z-50 mix-blend-normal shadow-lg shadow-accent/20"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5
        }}
        transition={{
          opacity: {
            duration: 0.2
          }
        }}>
        
        Open →
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-12">
            Selected Work
          </h2>
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}>
          
          {projects.map((project, index) =>
          <FadeIn
            key={project.id}
            delay={index * 0.1}
            fullWidth
            direction="up">
            
              <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} (opens in a new tab)`}
              className={`group relative block rounded-3xl overflow-hidden bg-surface border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 ${project.size === 'large' ? 'md:col-span-12 aspect-[16/9] md:aspect-[21/9]' : 'md:col-span-4 aspect-square'}`}
              style={{
                cursor: 'none'
              }}>
              
                <div className="absolute inset-0 bg-surface">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-base/90 via-base/40 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-primary/90 mb-4 border border-white/10">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}