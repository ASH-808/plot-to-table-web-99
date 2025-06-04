
import React from 'react';
import { Button } from '@/components/ui/button';
import InteractiveFarmMap from './InteractiveFarmMap';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora animate-fade-in">
            How <span className="text-gradient">Farm My Plot</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your journey from plot discovery to farming success in Mandaya District, Karnataka. 
            Click on each step below to explore the process.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">5,000+</div>
              <div>Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">250+</div>
              <div>Available Plots in Mandaya</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Interactive Farm Journey Map */}
        <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <InteractiveFarmMap />
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
              Success Stories from Mandaya District
            </h3>
            <p className="text-gray-600">
              See how farmers in Karnataka have transformed their dreams into thriving agricultural businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">₹5,00,000</div>
              <div className="text-sm text-gray-600">Average annual revenue increase</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">6 months</div>
              <div className="text-sm text-gray-600">Average time to profitability</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Customer satisfaction rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Start Your Farming Journey in Mandaya District
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
