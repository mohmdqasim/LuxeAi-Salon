
import React from 'react';
import { Sparkles, Globe, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="relative overflow-hidden bg-slate-900 dark:bg-slate-900/40 rounded-[3rem] p-12 text-center text-white mb-24 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Turn Every Message Into a Booking — Automatically
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              Join 1,000+ salons reclaiming their time and revenue with GlamMate AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all w-full sm:w-auto">
                Start Free Trial
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold px-10 py-5 rounded-2xl hover:bg-white/20 transition-all w-full sm:w-auto">
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="p-1.5 bg-primary rounded-lg group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight">GlamMate AI</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              The #1 AI automation platform for modern salons and spas. Simplify your business today.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
            { title: 'Resources', links: ['Blog', 'Help Center', 'Community', 'Contact'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'] },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © 2025 GlamMate AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Globe className="w-3.5 h-3.5" /> English (US)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
