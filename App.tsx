import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionTimeline } from './components/SolutionTimeline';
import { FeaturesGrid } from './components/FeaturesGrid';
import { VsSection } from './components/VsSection';
import { HowItWorks } from './components/HowItWorks';
import { ChatDemo } from './components/ChatDemo';
import { IntelligenceSection } from './components/IntelligenceSection';
import { DashboardPreview } from './components/DashboardPreview';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLegal, setActiveLegal] = useState<{ file: string; title: string } | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleOpenLegal = (type: string) => {
    if (type === 'Privacy Policy') {
      setActiveLegal({ file: 'privacy_policy.md', title: 'Privacy Policy' });
    } else if (type === 'Terms of Service') {
      setActiveLegal({ file: 'terms_of_service.md', title: 'Terms of Service' });
    } else if (type === 'Cookies Policy') {
      setActiveLegal({ file: 'cookies_policy.md', title: 'Cookies Policy' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionTimeline />
        <IntelligenceSection />
        <FeaturesGrid />
        <VsSection />
        <HowItWorks />
        <ChatDemo />
        <DashboardPreview />
        <UseCases />
        <Pricing />
      </main>
      <Footer onOpenLegal={handleOpenLegal} />

      <LegalModal 
        isOpen={activeLegal !== null}
        onClose={() => setActiveLegal(null)}
        fileName={activeLegal?.file || ''}
        title={activeLegal?.title || ''}
      />
    </div>
  );
};

export default App;