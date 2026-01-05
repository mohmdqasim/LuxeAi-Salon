
import React from 'react';
import { XCircle, CheckCircle2, PhoneOff, Zap, Clock, TrendingUp, Sparkles, Minus, Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const comparisons = [
  {
    category: "Booking Velocity",
    old: "2-4 hours of DM 'phone tag'",
    new: "Instant, 24/7 AI resolution",
    icon: Clock
  },
  {
    category: "Revenue Protection",
    old: "Manual chasing of no-show fees",
    new: "Automated deposits on booking",
    icon: Zap
  },
  {
    category: "Client Reach",
    old: "Only reachable during business hours",
    new: "Multichannel (IG/WA) always-on",
    icon: TrendingUp
  }
];

export const VsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#050510] relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            The Choice is <span className="text-primary italic">Clear.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Stop running your business on outdated friction. Step into the future of high-margin salon operations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Floating VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full z-20 hidden lg:flex items-center justify-center">
            <span className="font-black text-slate-300 dark:text-slate-700 text-sm italic tracking-tighter">VS</span>
          </div>

          {/* Left Side: Traditional */}
          <ScrollReveal animation="slide-in-left" className="flex flex-col">
            <div className="flex-1 p-8 md:p-12 rounded-[3rem] bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/50 group">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <PhoneOff className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">The Old Way</span>
                  <h3 className="text-2xl font-black text-slate-400">Traditional Chaos</h3>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  "Missed calls during busy hours",
                  "Paper appointment books & lost notes",
                  "Revenue leakage from no-shows",
                  "Late-night DM burnout",
                  "Manual daily reports & splits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="p-1 rounded bg-red-500/10 text-red-500/50">
                      <Minus className="w-4 h-4" />
                    </div>
                    <span className="text-slate-400 font-medium text-sm line-through decoration-slate-300/50">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-xs italic text-slate-500 text-center font-medium">
                  "I spend 15 hours a week just replying to messages... it never stops."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: GlamMate AI */}
          <ScrollReveal animation="slide-in-right" className="flex flex-col">
            <div className="flex-1 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white to-emerald-50 dark:from-slate-900 dark:to-emerald-950/20 border-2 border-primary/20 shadow-2xl shadow-primary/5 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Glam Way</span>
                      <h3 className="text-2xl font-black">GlamMate AI</h3>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest animate-pulse-soft">
                    +40% Margin
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    "100% Instant Response Rate",
                    "Automated Cloud-Sync Calendars",
                    "Upfront Non-Refundable Deposits",
                    "24/7 AI-Led IG & WhatsApp Support",
                    "One-Click Payouts & Commission Splits"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="p-1 rounded bg-primary/10 text-primary group-hover/item:scale-125 transition-transform duration-300">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-primary/20 shadow-xl shadow-primary/5 group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                      className="w-10 h-10 rounded-full border-2 border-primary/20" 
                      alt="Reviewer"
                    />
                    <div>
                      <h4 className="text-xs font-black">Sarah Jenkins</h4>
                      <p className="text-[10px] text-slate-400 font-bold">Owner, Glow Bar NYC</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "I finally got my weekends back. The AI handles the bookings, the deposits are automatic, and my chairs are 95% full."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Summary Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {comparisons.map((c, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">{c.category}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400">OLD</span>
                    <span className="text-slate-400">{c.old}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/20 w-1/4"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black text-primary uppercase pt-1">
                    <span>GlamWay</span>
                    <span>{c.new}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full animate-draw"></div>
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
