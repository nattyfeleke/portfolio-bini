import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
export function App() {
  return (
    <div className="min-h-screen bg-base text-primary selection:bg-accent selection:text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </div>);

}