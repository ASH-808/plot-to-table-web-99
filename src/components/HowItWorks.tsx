
import React from 'react';
import { Button } from '@/components/ui/button';
import ProfessionalTimeline from './ProfessionalTimeline';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora animate-fade-in">
            How <span className="text-gradient">Farm My Plot</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Your journey from plot discovery to farming success in Mandaya District, Karnataka. 
            Follow our proven 6-step process designed for modern agricultural entrepreneurs.
          </p>
          
          {/* Professional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-gray-600">Available Plots in Mandaya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Professional Timeline */}
        <div className="mb-20 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <ProfessionalTimeline />
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-lora">
              Proven Results in Mandaya District
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful farmers who have transformed their agricultural dreams into profitable realities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-3">₹5,00,000</div>
              <div className="text-gray-600 font-medium">Average Annual Revenue Increase</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-3">6 months</div>
              <div className="text-gray-600 font-medium">Average Time to Profitability</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-3">98%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Farming Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
