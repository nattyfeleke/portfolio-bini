import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '../assets/image.png';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-20 md:pb-0">
      {/* Ambient Orb */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-orb-float pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-start text-left order-2 md:order-1">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tightest text-primary mb-8 italic">
            
            Designing experiences people remember.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="text-lg md:text-xl text-primary/70 max-w-lg mb-12 leading-relaxed">
            
            UI/UX Designer crafting interfaces that balance beauty with
            usability.
          </motion.p>

          <motion.a
            href="#work"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="group flex items-center gap-3 bg-primary text-base px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-all duration-300">
            
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          className="relative order-1 md:order-2 justify-self-center md:justify-self-end w-full max-w-sm md:max-w-md">
          
          {/* Violet glow */}
          <div
            className="absolute -inset-4 bg-accent/30 rounded-[28px] blur-2xl pointer-events-none"
            aria-hidden="true" />
          
          {/* Frame */}
          <div className="relative rounded-[20px] overflow-hidden border border-accent/40 shadow-2xl shadow-accent/20 aspect-[4/5]">
            <img
              src={heroImage}
              alt="Portrait of the designer"
              className="w-full h-full object-cover" />
            
          </div>
        </motion.div>
      </div>
    </section>);

}
