
import React from 'react';
import { Check } from 'lucide-react';

const cases = [
  {
    title: 'Solo Owners',
    desc: 'Stop acting as your own receptionist. Focus on your craft while AI handles the desk work.',
    features: ['Auto-bookings', 'Deposit collection'],
    borderColor: 'border-primary',
  },
  {
    title: 'Growing Teams',
    desc: 'Coordinate multiple calendars and staff members without the chaos.',
    features: ['Staff scheduling', 'Commission tracking'],
    borderColor: 'border-purple-500',
  },
  {
    title: 'Salon Chains',
    desc: 'Unified management for multiple locations with centralized reporting.',
    features: ['Multi-location analytics', 'Brand consistency'],
    borderColor: 'border-pink-500',
  },
];

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center mb-16">Built for Every Size</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className={`p-8 bg-white dark:bg-card-dark rounded-2xl shadow-sm border-t-4 ${c.borderColor} hover:shadow-xl transition-all`}>
              <h3 className="text-xl font-bold mb-4">{c.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed">
                {c.desc}
              </p>
              <ul className="space-y-3">
                {c.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <div className="bg-emerald-500/10 p-0.5 rounded">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
