
import React from 'react';
import { TrendingDown, Users, MapPin, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProblemSolution = () => {
  const problemsAndSolutions = [
    {
      problem: {
        icon: DollarSign,
        title: 'High Land Costs',
        description: 'Agricultural land prices have skyrocketed, making it impossible for new farmers to afford their own plots.',
        stats: '73% of aspiring farmers cite cost as the main barrier'
      },
      solution: {
        title: 'Affordable Plot Rental',
        description: 'Access premium agricultural land through our flexible rental system starting from just $50/month.',
        benefit: 'Save up to 85% compared to purchasing land'
      }
    },
    {
      problem: {
        icon: Users,
        title: 'Lack of Support',
        description: 'New farmers struggle without proper guidance, leading to failed crops and wasted investments.',
        stats: '60% of new farming ventures fail within the first year'
      },
      solution: {
        title: 'Expert Guidance',
        description: 'Get ongoing support from experienced farmers and agricultural experts throughout your journey.',
        benefit: 'Increase success rate by 90% with our mentorship program'
      }
    },
    {
      problem: {
        icon: MapPin,
        title: 'Limited Land Access',
        description: 'Quality farmland is scarce and often located far from urban areas, making farming impractical.',
        stats: 'Only 12% of land near cities is suitable for agriculture'
      },
      solution: {
        title: 'Curated Locations',
        description: 'Access our network of carefully selected plots in optimal locations with proper soil and water access.',
        benefit: 'Plots located within 30 minutes of major cities'
      }
    },
    {
      problem: {
        icon: TrendingDown,
        title: 'Complex Process',
        description: 'Finding, evaluating, and securing farmland involves complex legal and logistical challenges.',
        stats: 'Average 6-month process to secure farmland'
      },
      solution: {
        title: 'Simplified Platform',
        description: 'Browse, visit, and rent plots through our streamlined platform with transparent pricing and contracts.',
        benefit: 'Get started farming in less than 2 weeks'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            The Farming <span className="text-gradient">Challenge</span> We Solve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the barriers that prevent people from pursuing their agricultural dreams. 
            Here's how we're breaking them down.
          </p>
        </div>

        <div className="space-y-16">
          {problemsAndSolutions.map((item, index) => {
            const ProblemIcon = item.problem.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Problem Side */}
                <div className="flex-1 space-y-6">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <ProblemIcon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-lora">Problem: {item.problem.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.problem.description}
                    </p>
                    <div className="bg-red-100 rounded-lg p-4">
                      <p className="text-red-800 font-semibold text-sm">
                        📊 {item.problem.stats}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-farm-green-600" />
                  </div>
                </div>

                {/* Solution Side */}
                <div className="flex-1 space-y-6">
                  <div className="bg-farm-green-50 border border-farm-green-100 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-farm-green-100 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-farm-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-lora">Solution: {item.solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.solution.description}
                    </p>
                    <div className="bg-farm-green-100 rounded-lg p-4">
                      <p className="text-farm-green-800 font-semibold text-sm">
                        ✅ {item.solution.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-lora">
              Ready to Overcome These Challenges?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of successful farmers who have started their agricultural journey with Farm My Plot. 
              We provide the land, support, and expertise you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold">
                Find Your Perfect Plot
              </Button>
              <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white px-8 py-3 rounded-full font-semibold">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
