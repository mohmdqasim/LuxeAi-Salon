import React, { useState } from 'react';
import { Check, Zap, Star, ShieldCheck, ArrowRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { pricingPlans as plans } from '../lib/constants';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section className="py-32 bg-white dark:bg-[#050510] relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Flexible Plans</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-primary dark:text-white">
            Predictable Pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Unstoppable Growth.</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-primary dark:text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-5 h-5 bg-accent rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isAnnual ? 'text-primary dark:text-white' : 'text-slate-400'}`}>Annual</span>
              <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-black uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => {
            const isExpanded = expandedPlans[idx];
            const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 8);
            const hasMore = plan.features.length > 8;

            return (
              <ScrollReveal
                key={idx}
                animation="zoom-in"
                delay={idx * 150}
                className={`flex flex-col p-1 rounded-[2.5rem] transition-all duration-500 ${plan.highlight
                  ? 'bg-gradient-to-b from-primary via-accent to-secondary shadow-2xl shadow-accent/20 scale-105 z-10'
                  : 'bg-slate-200/50 dark:bg-slate-800/50'
                  }`}
              >
                <div className="flex-1 bg-white dark:bg-[#0a0a1f] rounded-[2.4rem] p-10 flex flex-col">
                  <div className="mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-primary text-accent' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-1 text-primary dark:text-white">{plan.name}</h3>
                    <p className="text-xs font-bold text-accent mb-4 uppercase tracking-wider">{plan.tagline}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed min-h-[40px]">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mb-10 min-h-[80px] flex flex-col justify-end">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <div className="flex items-baseline gap-1 text-primary dark:text-white">
                          <span className="text-5xl font-black tracking-tighter">
                            ${isAnnual ? plan.bottomPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-slate-400 font-bold">/mo</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                          Billed {isAnnual ? 'annually' : 'monthly'}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="text-5xl font-black tracking-tighter text-primary dark:text-white">Custom</div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 opacity-0 select-none">
                          Enterprise Only
                        </p>
                      </>
                    )}
                  </div>

                  <a
                    href={plan.href}
                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all mb-10 flex items-center justify-center gap-2 group ${plan.highlight
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-slate-800'
                      : 'bg-slate-200 dark:bg-white text-primary dark:text-slate-900 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white'
                      }`}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="space-y-4 mt-auto">
                    <p className="text-lg font-bold text-primary dark:text-white mb-4">Core Allowances</p>
                    {visibleFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary dark:text-accent'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}

                    {hasMore && (
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="flex items-center gap-2 text-sm font-bold text-accent hover:opacity-80 transition-opacity mt-4"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Show More <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>
                    )}

                    {isExpanded && plan.notIncluded.length > 0 ? (
                      <>
                        <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-4"></div>
                        <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Not Included:</p>
                        {plan.notIncluded.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 opacity-40">
                            <div className="mt-1 p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                              <X className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-slate-400 dark:text-slate-500 font-medium line-through decoration-slate-300 dark:decoration-slate-700">{feature}</span>
                          </div>
                        ))}
                      </>
                    ) : (
                      !isExpanded && <div className="py-2"></div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="fade-in-up" delay={600} className="mt-24 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            Need something different? <a href="#" className="text-accent font-bold hover:underline">Chat with our sales team</a> for a custom volume package.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
