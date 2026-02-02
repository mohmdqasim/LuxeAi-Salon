
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import sidebarLogoLight from '../Assets/logos/sidebar-logo-light.svg';
import sidebarLogoDark from '../Assets/logos/sidebar-logo-dark.svg';

const NAV_SECTIONS = [
  { label: 'Features', id: 'features' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Integrations', id: 'integrations' },
  { label: 'Pricing', id: 'pricing' },
] as const;

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  logo: string;
}

export const Logo: React.FC<{ className?: string; darkMode?: boolean, logo?: string }> = ({ className = "h-10", darkMode = false, logo }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img
      src={darkMode ?  sidebarLogoDark:sidebarLogoLight }
      alt="LuxeAi Logo"
      className="h-10 w-auto transition-all duration-300 hover:scale-105"
    />
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map((s) => s.id);
    const observers = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observers.set(entry.target.id, entry);
          } else {
            observers.delete(entry.target.id);
          }
        });
        // Pick the section with the largest visible ratio (most in view)
        let best: { id: string; ratio: number } | null = null;
        observers.forEach((entry, id) => {
          const ratio = entry.intersectionRatio;
          if (ratio > 0 && (best === null || ratio > best.ratio)) {
            best = { id, ratio };
          }
        });
        setActiveSection(best?.id ?? null);
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0, 0.1, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="cursor-pointer group flex items-center hover:opacity-80 transition-opacity">
          <Logo className="h-10" darkMode={darkMode} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_SECTIONS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-accent dark:text-accent'
                    : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {label}
              </a>
            );
          })}
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
            href="https://app.glammateai.com/"
            className="hidden sm:block text-sm font-bold hover:text-accent transition-colors text-primary dark:text-white"
          >
            Sign In
          </a>
          <a
            href="https://app.glammateai.com/"
            className="bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg shadow-primary/20 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center whitespace-nowrap"
          >
            Get Started Free
          </a>
          <button className="md:hidden p-2 text-primary dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
