
import React from 'react';
import { Calendar, Mail, MessageCircle, Camera, Users, CreditCard } from 'lucide-react';

const logos = [
  { icon: Calendar, name: 'Google Calendar' },
  { icon: Mail, name: 'Outlook' },
  { icon: MessageCircle, name: 'WhatsApp' },
  { icon: Camera, name: 'Instagram' },
  { icon: Users, name: 'Messenger' },
  { icon: CreditCard, name: 'Stripe' },
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark/20" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mb-12">
          Works Seamlessly With
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 dark:opacity-40 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale hover:grayscale-0 hover:text-primary transition-all cursor-default">
              <logo.icon className="w-8 h-8" />
              <span className="text-xl font-bold font-display">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
