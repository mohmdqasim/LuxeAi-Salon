
import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative flex items-center justify-center w-12 h-12">
      {/* Headset Circle */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary fill-none stroke-current" strokeWidth="6" strokeLinecap="round">
        <path d="M20,55 A35,35 0 1,1 80,55" />
        <rect x="12" y="50" width="10" height="20" rx="4" fill="currentColor" />
        <rect x="78" y="50" width="10" height="20" rx="4" fill="currentColor" />
        <path d="M40,90 Q50,95 60,90" strokeWidth="4" />
      </svg>
      {/* Central M and Bubble */}
      <div className="relative flex items-center justify-center translate-y-1">
        <span className="text-2xl font-black text-accent italic -mr-1">M</span>
        <div className="absolute -top-3 -right-3 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-1.5 items-baseline">
      <span className="text-2xl font-black tracking-tighter text-primary dark:text-white">GLAM</span>
      <span className="text-2xl font-black tracking-tighter text-accent italic">MATE</span>
    </div>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="cursor-pointer group">
          <Logo className="scale-90 origin-left" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Integrations', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <a
            href="#"
            className="hidden sm:block text-sm font-bold hover:text-accent transition-colors text-primary dark:text-white"
          >
            Sign In
          </a>
          <button className="bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg shadow-primary/20 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
            Get Started Free
          </button>
          <button className="md:hidden p-2 text-primary dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
