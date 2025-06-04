
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import FeaturedPlots from '@/components/FeaturedPlots';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutUs />
        <HowItWorks />
        <FeaturedPlots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
