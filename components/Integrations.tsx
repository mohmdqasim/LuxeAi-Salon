
import React from 'react';
import { MessageCircle, Instagram, Facebook, Monitor, Smartphone, Calendar, Mail, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const channels = [
  { icon: MessageCircle, name: 'WhatsApp', emoji: '💬' },
  { icon: Instagram, name: 'Instagram', emoji: '📸' },
  { icon: Facebook, name: 'Facebook', emoji: '👍' },
  { icon: Monitor, name: 'Website Chat', emoji: '💻' },
  { icon: Smartphone, name: 'Mobile-Friendly Booking', emoji: '📱' },
  { icon: Calendar, name: 'Calendar Integration', emoji: '📅' },
  { icon: Mail, name: 'Email', emoji: '📧' },
  { icon: LinkIcon, name: 'CRM Integration', emoji: '🔁' },
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-background-dark/20 relative overflow-hidden" id="integrations">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-primary dark:text-white">
            Connect Your Tools <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Turn Every Channel into a Booking
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            LuxeSalon AI works with your favorite platforms to keep everything in one place.
            Bookings, messages, and client data stay updated without extra work.
          </p>
        </ScrollReveal>

        {/* Channels Grid */}
        <ScrollReveal animation="fade-in-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl mb-2">{channel.emoji}</div>
                  <channel.icon className="w-8 h-8 text-primary dark:text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Subheading and Description */}
        <ScrollReveal animation="fade-in-up" delay={400} className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-6 text-primary dark:text-white">
            One Assistant for Every Client Touchpoint
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Your AI responds instantly across all channels so every inquiry becomes a confirmed booking.
          </p>
          
          {/* CTA Button */}
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 bg-primary text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
          >
            Book Free Demo <ArrowRight className="w-5 h-5" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
