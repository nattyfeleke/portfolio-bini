import React from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight, Linkedin, Twitter, Download } from "lucide-react";
export function Contact() {
  return (
    <section id="contact" className="py-40 bg-base relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-12 tracking-tightest italic">
            Let's build something <br className="hidden md:block" /> meaningful.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="mailto:binyamlemma2@gmail.com"
            className="inline-block text-2xl md:text-4xl text-primary/80 hover:text-primary transition-colors relative group mb-16"
          >
            binyamlemma2@gmail.com
            <span className="absolute -bottom-2 left-0 w-full h-px bg-white/20 group-hover:bg-accent transition-colors duration-300"></span>
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/UX.pdf"
              download
              aria-label="Download resume"
              className="flex items-center gap-2 border border-white/10 text-primary px-6 py-3 rounded-full hover:bg-accent/5 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <div className="flex items-center gap-4 ml-0 sm:ml-4">
              <a
                href="https://www.linkedin.com/in/binyam-lemma-0033631b4"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://t.me/Bini_L"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary/70 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <title>Telegram</title>
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center text-primary/30 text-sm">
        © {new Date().getFullYear()} UI/UX Designer. All rights reserved.
      </div>
    </section>
  );
}
