import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import FallingLeaves from './FallingLeaves';
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const fullText = 'Farm My Plot';
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 150);
    }
    return () => clearTimeout(timeout);
  }, [currentText, fullText]);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
      transform: `translateY(${scrollY * 0.5}px)`
    }} />
      
      {/* Secondary parallax layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-farm-green-900/20" style={{
      transform: `translateY(${scrollY * 0.3}px)`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-farm-green-800/60 via-farm-green-700/40 to-farm-green-600/60"></div>
      
      {/* Falling Leaves Animation */}
      <FallingLeaves count={8} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-lora leading-tight">
            <span className="inline-block animate-pulse">{currentText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            <span className="bg-gradient-to-r from-white to-farm-green-100 bg-clip-text text-transparent">Your Investment, Our Expertise, Earth's Future</span>
          </p>
          
          <div className="flex justify-center animate-scale-in">
            <Button size="lg" className="bg-white text-farm-green-700 hover:bg-farm-green-50 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 transform">
              Start Farming in Karnataka
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2 animate-bounce">200+</div>
            <div className="text-white/80">Successful Rentals in Karnataka</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2 animate-bounce" style={{
            animationDelay: '0.2s'
          }}>95%</div>
            <div className="text-white/80">Farmer Satisfaction Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-white mb-2 animate-bounce" style={{
            animationDelay: '0.4s'
          }}>5,000+</div>
            <div className="text-white/80">Acres Managed in Mandya</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white animate-pulse" />
      </div>
    </section>;
};
export default HeroSection;