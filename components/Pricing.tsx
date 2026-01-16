
import React from 'react';
import { Check, X, Zap, Users, Building2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const plans = [
  {
    name: 'Solo Stylists',
    icon: Zap,
    normalPrice: 67,
    discount: 45,
    finalPrice: 20,
    desc: 'Best for independent professionals ready to simplify their day.',
    features: [
      '24/7 Booking Assistant',
      'WhatsApp & SMS Support',
      'Automated Client Reminders',
      'Smart FAQ Responses',
      'Basic Analytics Dashboard',
    ],
    notIncluded: [
      'CRM Integration',
      'Advanced Reporting',
      'Voice Call Automation',
      'Multi-location Support',
    ],
    highlight: false,
  },
  {
    name: 'Growing Teams',
    icon: Users,
    normalPrice: 367,
    discount: 65,
    finalPrice: 40,
    desc: 'Great for salons with growing staff and high client volume.',
    features: [
      'Everything in Solo Stylists',
      'CRM Integration',
      'Advanced Booking & Sales Reports',
      'Custom Workflow Automations',
      'Multi-Platform Sync (Instagram, Facebook, Website)',
      'Smart Upsell & Re-engagement Messaging',
    ],
    note: 'Clients typically see 10x ROI in time saved & bookings increased',
    notIncluded: [
      'Priority Support',
      'Custom API Integrations',
      'Dedicated Success Manager',
    ],
    highlight: true,
  },
  {
    name: 'Multi-Location Salons',
    icon: Building2,
    normalPrice: 97,
    discount: 45,
    finalPrice: 50,
    desc: 'Designed for busy salons or franchises managing multiple locations.',
    features: [
      'Everything in Growing Teams',
      'Multi-location Calendar Management',
      'Staff Routing by Service & Availability',
      'Custom Integrations (CRM, Calendar, POS)',
      'Dedicated Account Manager',
      'Priority Support Access',
    ],
    notIncluded: [
      'Full White-labeling',
      'SLA-backed Support',
      'Enterprise API Customization',
    ],
    highlight: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#050510] relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-primary dark:text-white">
            Pick the Plan That Grows <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">With Your Salon</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={idx}
              animation="zoom-in"
              delay={idx * 150}
              className={`flex flex-col p-1 rounded-[2.5rem] transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-primary via-accent to-secondary shadow-2xl shadow-accent/20 scale-105 z-10' 
                  : 'bg-slate-200/50 dark:bg-slate-800/50'
              }`}
            >
              <div className="flex-1 bg-white dark:bg-[#0a0a1f] rounded-[2.4rem] p-8 md:p-10 flex flex-col h-full">
                {/* Icon and Name */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    plan.highlight ? 'bg-primary text-accent' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-2 text-primary dark:text-white">{plan.name}</h3>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-slate-400 dark:text-slate-500 line-through text-lg font-bold">
                      ${plan.normalPrice}/mo
                    </span>
                    <span className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-black uppercase tracking-wider">
                      {plan.discount}% discount
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter text-primary dark:text-white">
                      ${plan.finalPrice}
                    </span>
                    <span className="text-slate-400 font-bold">/ month</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  {plan.desc}
                </p>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all mb-8 flex items-center justify-center gap-2 group ${
                    plan.highlight
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-slate-800'
                      : 'bg-slate-200 dark:bg-white text-primary dark:text-slate-900 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white'
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Included Features */}
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                    Included Features:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary dark:text-accent'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Note (if exists) */}
                {plan.note && (
                  <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <p className="text-xs font-bold text-accent leading-relaxed">{plan.note}</p>
                  </div>
                )}

                {/* Not Included */}
                <div className="mt-auto space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                    Not Included:
                  </p>
                  {plan.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
