
import React, { useState } from 'react';
import { Search, Users, FileCheck, Sprout, HeartHandshake, TrendingUp } from 'lucide-react';

const InteractiveFarmMap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const farmSteps = [
    {
      id: 0,
      icon: Search,
      title: 'Discover Your Perfect Plot',
      shortDesc: 'Explore farmland',
      position: { top: '60%', left: '15%' },
      description: 'Browse through our curated selection of fertile agricultural plots in Mandaya District. Use advanced filters to find your ideal farming location.',
      benefits: ['Smart search filters', 'Detailed soil analysis', 'High-quality photos', 'Virtual plot tours'],
      image: '🔍',
      color: 'from-green-400 to-green-500'
    },
    {
      id: 1,
      icon: Users,
      title: 'Visit with Experts',
      shortDesc: 'Site inspection',
      position: { top: '45%', left: '30%' },
      description: 'Schedule guided tours with agricultural experts who know Mandaya District intimately. Get professional insights about soil quality and growing conditions.',
      benefits: ['Expert guidance', 'Soil testing', 'Water analysis', 'Climate assessment'],
      image: '👥',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      icon: FileCheck,
      title: 'Secure Your Land',
      shortDesc: 'Complete paperwork',
      position: { top: '35%', left: '50%' },
      description: 'Finalize your plot selection with transparent, farmer-friendly rental agreements. All documents are digitally processed for quick confirmation.',
      benefits: ['Fair pricing', 'Flexible terms', 'Digital contracts', 'Quick approval'],
      image: '📋',
      color: 'from-green-600 to-green-700'
    },
    {
      id: 3,
      icon: Sprout,
      title: 'Start Farming',
      shortDesc: 'Begin cultivation',
      position: { top: '50%', left: '70%' },
      description: 'Begin your agricultural journey with comprehensive support. Access tools, resources, and expert guidance throughout your farming cycle.',
      benefits: ['24/7 support', 'Farming guides', 'Equipment rental', 'Seasonal planning'],
      image: '🌱',
      color: 'from-green-700 to-green-800'
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: 'Join Community',
      shortDesc: 'Connect with farmers',
      position: { top: '65%', left: '85%' },
      description: 'Become part of Mandaya District\'s thriving farming community. Share knowledge, attend workshops, and build lasting relationships.',
      benefits: ['Farmer forums', 'Monthly workshops', 'Networking events', 'Mentorship'],
      image: '🤝',
      color: 'from-green-600 to-green-700'
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Achieve Success',
      shortDesc: 'Grow and prosper',
      position: { top: '25%', left: '75%' },
      description: 'Watch your farming venture flourish with continued support. Scale operations, optimize yields, and achieve sustainable success.',
      benefits: ['Yield tracking', 'Market guidance', 'Growth planning', 'Success metrics'],
      image: '📈',
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setShowDetails(true);
  };

  return (
    <div className="relative">
      {/* Farm Landscape Background */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-b from-blue-400 via-blue-300 to-green-200 rounded-2xl overflow-hidden">
        {/* Sky and Clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-10 w-16 h-8 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-8 right-20 w-20 h-10 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-6 left-1/3 w-12 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Farm Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 to-green-400"></div>
        
        {/* Interactive Farm Points */}
        {farmSteps.map((step, index) => (
          <div
            key={step.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: step.position.top, left: step.position.left }}
            onClick={() => handleStepClick(step.id)}
          >
            {/* Animated Ring */}
            <div className={`absolute -inset-4 rounded-full ${activeStep === step.id ? 'ring-4 ring-white ring-opacity-50' : ''} transition-all duration-300`}>
              <div className="w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Farm Element */}
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 ${activeStep === step.id ? 'scale-125 shadow-xl' : ''}`}>
              <span className="text-white text-lg font-bold">{index + 1}</span>
            </div>
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm font-medium z-10">
              {step.shortDesc}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#15803d', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path
            d={`M ${15}% ${60}% Q ${30}% ${35}% ${50}% ${35}% Q ${70}% ${35}% ${85}% ${65}% Q ${75}% ${15}% ${75}% ${25}%`}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Details Panel */}
      {showDetails && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden animate-scale-in">
          <div className="p-8">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${farmSteps[activeStep].color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-2xl">{farmSteps[activeStep].image}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-lora">
                    Step {activeStep + 1}: {farmSteps[activeStep].title}
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {farmSteps[activeStep].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {farmSteps[activeStep].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Navigation */}
          <div className="bg-green-50 px-8 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => activeStep > 0 && handleStepClick(activeStep - 1)}
                disabled={activeStep === 0}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex gap-2">
                {farmSteps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      idx === activeStep ? 'bg-green-600' : 'bg-green-200'
                    }`}
                    onClick={() => handleStepClick(idx)}
                  />
                ))}
              </div>
              
              <button
                onClick={() => activeStep < farmSteps.length - 1 && handleStepClick(activeStep + 1)}
                disabled={activeStep === farmSteps.length - 1}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveFarmMap;
