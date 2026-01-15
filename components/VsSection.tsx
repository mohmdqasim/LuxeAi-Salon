
import React from 'react';
import { XCircle, CheckCircle2, PhoneOff, Zap, Clock, TrendingUp, Sparkles, Minus, Plus, Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const comparisons = [
  {
    category: "BOOKING VELOCITY",
    oldLabel: "2-4 hours of DM 'phone tag'",
    newLabel: "Instant, 24/7 AI resolution",
    icon: Clock,
    oldValue: 25,
    newValue: 100
  },
  {
    category: "REVENUE PROTECTION",
    oldLabel: "Manual chasing of no-show fees",
    newLabel: "Upfront Non-Refundable Deposits",
    icon: Zap,
    oldValue: 15,
    newValue: 100
  },
  {
    category: "CLIENT REACH",
    oldLabel: "Only reachable during business hours",
    newLabel: "Multichannel (IG/WA) always-on",
    icon: TrendingUp,
    oldValue: 35,
    newValue: 100
  }
];

export const VsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#050510] relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-slate-200/20 dark:bg-slate-800/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05] -z-10">
             <span className="text-9xl md:text-[12rem] font-black tracking-tighter whitespace-nowrap">The Choice is Clear.</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-primary dark:text-white leading-tight">
            The Choice is <span className="text-accent italic">Clear.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Stop running your business on outdated friction. Step into the future of high-margin salon operations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch relative">
          {/* Floating VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-slate-950 border-[6px] border-slate-50 dark:border-[#050510] rounded-full z-30 hidden lg:flex items-center justify-center shadow-xl">
            <span className="font-black text-slate-300 dark:text-slate-700 text-sm italic tracking-tighter">vs</span>
          </div>

          {/* Left Side: Traditional */}
          <ScrollReveal animation="slide-in-left" className="flex flex-col">
            <div className="flex-1 p-10 md:p-14 rounded-[3.5rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/40 relative overflow-hidden group">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400">
                  <PhoneOff className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1 block">The Old Way</span>
                  <h3 className="text-3xl font-black text-slate-400 tracking-tight">Traditional Chaos</h3>
                </div>
              </div>

              <div className="space-y-8 mb-16">
                {[
                  "Missed calls during busy hours",
                  "Paper appointment books & lost notes",
                  "Revenue leakage from no-shows",
                  "Late-night DM burnout",
                  "Manual daily reports & splits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group/item opacity-60">
                    <div className="w-6 h-6 rounded-md bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-400/60">
                      <Minus className="w-4 h-4" />
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto p-8 rounded-3xl bg-white/40 dark:bg-slate-800/20 border border-dashed border-slate-200 dark:border-slate-700">
                <p className="text-xs italic text-slate-400 text-center font-bold tracking-tight leading-relaxed">
                  "I spend 15 hours a week just replying to messages... it never stops."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: GlamMate AI */}
          <ScrollReveal animation="slide-in-right" className="flex flex-col">
            <div className="flex-1 p-10 md:p-14 rounded-[3.5rem] bg-white dark:bg-[#0a0a24]/30 border-2 border-accent/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
              {/* Decorative Circle from Screenshot */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/5 rounded-full pointer-events-none"></div>
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-slate-100 dark:bg-slate-800/20 rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent shadow-lg shadow-primary/20">
                      <Sparkles className="w-7 h-7 fill-accent" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent mb-1 block">The Glam Way</span>
                      <h3 className="text-3xl font-black text-primary dark:text-white tracking-tight">GlamMate AI</h3>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#E5F7EF] dark:bg-emerald-900/20 text-[#10B981] text-[10px] font-black uppercase tracking-widest border border-emerald-500/10">
                    +40% Margin
                  </div>
                </div>

                <div className="space-y-8 mb-16">
                  {[
                    "100% Instant Response Rate",
                    "Automated Cloud-Sync Calendars",
                    "Upfront Non-Refundable Deposits",
                    "24/7 AI-Led IG & WhatsApp Support",
                    "One-Click Payouts & Commission Splits"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group/item">
                      <div className="w-6 h-6 rounded-md bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent group-hover/item:scale-110 transition-transform">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 font-bold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Card */}
                <div className="mt-auto p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-xl shadow-black/[0.02] group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                       <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                        className="w-12 h-12 rounded-full object-cover grayscale-0" 
                        alt="Sarah Jenkins"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-primary dark:text-white">Sarah Jenkins</h4>
                      <p className="text-[10px] text-slate-400 font-bold tracking-tight">Owner, Glow Bar NYC</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-300 leading-relaxed italic tracking-tight">
                    "I finally got my weekends back. The AI handles the bookings, the deposits are automatic, and my chairs are 95% full."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Summary Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {comparisons.map((c, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 150}>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 hover:border-accent/30 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-accent/[0.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{c.category}</span>
                </div>
                
                <div className="space-y-6">
                  {/* Old Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold tracking-tight">
                      <span className="text-slate-300">OLD</span>
                      <span className="text-slate-400">{c.oldLabel}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-200 dark:bg-slate-700 transition-all duration-1000 delay-500" style={{ width: `${c.oldValue}%` }}></div>
                    </div>
                  </div>

                  {/* New Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest pt-1">
                      <span className="text-accent/60">GlamWay</span>
                      <span className="text-primary dark:text-white">{c.newLabel}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                      <div className="h-full bg-accent transition-all duration-1000 delay-700 animate-draw" style={{ width: `${c.newValue}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
