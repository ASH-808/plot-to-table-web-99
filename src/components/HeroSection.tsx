
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-lora leading-tight">
            Start Your Farming Journey:
            <span className="block text-farm-green-200">Quality Farm Plots for Rent</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide well-maintained farm plots perfect for your agricultural needs. 
            Ready to start farming? Get in touch with us today.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-farm-green-700 hover:bg-farm-green-50 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-white/80">Successful Rentals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5,000+</div>
            <div className="text-white/80">Acres Managed</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
