
import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const plans = [
  {
    name: 'Starter',
    price: '49',
    desc: 'Perfect for solo stylists.',
    cta: 'Start Free Trial',
    features: ['1 User', '500 AI Conversations', 'Google Calendar Sync'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '99',
    desc: 'For busy salons with teams.',
    cta: 'Start Free Trial',
    features: ['Up to 5 Users', 'Unlimited AI Conversations', 'SMS Reminders', 'Staff Management'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For multi-location chains.',
    cta: 'Contact Sales',
    features: ['Unlimited Users', 'Dedicated API Access', 'Custom Integrations', 'Priority Support'],
    highlight: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark transition-colors" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Start for free, upgrade as you grow.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={idx}
              animation="zoom-in"
              delay={idx * 150}
              className={`p-10 rounded-3xl transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white dark:bg-card-dark border-4 border-primary shadow-2xl scale-105 relative z-10'
                  : 'bg-slate-50 dark:bg-card-dark/50 border border-slate-200 dark:border-slate-800 hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full animate-pulse">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black">{plan.price !== 'Custom' ? `$${plan.price}` : plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
              </div>
              <p className="text-slate-500 text-sm mb-8">{plan.desc}</p>
              
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all mb-10 ${
                  plan.highlight
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
