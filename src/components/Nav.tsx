import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const links = [
  {
    name: 'Work',
    href: '#work'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Process',
    href: '#process'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-base/70 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="text-primary font-medium tracking-tight hover:text-accent transition-colors">
          
          BL.
        </a>
        <ul className="flex gap-8 text-sm font-medium text-primary/70">
          {links.map((link) =>
          <li key={link.name}>
              <a
              href={link.href}
              className="hover:text-primary transition-colors relative group">
              
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </motion.nav>);

}