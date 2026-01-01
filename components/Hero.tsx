
import React from 'react';
import { PlayCircle, CheckCircle2, Bot, Sparkles, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white dark:bg-[#050510]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-teal-400/10 dark:bg-teal-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <ScrollReveal animation="fade-in-down">
            <div className="group cursor-default inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 hover:border-primary/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                New: Generative Booking AI V2.5
              </span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-slate-900 dark:text-white">
              The Operating System for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-600">
                Modern Beauty Empires.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={400} className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Scale your salon with an AI assistant that masters your schedule, handles multi-channel bookings, and recovers lost revenue—while you focus on what you do best.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up" delay={600}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-primary text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                Launch Your AI Salon <Zap className="w-4 h-4 fill-current" />
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xl shadow-black/5">
                <PlayCircle className="w-5 h-5" /> Watch Product Tour
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Visual Stack */}
        <div className="relative mt-8 md:mt-16">
          <ScrollReveal animation="zoom-in" delay={800} threshold={0.1}>
            <div className="relative mx-auto max-w-6xl aspect-[16/9] rounded-[2.5rem] bg-slate-900 overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-2xl group">
              {/* Main App Preview */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000"
                alt="Salon Management Interface"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20"></div>
              
              {/* UI Overlay Elements */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Metric Card 1 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl animate-float">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500 rounded-xl"><Users className="w-5 h-5 text-white" /></div>
                      <span className="text-xs font-black text-white/70 uppercase tracking-widest">Client Growth</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-1">+142%</div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Last 30 Days</div>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl animate-float animation-delay-2000 hidden md:block">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary rounded-xl"><Bot className="w-5 h-5 text-white" /></div>
                      <span className="text-xs font-black text-white/70 uppercase tracking-widest">AI Efficiency</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-1">98.4%</div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Inquiries Resolved</div>
                  </div>

                  {/* Metric Card 3 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl animate-float animation-delay-4000 hidden md:block">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-600 rounded-xl"><Shield className="w-5 h-5 text-white" /></div>
                      <span className="text-xs font-black text-white/70 uppercase tracking-widest">No-Shows</span>
                    </div>
                    <div className="text-3xl font-black text-white mb-1">-85%</div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">With Auto-Deposits</div>
                  </div>
                </div>
              </div>

              {/* Central Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 pointer-events-auto cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <PlayCircle className="w-10 h-10 text-primary fill-primary" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary to-emerald-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-[80px] opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        {/* Trusted By Section */}
        <ScrollReveal animation="fade-in" delay={1200} className="mt-20 flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="text-2xl font-black tracking-tighter italic">L'ORÉAL</div>
             <div className="text-2xl font-black tracking-tighter italic underline decoration-primary">REVLON</div>
             <div className="text-2xl font-black tracking-tighter italic">DYSON</div>
             <div className="text-2xl font-black tracking-tighter italic">VOGUE</div>
             <div className="text-2xl font-black tracking-tighter italic opacity-50">SALON PLUS</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
