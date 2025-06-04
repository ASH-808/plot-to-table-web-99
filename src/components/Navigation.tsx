import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'How It Works',
    href: '#how-it-works'
  }, {
    label: 'Plots',
    href: '#plots'
  }, {
    label: 'Success Stories',
    href: '#stories'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1 sm:flex-none">
            <img alt="Farm My Plot Logo" className="h-10 sm:h-12 w-auto object-contain flex-shrink-0" src="/lovable-uploads/a8b0c51c-f926-4dbb-999b-df4bd446c23f.png" />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-green-800 font-lora animate-fade-in truncate">
                Farm My Plot
              </h1>
              <p className="text-xs text-green-600 -mt-1 animate-slide-up hidden sm:block">
                Your Investment. Our Expertise. Earth's Future
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 relative group animate-fade-in text-sm xl:text-base" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </button>)}
            <Button className="bg-green-600 hover:bg-green-700 text-white px-4 xl:px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 animate-fade-in text-sm xl:text-base">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-600 h-10 w-10" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-16 sm:top-18 left-0 right-0 bg-white border-b border-green-100 shadow-lg animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left text-gray-700 hover:text-green-600 font-medium py-3 transition-colors duration-200 border-b border-gray-100 last:border-b-0">
                  {item.label}
                </button>)}
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-medium mt-6 text-base">
                Get Started
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;