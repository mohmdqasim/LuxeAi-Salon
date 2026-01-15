
import React from 'react';
import { MessageSquare, Bot, CheckCircle, CalendarDays, Bell, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// Moved Instagram definition here to fix block-scoped variable usage before declaration error
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const steps = [
  {
    icon: MessageSquare,
    title: 'Instant Inquiry',
    desc: 'Client sends a DM on Instagram or WhatsApp. No more waiting for "business hours".',
    tag: 'PHASE 01',
    snippet: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 opacity-50">
          <Instagram className="w-2.5 h-2.5" />
          <span className="text-[8px] font-black uppercase tracking-widest">Instagram DM</span>
        </div>
        <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm">
          <p className="text-[10px] text-white/90 italic font-medium leading-tight">
            "Hi! Any balayage slots for Saturday?"
          </p>
        </div>
      </div>
    )
  },
  {
    icon: Bot,
    title: 'AI Processing',
    desc: 'GlamBot instantly cross-checks your staff schedules, prices, and available durations.',
    tag: 'PHASE 02',
    snippet: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 shadow-[0_0_15px_rgba(188,156,107,0.2)]">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-2/3 animate-pulse"></div>
            </div>
            <div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="text-[8px] font-bold text-accent/60 uppercase tracking-widest text-center">Checking Availability...</div>
      </div>
    )
  },
  {
    icon: CheckCircle,
    title: 'Smart Booking',
    desc: 'Suggests the best times, collects the deposit, and confirms the spot in seconds.',
    tag: 'PHASE 03',
    snippet: (
      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Payment Method</span>
          <div className="flex gap-1">
            <div className="w-3 h-2 bg-white/20 rounded-sm"></div>
            <div className="w-3 h-2 bg-white/20 rounded-sm"></div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 bg-accent/10 rounded-lg border border-accent/20">
          <span className="text-[9px] font-black text-accent uppercase tracking-tighter">DEPOSIT PAID</span>
          <span className="text-[10px] font-black text-white">$50.00</span>
        </div>
      </div>
    )
  },
  {
    icon: CalendarDays,
    title: 'Zero-Effort Sync',
    desc: 'Appointment is locked into your calendar. Staff receive instant push notifications.',
    tag: 'PHASE 04',
    snippet: (
      <div className="grid grid-cols-7 gap-1 h-12 items-end">
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} className={`rounded-t-sm transition-all duration-1000 ${i === 4 ? 'bg-accent h-full shadow-[0_0_15px_rgba(188,156,107,0.3)]' : 'bg-white/10 h-1/2'}`}></div>
        ))}
      </div>
    )
  },
  {
    icon: Bell,
    title: 'Retention Loop',
    desc: 'Automated 24h reminders and post-service review requests keep clients coming back.',
    tag: 'PHASE 05',
    snippet: (
      <div className="flex items-center gap-3 p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-emerald-400" />
        </div>
        <div>
          <p className="text-[9px] font-black text-white uppercase tracking-tighter">Reminder Sent</p>
          <p className="text-[8px] text-emerald-400/80 font-bold">24h Before Service</p>
        </div>
      </div>
    )
  },
];

export const SolutionTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-background-light dark:bg-[#060614] relative overflow-hidden" id="how-it-works">
      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 dark:bg-slate-800 opacity-20 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-24 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05] -z-10">
             <span className="text-9xl md:text-[12rem] font-black tracking-tighter whitespace-nowrap uppercase">Every Interaction.</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-primary dark:text-white leading-[0.85]">
            One AI Assistant for <br />
            <div className="relative inline-block mt-4">
              <div className="absolute inset-0 bg-accent -rotate-1 transform translate-y-2 scale-110 -z-10"></div>
              <span className="relative text-white px-8 py-3 block">Every Interaction.</span>
            </div>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-3xl mx-auto mt-12 leading-relaxed">
            Watch how GlamMate AI handles the heavy lifting, from the first spark of interest to the final confirmation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-in-up"
              delay={idx * 150}
              className="relative group h-full"
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-[#0a0a24] border border-slate-200/60 dark:border-slate-800/60 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 flex flex-col relative overflow-hidden">
                {/* Background decorative blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>

                <div className="mb-10 flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary dark:bg-slate-800 flex items-center justify-center text-accent shadow-xl shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 tracking-widest group-hover:text-accent transition-colors">
                    {step.tag}
                  </span>
                </div>

                <div className="flex-1 mb-10 relative z-10">
                  <h3 className="text-2xl font-black tracking-tight mb-4 text-primary dark:text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* The "Live Preview" Box - Redesigned to match the screenshot exactly */}
                <div className="mt-auto rounded-[2rem] bg-gradient-to-br from-[#3c3c3c] to-[#1a252f] p-6 shadow-2xl border border-white/5 relative overflow-hidden group/preview min-h-[160px] flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.25em]">Live Preview</span>
                  </div>
                  
                  <div className="relative z-10">
                    {step.snippet}
                  </div>

                  {/* Glass highlight effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up" delay={800} className="mt-24 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary dark:bg-white text-white dark:text-primary font-black text-xs uppercase tracking-widest hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-xl shadow-primary/10 group active:scale-95">
            Experience the Full Workflow <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
