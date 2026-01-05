
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionTimeline } from './components/SolutionTimeline';
import { FeaturesGrid } from './components/FeaturesGrid';
import { VsSection } from './components/VsSection';
import { HowItWorks } from './components/HowItWorks';
import { ChatDemo } from './components/ChatDemo';
import { DashboardPreview } from './components/DashboardPreview';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionTimeline />
        <FeaturesGrid />
        <VsSection />
        <HowItWorks />
        <ChatDemo />
        <DashboardPreview />
        <UseCases />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
