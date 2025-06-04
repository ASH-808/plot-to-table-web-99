
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, DollarSign, Calendar, Star, Filter } from 'lucide-react';

const FeaturedPlots = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Plots', count: 24 },
    { id: 'small', label: 'Small (1-2 acres)', count: 8 },
    { id: 'medium', label: 'Medium (2-5 acres)', count: 12 },
    { id: 'large', label: 'Large (5+ acres)', count: 4 }
  ];

  const availablePlots = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Northern California',
      size: '2.5 acres',
      type: 'Organic Farm Land',
      price: '$125/month',
      rating: 4.9,
      features: ['Water Access', 'Organic Certified', 'Tool Storage'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Clay Loam',
      distance: '25 miles from San Francisco'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Oregon Valley',
      size: '1.8 acres',
      type: 'Vegetable Farm',
      price: '$85/month',
      rating: 4.7,
      features: ['Irrigation System', 'Greenhouse', 'Parking'],
      available: 'Next month',
      category: 'small',
      soilType: 'Fertile Loam',
      distance: '15 miles from Portland'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Colorado Springs',
      size: '3.2 acres',
      type: 'Mountain Farm',
      price: '$95/month',
      rating: 4.8,
      features: ['Well Water', 'Fencing', 'Equipment Shed'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Sandy Loam',
      distance: '30 miles from Denver'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Texas Plains',
      size: '6.1 acres',
      type: 'Grain Farm',
      price: '$180/month',
      rating: 4.6,
      features: ['Large Storage', 'Equipment Access', 'Road Access'],
      available: 'Spring 2024',
      category: 'large',
      soilType: 'Black Clay',
      distance: '40 miles from Dallas'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Washington State',
      size: '2.9 acres',
      type: 'Fruit Orchard',
      price: '$150/month',
      rating: 5.0,
      features: ['Fruit Trees', 'Drip Irrigation', 'Processing Area'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Rich Loam',
      distance: '20 miles from Seattle'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Montana Valley',
      size: '1.2 acres',
      type: 'Herb Garden',
      price: '$65/month',
      rating: 4.8,
      features: ['Raised Beds', 'Composting Area', 'Water Spigot'],
      available: 'Immediately',
      category: 'small',
      soilType: 'Amended Soil',
      distance: '12 miles from Missoula'
    }
  ];

  const filteredPlots = selectedFilter === 'all' 
    ? availablePlots 
    : availablePlots.filter(plot => plot.category === selectedFilter);

  return (
    <section id="plots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            Available <span className="text-gradient">Plots</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover premium agricultural plots across the country. Each plot is carefully selected and 
            maintained to ensure optimal growing conditions for your farming success.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? 'bg-farm-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Plots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPlots.map((plot) => (
            <Card key={plot.id} className="group card-hover overflow-hidden border-0 shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={plot.image}
                  alt={`Agricultural plot in ${plot.location}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-farm-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plot.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold">{plot.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-farm-green-600">{plot.price}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm font-medium">{plot.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <Ruler className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm">{plot.size} • {plot.soilType}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm">Available: {plot.available}</span>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {plot.features.map((feature, index) => (
                      <span key={index} className="bg-farm-green-100 text-farm-green-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  📍 {plot.distance}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-farm-green-600 hover:bg-farm-green-700 text-white rounded-full font-semibold transition-colors duration-200 text-sm">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white rounded-full font-semibold text-sm px-4">
                    Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-farm-green-50 to-farm-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
            Can't Find the Perfect Plot?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We have many more plots available across different regions and we're constantly adding new locations. 
            Let us know what you're looking for and we'll help you find the perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold">
              Browse All Plots (250+)
            </Button>
            <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white px-8 py-3 rounded-full font-semibold">
              Request Custom Search
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5 text-farm-green-600" />
              <span>Transparent pricing with no hidden fees</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-farm-green-600" />
              <span>Plots in 15+ states nationwide</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-farm-green-600" />
              <span>Average 4.8-star rating from farmers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;
