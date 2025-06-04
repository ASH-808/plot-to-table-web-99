
import React from 'react';
import { Search, Users, FileCheck, Sprout, HeartHandshake, TrendingUp } from 'lucide-react';

const ProfessionalTimeline = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Discover Your Perfect Plot',
      description: 'Browse through our curated selection of fertile agricultural plots in Mandya District, Karnataka. Use advanced filters to find your ideal farming location based on soil quality, water availability, and accessibility.',
      timeframe: '1-3 days',
      benefits: ['Advanced search filters', 'Detailed soil reports', 'Virtual plot tours', 'Location analytics'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      icon: Users,
      title: 'Expert Site Inspection',
      description: 'Schedule guided tours with certified agricultural experts who provide comprehensive assessments of soil quality, water sources, and growing conditions specific to your chosen plot in Mandya.',
      timeframe: '1 week',
      benefits: ['Professional soil testing', 'Water quality analysis', 'Climate assessment', 'Crop suitability advice'],
      image: '/lovable-uploads/55b3ce75-dc57-47cc-83d0-169bb4885015.png'
    },
    {
      id: 3,
      icon: FileCheck,
      title: 'Secure Documentation',
      description: 'Complete transparent rental agreements with farmer-friendly terms. All legal documentation follows Karnataka state regulations and is digitally processed for quick approval.',
      timeframe: '3-5 days',
      benefits: ['Transparent pricing in ₹', 'Flexible lease terms', 'Digital contracts', 'Legal compliance'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      icon: Sprout,
      title: 'Begin Cultivation',
      description: 'Start your agricultural journey with comprehensive support including farming guides, equipment access, and expert consultation throughout your growing cycle in Karnataka climate.',
      timeframe: 'Ongoing',
      benefits: ['24/7 expert support', 'Equipment rental access', 'Seasonal planning guides', 'Resource optimization'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      icon: HeartHandshake,
      title: 'Join Farming Community',
      description: 'Become part of Karnataka\'s thriving agricultural network. Access peer support, knowledge sharing, and collaborative opportunities with fellow farmers in Mandya region.',
      timeframe: 'Immediate',
      benefits: ['Farmer networking events', 'Knowledge sharing forums', 'Collaborative opportunities', 'Peer mentorship'],
      image: '/lovable-uploads/089c59b2-0f06-42f8-8077-f33fb96c766a.png'
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Achieve Success',
      description: 'Monitor your progress with data-driven insights, optimize yields, and scale your operations. Access market guidance and growth planning support tailored for Karnataka agriculture.',
      timeframe: '6+ months',
      benefits: ['Yield optimization', 'Market price guidance', 'Growth planning', 'Performance analytics'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-600 h-full hidden lg:block"></div>
      
      {steps.map((step, index) => (
        <div key={step.id} className="relative mb-16 lg:mb-24">
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-green-500 rounded-full flex items-center justify-center z-10 hidden lg:flex">
            <step.icon className="w-6 h-6 text-green-600" />
          </div>
          
          {/* Content Card */}
          <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Card Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1">
                {/* Mobile Icon */}
                <div className="flex items-center gap-4 mb-6 lg:hidden">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-sm text-green-600 font-semibold">Step {step.id}</div>
                </div>
                
                {/* Desktop Step Number */}
                <div className="hidden lg:block text-sm text-green-600 font-semibold mb-2">Step {step.id}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-lora">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                
                {/* Timeframe */}
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {step.timeframe}
                </div>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={step.image} 
                  alt={`${step.title} - Agricultural farming in Karnataka`}
                  className="w-full h-64 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalTimeline;
