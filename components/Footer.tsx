import React from 'react';
import { Globe, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Logo } from './Navbar';

interface FooterProps {
  onOpenLegal?: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-background-light dark:bg-slate-950 pt-24 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="relative overflow-hidden bg-primary dark:bg-slate-900/40 rounded-[3rem] p-12 text-center text-white mb-24 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Turn Every Message Into a Booking — Automatically
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              Join 1,000+ salons reclaiming their time and revenue with GlamMate AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://app.glammateai.com/"
                className="bg-accent text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-accent/20 hover:bg-accent/90 hover:-translate-y-1 transition-all w-full sm:w-auto flex items-center justify-center"
              >
                Start Free Trial
              </a>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold px-10 py-5 rounded-2xl hover:bg-white/20 transition-all w-full sm:w-auto">
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-200 dark:border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 cursor-pointer">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs font-bold">
              The Operating System for Modern Beauty Empires.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:text-accent transition-colors shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Product', links: ['Features', 'How It Works', 'Integrations', 'Pricing'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookies Policy'] },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6 text-primary dark:text-white">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onOpenLegal?.(link)}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2026 GlamMate AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 select-none">
              <Globe className="w-3.5 h-3.5" /> English (US)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};