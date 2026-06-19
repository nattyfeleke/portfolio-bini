import React from 'react';
import { FadeIn } from './FadeIn';
export function Process() {
  const steps = [
  {
    title: 'Discover',
    description:
    'Understanding the problem space, user needs, and business goals through deep research.'
  },
  {
    title: 'Define',
    description:
    'Synthesizing insights into clear strategies, wireframes, and architectural foundations.'
  },
  {
    title: 'Deliver',
    description:
    'Crafting polished, accessible interfaces and collaborating closely with engineering.'
  }];

  return (
    <section id="process" className="py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-16">
            The Process
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-0 w-full h-px bg-white/10 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) =>
            <FadeIn key={step.title} delay={index * 0.2} direction="up">
                <div className="relative">
                  {/* Node */}
                  <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-8 relative z-10 group hover:border-accent transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                  </div>

                  <h3 className="text-2xl font-serif text-primary mb-4 italic tracking-tightest">
                    {step.title}
                  </h3>
                  <p className="text-primary/60 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>);

}