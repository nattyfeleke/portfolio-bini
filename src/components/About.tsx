import React from 'react';
import { FadeIn } from './FadeIn';
export function About() {
  const skills = [
  'Figma',
  'Prototyping',
  'User Research',
  'Design Systems',
  'Interaction Design',
  'Wireframing',
  'Usability Testing'];

  return (
    <section id="about" className="py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-6">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-primary/90 leading-relaxed mb-8">
              I'm a senior product designer with a passion for creating
              intuitive, engaging, and accessible digital experiences. I bridge
              the gap between complex problems and elegant solutions, always
              keeping the user at the center of my process.
            </p>
            <div className="flex items-end gap-4">
              <span className="font-serif text-7xl md:text-8xl text-primary leading-none tracking-tightest">
                4+
              </span>
              <span className="text-primary/60 text-lg mb-2">
                years of
                <br />
                experience
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-surface p-8 md:p-12 rounded-3xl border border-white/5">
              <h3 className="text-lg font-medium text-primary mb-6">
                Core Capabilities
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) =>
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-primary/80 bg-white/5 hover:bg-accent/20 hover:border-accent/50 hover:text-primary transition-colors cursor-default">
                  
                    {skill}
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}