
import React from 'react';
import { Search, Users, FileCheck, Sprout, HeartHandshake, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover & Browse',
      description: 'Explore our curated selection of agricultural plots using our advanced search filters. Find plots by location, size, soil type, and available amenities.',
      details: ['Advanced filtering system', 'High-quality photos', 'Detailed plot information', 'Virtual tour options'],
      color: 'from-farm-green-400 to-farm-green-500'
    },
    {
      icon: Users,
      title: 'Schedule Site Visit',
      description: 'Book a guided tour of your selected plots with our agricultural experts. Get firsthand knowledge about soil quality, water access, and growing conditions.',
      details: ['Expert-guided tours', 'Soil analysis reports', 'Water quality testing', 'Climate assessment'],
      color: 'from-farm-green-500 to-farm-green-600'
    },
    {
      icon: FileCheck,
      title: 'Secure Your Plot',
      description: 'Choose your preferred plot and complete the simple rental agreement. Our transparent contracts ensure fair terms for both parties.',
      details: ['Transparent pricing', 'Flexible lease terms', 'Digital contracts', 'Instant confirmation'],
      color: 'from-farm-green-600 to-farm-green-700'
    },
    {
      icon: Sprout,
      title: 'Start Farming',
      description: 'Begin your agricultural journey with ongoing support from our expert team. Access resources, tools, and guidance whenever you need them.',
      details: ['24/7 expert support', 'Farming resource library', 'Equipment rental options', 'Seasonal planning guides'],
      color: 'from-farm-green-700 to-farm-green-800'
    },
    {
      icon: HeartHandshake,
      title: 'Community Support',
      description: 'Join our thriving community of farmers. Share experiences, get advice, and participate in local farming events and workshops.',
      details: ['Farmer community forums', 'Monthly workshops', 'Networking events', 'Mentorship programs'],
      color: 'from-farm-green-600 to-farm-green-700'
    },
    {
      icon: TrendingUp,
      title: 'Grow & Succeed',
      description: 'Watch your agricultural venture flourish with our continued support. Scale up, optimize yields, and achieve your farming goals.',
      details: ['Performance tracking', 'Yield optimization tips', 'Market access guidance', 'Expansion opportunities'],
      color: 'from-farm-green-500 to-farm-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-farm-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            How <span className="text-gradient">Farm My Plot</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From discovery to harvest, we guide you through every step of your agricultural journey. 
            Our proven process has helped thousands of farmers succeed.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-green-600">5,000+</div>
              <div>Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-green-600">250+</div>
              <div>Available Plots</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-farm-green-600">95%</div>
              <div>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Timeline View for Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-farm-green-300 via-farm-green-400 to-farm-green-500 rounded-full"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-1 w-8 h-8 bg-white border-2 border-farm-green-600 text-farm-green-600 rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {index + 1}
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-lora">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-farm-green-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-farm-green-500 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center relative`}>
                    <Icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-farm-green-600 text-farm-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-lora">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-farm-green-700 flex items-center">
                        <div className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
              Success Stories from Our Community
            </h3>
            <p className="text-gray-600">
              See how farmers like you have transformed their dreams into thriving agricultural businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-farm-green-50 rounded-lg">
              <div className="text-3xl font-bold text-farm-green-600 mb-2">$50K</div>
              <div className="text-sm text-gray-600">Average annual revenue increase</div>
            </div>
            <div className="text-center p-4 bg-farm-green-50 rounded-lg">
              <div className="text-3xl font-bold text-farm-green-600 mb-2">6 months</div>
              <div className="text-sm text-gray-600">Average time to profitability</div>
            </div>
            <div className="text-center p-4 bg-farm-green-50 rounded-lg">
              <div className="text-3xl font-bold text-farm-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Customer satisfaction rate</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold">
              Start Your Farming Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
