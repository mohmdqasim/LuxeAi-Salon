
import React from 'react';
import { MessageSquare, Bot, CheckCircle, CalendarDays, Bell, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
  {
    icon: MessageSquare,
    title: 'Instant Inquiry',
    desc: 'Client sends a DM on Instagram or WhatsApp. No more waiting for "business hours".',
    color: 'from-accent to-primary',
    tag: 'Phase 01',
    snippet: (
      <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-inner">
        <div className="flex gap-2 items-center text-[10px] text-white/60 mb-1">
          <MessageSquare className="w-3 h-3" /> Instagram DM
        </div>
        <p className="text-xs text-white/90 italic font-medium">"Hi! Any balayage slots for Saturday?"</p>
      </div>
    )
  },
  {
    icon: Bot,
    title: 'AI Processing',
    desc: 'GlamBot instantly cross-checks your staff schedules, prices, and available durations.',
    color: 'from-primary to-accent',
    tag: 'Phase 02',
    snippet: (
      <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-1.5 w-full bg-white/20 rounded"></div>
          <div className="h-1.5 w-2/3 bg-white/20 rounded"></div>
        </div>
      </div>
    )
  },
  {
    icon: CheckCircle,
    title: 'Smart Booking',
    desc: 'Suggests the best times, collects the deposit, and confirms the spot in seconds.',
    color: 'from-accent to-secondary',
    tag: 'Phase 03',
    snippet: (
      <div className="mt-4 p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
        <span className="text-[10px] font-black text-white/70">DEPOSIT PAID</span>
        <span className="text-[10px] font-black text-white">$50.00</span>
      </div>
    )
  },
  {
    icon: CalendarDays,
    title: 'Zero-Effort Sync',
    desc: 'Appointment is locked into your calendar. Staff receive instant push notifications.',
    color: 'from-primary to-accent',
    tag: 'Phase 04',
    snippet: (
      <div className="mt-4 flex gap-1 h-8">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`flex-1 rounded ${i === 3 ? 'bg-white shadow-lg' : 'bg-white/10'}`}></div>
        ))}
      </div>
    )
  },
  {
    icon: Bell,
    title: 'Retention Loop',
    desc: 'Automated 24h reminders and post-service review requests keep clients coming back.',
    color: 'from-accent to-primary',
    tag: 'Phase 05',
    snippet: (
      <div className="mt-4 p-2 bg-white rounded-lg flex items-center gap-2 shadow-lg">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="text-[9px] font-bold text-primary italic">"Can't wait to see you tomorrow!"</span>
      </div>
    )
  },
];

export const SolutionTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-background-light dark:bg-[#060614] relative overflow-hidden" id="how-it-works">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-24 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-10 border border-accent/20">
            <Sparkles className="w-3 h-3" /> The Workflow
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-primary dark:text-white leading-[0.85]">
            One AI Assistant for <br />
            <div className="relative inline-block mt-4">
              <div className="absolute inset-0 bg-accent -rotate-1 transform translate-y-2 scale-110 -z-10"></div>
              <span className="relative text-white px-6 py-2 block">Every Interaction.</span>
            </div>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-12">
            Watch how GlamMate AI handles the heavy lifting, from the first spark of interest to the final confirmation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-in-up"
              delay={idx * 150}
              className="relative group h-full"
            >
              {/* Connector for mobile/tablet */}
              {idx !== steps.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-20">
                  <ArrowRight className="w-5 h-5 text-accent/40 rotate-90" />
                </div>
              )}

              <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 flex flex-col">
                <div className="mb-8 flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-tighter group-hover:text-accent transition-colors uppercase">
                    {step.tag}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black tracking-tight mb-4 group-hover:text-primary dark:group-hover:text-white transition-colors text-primary dark:text-white">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className={`mt-10 rounded-2xl bg-gradient-to-br ${step.color} p-5 opacity-90 group-hover:opacity-100 transition-opacity duration-500 shadow-inner`}>
                  <div className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] mb-3">Live Preview</div>
                  <div className="text-white">
                    {step.snippet}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up" delay={800} className="mt-24 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary dark:bg-white text-white dark:text-primary font-black text-xs uppercase tracking-widest hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-xl group">
            Experience the Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
