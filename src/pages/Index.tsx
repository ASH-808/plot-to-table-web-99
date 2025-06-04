
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import FeaturedPlots from '@/components/FeaturedPlots';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div id="about">
          <AboutUs />
        </div>
        <ProblemSolution />
        <HowItWorks />
        <div id="plots">
          <FeaturedPlots />
        </div>
        <div id="stories">
          <Testimonials />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
