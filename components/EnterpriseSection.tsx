
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const EnterpriseSection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-[#050510] dark:to-[#08081a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-black uppercase tracking-widest text-accent">Enterprise Solution</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-primary dark:text-white">
            Built for brands that need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              customization at scale
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Let's tailor LuxeSalon AI to fit your exact salon ecosystem including advanced workflows,
            white-labeling, deeper integrations, and premium onboarding.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
            >
              👉 Contact Us for Custom Pricing <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
            Our enterprise team will work with you 1-on-1 to scope, deploy, and support the ideal automation stack for your locations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

