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
import * as LegalDocs from './legalDocs';
import { ChatbotWidget } from './components/chatbot/ChatbotWidget';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLegal, setActiveLegal] = useState<{ content: string; title: string } | null>(null);
  const businessId =
    (import.meta.env.VITE_BUSINESS_ID as string | undefined) ||
    'ef5347c8-6e7c-4393-a700-b260f657f192';

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
      setActiveLegal({ content: LegalDocs.PRIVACY_POLICY, title: 'Privacy Policy' });
    } else if (type === 'Terms of Service') {
      setActiveLegal({ content: LegalDocs.TERMS_OF_SERVICE, title: 'Terms of Service' });
    } else if (type === 'Cookies Policy') {
      setActiveLegal({ content: LegalDocs.COOKIES_POLICY, title: 'Cookies Policy' });
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
        content={activeLegal?.content || ''}
        title={activeLegal?.title || ''}
      />
      <ChatbotWidget businessId={businessId} />
    </div>
  );
};

export default App;