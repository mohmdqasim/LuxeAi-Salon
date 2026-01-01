
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
  { id: 1, title: 'Sign Up', desc: 'Create your free account. No credit card required for the trial.' },
  { id: 2, title: 'Train Your AI', desc: 'Upload your service list, prices, and FAQs. It takes 5 minutes.' },
  { id: 3, title: 'Connect Channels', desc: 'Link your Instagram, WhatsApp, and Website.' },
  { id: 4, title: 'Automate', desc: 'Turn on the AI and watch your calendar fill up automatically.' },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-y border-slate-100 dark:border-slate-800" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Get Started in Minutes</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            No coding required. Setup is simple and intuitive.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-in-up"
              delay={idx * 200}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white dark:bg-card-dark border-4 border-primary/20 flex items-center justify-center mb-6 shadow-xl relative group">
                <div className="absolute inset-0 rounded-full border-4 border-primary scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <span className="text-3xl font-black text-primary relative z-10">{step.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
