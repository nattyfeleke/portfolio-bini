import React from 'react';
import { FadeIn } from './FadeIn';
export function Testimonials() {
  const testimonials = [
  {
    quote:
    'Their ability to translate complex requirements into elegant, intuitive interfaces is unmatched. They elevated our entire product experience.',
    name: 'Sarah Jenkins',
    role: 'VP of Product, FinTech Co.'
  },
  {
    quote:
    "A true partner in the design process. They don't just make things look good; they think deeply about the user journey and system architecture.",
    name: 'Marcus Chen',
    role: 'Engineering Lead, HealthApp'
  }];

  return (
    <section className="py-32 bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {testimonials.map((testimonial, index) =>
          <FadeIn key={index} delay={index * 0.2} direction="up">
              <div className="p-8 md:p-12 bg-base rounded-3xl border border-white/5 h-full flex flex-col justify-between">
                <p className="text-lg md:text-xl text-primary/90 leading-relaxed mb-12 font-serif italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-primary font-medium">{testimonial.name}</p>
                  <p className="text-primary/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}