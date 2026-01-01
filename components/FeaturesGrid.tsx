
import React from 'react';
import { 
  Bot, MessageCircle, BellRing, Users, 
  RefreshCcw, ClipboardList, Megaphone, BarChart3,
  Instagram, MessageSquare, Phone, Zap
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  { 
    icon: Bot, 
    title: 'AI Booking Concierge', 
    desc: 'LuxeBot handles complex scheduling logic, service combinations, and processing payments 24/7 without human intervention.',
    className: 'md:col-span-8 md:row-span-1',
    badge: 'Most Powerful',
    color: 'from-blue-600 to-primary'
  },
  { 
    icon: MessageCircle, 
    title: 'Unified Inbox', 
    desc: 'One place for WhatsApp, Instagram DMs, and SMS.',
    className: 'md:col-span-4 md:row-span-2',
    visual: (
      <div className="flex gap-2 mt-4">
        <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500"><Instagram className="w-4 h-4" /></div>
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500"><MessageSquare className="w-4 h-4" /></div>
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Phone className="w-4 h-4" /></div>
      </div>
    )
  },
  { 
    icon: BellRing, 
    title: 'Smart Reminders', 
    desc: 'AI-driven SMS sequences that reduced no-shows by 85% for our top salons.',
    className: 'md:col-span-4 md:row-span-1'
  },
  { 
    icon: BarChart3, 
    title: 'Predictive Analytics', 
    desc: 'Forecast your busiest weeks and identify high-value clients before they churn.',
    className: 'md:col-span-4 md:row-span-1',
    color: 'from-purple-600 to-pink-600'
  },
  { 
    icon: Users, 
    title: 'Team Sync', 
    desc: 'Automated commission splits and shift management for modern teams.',
    className: 'md:col-span-4 md:row-span-1'
  },
  { 
    icon: Megaphone, 
    title: 'Growth Engine', 
    desc: 'Automated marketing campaigns that trigger based on client behavior.',
    className: 'md:col-span-8 md:row-span-1',
    badge: 'New Feature'
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#08081a] relative overflow-hidden" id="features">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Enterprise Grade Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Everything you need <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600">to scale your empire.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            We've combined ten different tools into one seamless, AI-first platform designed specifically for the beauty industry.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {features.map((f, idx) => (
            <ScrollReveal
              key={idx}
              animation="zoom-in"
              delay={idx * 100}
              className={`${f.className} group relative overflow-hidden p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5`}
            >
              {/* Background Accent */}
              {f.color && (
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`}></div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <f.icon className="w-7 h-7" />
                  </div>
                  {f.badge && (
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
                      {f.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">{f.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                    {f.desc}
                  </p>
                  {f.visual}
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Explore feature <Zap className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up" delay={600} className="mt-20 flex flex-col items-center">
          <div className="p-8 rounded-[3rem] bg-gradient-to-r from-slate-900 to-slate-800 dark:from-primary/20 dark:to-purple-900/20 border border-white/10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Want to see the full list of 40+ features?</h4>
              <p className="text-slate-400 text-sm">Download our detailed product comparison guide.</p>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all whitespace-nowrap">
              View All Features
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
