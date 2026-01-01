
import React from 'react';
import { PlayCircle, CheckCircle2, Bot, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal animation="fade-in-down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> New V2.0 Released
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-up" delay={200}>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                AI That Runs Your Salon While You <span className="text-primary">Focus on Beauty</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Automate bookings, answer clients 24/7, reduce no-shows, and manage all client conversations from one AI assistant.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={600}>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-1">
                  Start Free Trial
                </button>
                <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-lg font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  <PlayCircle className="w-6 h-6" /> Watch Demo
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in" delay={800}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 14-day free trial
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative perspective-1000 group">
            <ScrollReveal animation="zoom-in" delay={300} className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 transition-transform duration-700 group-hover:rotate-y-3">
              <img
                src="https://picsum.photos/seed/salon-ui/1200/900"
                alt="Salon Management UI"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

              {/* Floating Chat Mockup */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-4 border border-slate-100 dark:border-slate-800 animate-float">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">LuxeBot</h4>
                    <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-[13px]">
                  <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-lg rounded-tl-none mr-8 animate-slide-in-left animation-delay-1000">
                    Hello! Do you have any openings for a balayage this Saturday?
                  </div>
                  <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-lg rounded-tr-none ml-8 text-right text-primary dark:text-blue-400 animate-slide-in-right animation-delay-2000">
                    Yes! We have an opening at 2:00 PM with Sarah. Would you like to book it?
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
