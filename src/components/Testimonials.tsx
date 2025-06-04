
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Urban Farmer',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Farm My Plot transformed my dream of urban farming into reality. Within 6 months, I went from complete beginner to selling fresh produce at local farmers markets. The support team is incredible!',
      highlight: 'From beginner to profitable in 6 months'
    },
    {
      id: 2,
      name: 'James Chen',
      role: 'Organic Farmer',
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The quality of the land and ongoing support exceeded my expectations. I love how they handle all the complex stuff so I can focus on what I love - growing amazing organic vegetables.',
      highlight: 'Exceeded expectations with quality land'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Herb Specialist',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'As a working mom, I needed flexibility. Farm My Plot offered exactly that - quality land close to home with expert guidance. My herb business is now thriving and feeds my family.',
      highlight: 'Perfect flexibility for working parents'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Sustainable Farmer',
      location: 'Denver, CO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The community aspect is what sets Farm My Plot apart. Learning from other farmers and sharing experiences has been invaluable. Plus, the land quality is consistently excellent.',
      highlight: 'Amazing community and land quality'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Happy Farmers' },
    { number: '95%', label: 'Success Rate' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '$2.5M+', label: 'Farmer Revenue Generated' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-farm-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            What Our <span className="text-gradient">Farmers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real farmers are saying about their 
            experience with Farm My Plot.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-farm-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-farm-green-600 font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-farm-green-200 -mt-2 -ml-2" />
                <p className="text-gray-700 leading-relaxed mb-4 pl-6">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="bg-farm-green-50 rounded-lg p-4">
                <p className="text-farm-green-800 font-semibold text-sm">
                  ✨ {testimonial.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of successful farmers who have transformed their agricultural dreams into reality.
          </p>
          <button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
            Start Your Farming Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
