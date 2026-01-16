
import React from 'react';
import { PhoneOff, CalendarRange, XCircle, LayoutGrid, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const problems = [
  {
    icon: PhoneOff,
    title: 'The Silent Revenue Killer',
    subtitle: 'Missed Calls',
    desc: '62% of calls to salons go unanswered. In a high-intent industry, a missed call is an immediate booking for your competitor across the street.',
    color: 'text-primary dark:text-accent',
    bg: 'bg-primary/5 dark:bg-accent/10',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: CalendarRange,
    title: 'Administrative Burnout',
    subtitle: 'Manual Bookings',
    desc: 'Hours wasted on "phone tag" and DM back-and-forths. Your talent belongs on the chair, not the desk.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: XCircle,
    title: 'Empty Chair Syndrome',
    subtitle: 'No-Shows & Cancellations',
    desc: 'Last-minute cancellations kill profitability. Without automated deposits, you bear the full cost of an empty slot.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: LayoutGrid,
    title: 'The "Franken-stack" Chaos',
    subtitle: 'Fragmented Tools',
    desc: 'Using four different apps for bookings, marketing, and payments leads to data silos and client frustration.',
    color: 'text-primary dark:text-slate-300',
    bg: 'bg-primary/5 dark:bg-white/5',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#08081a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <ScrollReveal animation="fade-in-up" className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              The Reality Check
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-primary dark:text-white">
              The High Cost of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Traditional Management
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <ScrollReveal
              key={idx}
              animation="zoom-in"
              delay={idx * 150}
              className={`${item.gridClass} group relative p-8 md:p-10 rounded-[2.5rem] bg-background-light dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden`}
            >
              {/* Card Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                
                <div className="mb-4">
                  <span className={`text-xs font-black uppercase tracking-widest ${item.color} mb-2 block`}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-accent transition-colors text-primary dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute bottom-6 right-8 text-8xl font-black text-slate-200/50 dark:text-slate-800/30 select-none pointer-events-none group-hover:text-accent/5 transition-colors">
                0{idx + 1}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up" delay={800} className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-2 pl-6 pr-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
              Ready to stop the leakage?
            </p>
            <button className="bg-primary text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-slate-800 transition-all">
              See the Fix
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
