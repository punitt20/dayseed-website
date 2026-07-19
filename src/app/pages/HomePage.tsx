import { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { CoreIdeaSection } from '../components/CoreIdeaSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { AppShowcaseSection } from '../components/AppShowcaseSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { ProductExperienceSection } from '../components/ProductExperienceSection';
import { BetaSection } from '../components/BetaSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { FAQSection } from '../components/FAQSection';

export function HomePage() {
  // After navigating from a sub-page via a section link, scroll to the pending section
  useEffect(() => {
    const pending = sessionStorage.getItem('pendingScroll');
    if (pending) {
      sessionStorage.removeItem('pendingScroll');
      setTimeout(() => {
        const target = document.querySelector(pending);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <CoreIdeaSection />
      <HowItWorksSection />
      <AppShowcaseSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProductExperienceSection />
      <BetaSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}
