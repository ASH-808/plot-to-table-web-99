
import React from 'react';
import { Search, HandHeart, Sprout } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover Plots',
      description: 'Browse through our curated selection of agricultural plots. Filter by location, size, amenities, and price to find your perfect match.',
      color: 'from-farm-green-400 to-farm-green-500'
    },
    {
      icon: HandHeart,
      title: 'Connect & Agree',
      description: 'Connect directly with landowners, discuss terms, and finalize rental agreements. Our platform facilitates smooth communication.',
      color: 'from-farm-green-500 to-farm-green-600'
    },
    {
      icon: Sprout,
      title: 'Start Farming',
      description: 'Begin your farming journey! Grow your crops, tend your garden, and watch your agricultural dreams come to life.',
      color: 'from-farm-green-600 to-farm-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-farm-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            How <span className="text-gradient">Farm My Plot</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with agricultural plot rental is simple. Follow these three easy steps to begin your farming journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-farm-green-300 to-farm-green-200 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-farm-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
              Ready to Start Your Agricultural Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of farmers and landowners who have already discovered the benefits of plot rental. 
              Whether you're looking to start small-scale farming or maximize your land's potential, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-farm-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-farm-green-700 transition-colors duration-200">
                Browse Plots Now
              </button>
              <button className="border-2 border-farm-green-600 text-farm-green-600 px-8 py-3 rounded-full font-semibold hover:bg-farm-green-600 hover:text-white transition-all duration-200">
                List Your Land
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
