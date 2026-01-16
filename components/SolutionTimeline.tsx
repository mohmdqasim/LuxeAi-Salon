
import React from 'react';
import { MessageSquare, Bot, CheckCircle, CalendarDays, Bell, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const InstagramIcon = ({ className }: { className?: string }) => (
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
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between opacity-40">
          <div className="flex items-center gap-2">
            <InstagramIcon className="w-3 h-3 text-white" />
            <span className="text-[8px] font-black uppercase tracking-widest text-white">Instagram DM</span>
          </div>
          <Clock className="w-2.5 h-2.5 text-white" />
        </div>
        <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/10 backdrop-blur-md">
          <p className="text-[10px] text-white/90 italic font-medium leading-relaxed">
            "Hi! Do you have any balayage slots for this Saturday?"
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
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-[0_0_20px_rgba(188,156,107,0.15)]">
            <Bot className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[85%] animate-pulse"></div>
            </div>
            <div className="h-1 w-2/3 bg-white/5 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <span className="text-[8px] font-black text-accent/60 uppercase tracking-[0.25em] animate-pulse">Checking Calendars...</span>
        </div>
      </div>
    )
  },
  {
    icon: CheckCircle,
    title: 'Smart Booking',
    desc: 'Suggests the best times, collects the deposit, and confirms the spot in seconds.',
    tag: 'PHASE 03',
    snippet: (
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Deposit Status</span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
          <div className="flex flex-col">
            <span className="text-[7px] font-black text-accent uppercase tracking-widest">Amount Paid</span>
            <span className="text-sm font-black text-white">$50.00</span>
          </div>
          <div className="px-2 py-1 bg-emerald-500/20 rounded-md text-[8px] font-bold text-emerald-400 uppercase">Confirmed</div>
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
      <div className="grid grid-cols-7 gap-1.5 h-14 items-end px-1">
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} className={`rounded-t-md transition-all duration-1000 ${i === 4 ? 'bg-accent h-full shadow-[0_0_20px_rgba(188,156,107,0.4)]' : 'bg-white/5 h-[40%]'}`}></div>
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
      <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10">
            <Bell className="w-5 h-5 text-accent" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-[#1a252f] animate-pulse shadow-[0_0_10px_rgba(188,156,107,0.5)]"></div>
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] font-black text-white uppercase tracking-tighter mb-0.5">Auto-Reminder</p>
          <p className="text-[8px] text-white/40 font-bold uppercase tracking-[0.15em]">Via WhatsApp Business</p>
        </div>
      </div>
    )
  },
];

export const SolutionTimeline: React.FC = () => {
  return (
    <section className="py-40 bg-background-light dark:bg-[#060614] relative overflow-hidden" id="how-it-works">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-accent/5 rounded-full blur-[160px] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 dark:bg-slate-800 opacity-20 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-32 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-primary dark:text-white leading-[0.85]">
            One AI Assistant for <br />
            <div className="relative inline-block mt-4">
              <div className="absolute inset-0 bg-accent -rotate-1 transform translate-y-3 scale-110 -z-10 rounded-xl"></div>
              <span className="relative text-white px-12 py-4 block">Every Interaction</span>
            </div>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-14 leading-relaxed">
            Experience how GlamMate AI manages your entire front desk, from the initial inquiry to the final follow-up.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-in-up"
              delay={idx * 150}
              className="relative group h-full flex flex-col"
            >
              <div className="flex-1 flex flex-col p-1 rounded-[3rem] bg-gradient-to-b from-slate-200 dark:from-slate-800 to-transparent hover:from-accent/40 transition-all duration-700">
                <div className="flex-1 flex flex-col p-8 rounded-[2.8rem] bg-white dark:bg-[#0a0a24] relative overflow-hidden h-full">
                  
                  {/* Phase Marker - Top Left */}
                  <div className="mb-10 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-accent shadow-xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[9px] font-black text-slate-300 dark:text-slate-700 tracking-[0.25em] group-hover:text-accent transition-colors">
                      {step.tag}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 mb-10">
                    <h3 className="text-xl font-black tracking-tight mb-4 text-primary dark:text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>

                  {/* High-Fidelity UI Snippet */}
                  <div className="mt-auto rounded-[2.2rem] bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] p-6 shadow-2xl border border-white/5 relative overflow-hidden group/preview min-h-[170px] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(188,156,107,0.8)]"></div>
                        <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">LIVE WIDGET</span>
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-accent opacity-20 group-hover/preview:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="relative z-10 transition-transform duration-500 group-hover/preview:scale-[1.04]">
                      {step.snippet}
                    </div>

                    {/* Glass Sweep Animation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reclaim Time Banner */}
        <ScrollReveal animation="fade-in-up" delay={800} className="mt-24 max-w-4xl mx-auto">
          <div className="p-10 md:p-14 rounded-[3.5rem] bg-primary dark:bg-slate-900 border border-white/5 relative overflow-hidden shadow-2xl group text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] -z-0 pointer-events-none group-hover:bg-accent/20 transition-all duration-700"></div>
            
            <div className="flex-1 relative z-10">
              <h4 className="text-3xl font-black text-white mb-4 tracking-tighter leading-tight">Ready to reclaim <br className="hidden md:block" /> your front desk?</h4>
              <p className="text-slate-400 font-bold text-sm max-w-sm">Join the top 1% of salons scaling their revenue through AI automation.</p>
            </div>
            
            <button className="relative z-10 whitespace-nowrap inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-accent text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl shadow-accent/10 group/btn active:scale-95">
              Launch My Assistant <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
