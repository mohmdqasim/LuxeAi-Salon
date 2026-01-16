
import React from 'react';
import { MessageSquare, Bot, CheckCircle, CalendarDays, Bell, ArrowRight, Sparkles, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
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
    desc: 'Client DMs on IG or WhatsApp. GlamBot responds in < 2s.',
    snippet: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between opacity-60">
          <div className="flex items-center gap-2">
            <InstagramIcon className="w-3 h-3 text-pink-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Instagram</span>
          </div>
          <span className="text-[9px] text-white/40 font-bold">Just now</span>
        </div>
        <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/10 backdrop-blur-md">
          <p className="text-[11px] text-white/90 font-medium leading-relaxed">
            "Hey! Can I book a haircut for Sarah this Friday? ✨"
          </p>
        </div>
      </div>
    )
  },
  {
    icon: Bot,
    title: 'AI Scheduling',
    desc: 'Instantly checks staff schedules, service durations, and pricing.',
    snippet: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[92%] animate-pulse"></div>
            </div>
            <div className="h-1 w-3/4 bg-white/5 rounded-full"></div>
          </div>
        </div>
        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
          <p className="text-[9px] text-accent font-black uppercase tracking-widest mb-1">Found Slot</p>
          <p className="text-[10px] text-white/80">Friday, Oct 12 • 2:30 PM</p>
        </div>
      </div>
    )
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    desc: 'Collects deposits automatically via Stripe or PayPal links.',
    snippet: (
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center">
             <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Payment Security</span>
        </div>
        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
          <div className="flex justify-between items-end">
            <span className="text-[8px] font-black text-accent uppercase tracking-widest">Deposit</span>
            <span className="text-sm font-black text-white">$45.00</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: CalendarDays,
    title: 'Calendar Lock',
    desc: 'Syncs to Google/Outlook. Staff gets a push notification.',
    snippet: (
      <div className="grid grid-cols-7 gap-1 h-12 items-end">
        {[20, 45, 30, 95, 25, 60, 40].map((h, i) => (
          <div key={i} className={`rounded-sm transition-all duration-1000 ${i === 3 ? 'bg-accent h-full' : 'bg-white/10 h-[40%]'}`} style={{ height: `${h}%` }}></div>
        ))}
      </div>
    )
  },
  {
    icon: Bell,
    title: 'Retention Loop',
    desc: 'Auto-reminders and review requests keep them coming back.',
    snippet: (
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10">
            <Bell className="w-5 h-5 text-accent" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-[#1a252f] animate-pulse"></div>
        </div>
        <div>
          <p className="text-[10px] font-black text-white uppercase tracking-tighter">Follow-up</p>
          <p className="text-[8px] text-white/40 font-bold">24h Post-Service</p>
        </div>
      </div>
    )
  },
];

export const SolutionTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#060614] relative overflow-hidden" id="how-it-works">
      {/* Modern Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">The Modern Workflow</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-primary dark:text-white leading-[1.1]">
            One AI Assistant for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Every Interaction.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Experience how GlamMate AI manages your entire front desk, from the initial inquiry to the final follow-up.
          </p>
        </ScrollReveal>

        {/* Desktop Step Progression Lines (Visible on lg) */}
        <div className="hidden lg:block relative h-px w-full bg-slate-200 dark:bg-slate-800 top-[2.5rem] -z-0">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-transparent w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-in-up"
              delay={idx * 150}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div className="h-full flex flex-col p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a24] border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 group-hover:border-accent/30">
                
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-primary dark:text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-black tracking-tight mb-3 text-primary dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* App UI Snippet */}
                <div className="mt-auto rounded-3xl bg-slate-900 p-5 shadow-inner border border-white/5 relative overflow-hidden group/snippet">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover/snippet:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    {step.snippet}
                  </div>
                </div>

                {/* Mobile/Tablet Arrow */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-accent shadow-lg">
                      <ChevronRight className="w-4 h-4 rotate-90 md:rotate-0" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* High-Impact CTA Banner */}
        <ScrollReveal animation="zoom-in" delay={800} className="mt-24">
          <div className="relative p-10 md:p-16 rounded-[3.5rem] bg-slate-950 overflow-hidden group shadow-2xl">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                  Reclaim 15+ Hours <br className="hidden md:block" />
                  Every Single Week.
                </h3>
                <p className="text-slate-400 font-bold text-lg max-w-md mx-auto md:mx-0">
                  Join the 1,000+ salon owners who fired their receptionist and hired a GlamMate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="px-10 py-6 rounded-2xl bg-accent text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center justify-center gap-3">
                  Launch My AI Assistant <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                  View Demo Session
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
