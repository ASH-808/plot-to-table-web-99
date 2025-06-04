
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, DollarSign, Calendar, Star, Filter, Search } from 'lucide-react';

const FeaturedPlots = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = [
    { id: 'all', label: 'All Plots', count: 24 },
    { id: 'small', label: 'Small (1-2 acres)', count: 8 },
    { id: 'medium', label: 'Medium (2-5 acres)', count: 12 },
    { id: 'large', label: 'Large (5+ acres)', count: 4 }
  ];

  const availablePlots = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '2.5 acres',
      type: 'Organic Paddy Field',
      price: '₹8,500/month',
      rating: 4.9,
      features: ['Bore Well Access', 'Organic Certified', 'Storage Facility'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Black Cotton Soil',
      distance: '15 km from Mandya City'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '1.8 acres',
      type: 'Vegetable Farm',
      price: '₹6,200/month',
      rating: 4.7,
      features: ['Drip Irrigation', 'Poly House', 'Road Access'],
      available: 'Next month',
      category: 'small',
      soilType: 'Red Laterite Soil',
      distance: '8 km from Srirangapatna'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '3.2 acres',
      type: 'Sugarcane Farm',
      price: '₹9,800/month',
      rating: 4.8,
      features: ['Canal Irrigation', 'Sugar Mill Contract', 'Equipment Shed'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Alluvial Soil',
      distance: '12 km from Maddur'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '6.1 acres',
      type: 'Multi-Crop Farm',
      price: '₹15,500/month',
      rating: 4.6,
      features: ['Large Storage', 'Tractor Access', 'Highway Access'],
      available: 'Kharif Season 2024',
      category: 'large',
      soilType: 'Black Cotton Soil',
      distance: '20 km from Mysore'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '2.9 acres',
      type: 'Coconut Grove',
      price: '₹11,200/month',
      rating: 5.0,
      features: ['Mature Coconut Trees', 'Intercropping Allowed', 'Processing Unit'],
      available: 'Immediately',
      category: 'medium',
      soilType: 'Red Sandy Loam',
      distance: '18 km from Mandya'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      size: '1.2 acres',
      type: 'Flower Garden',
      price: '₹5,800/month',
      rating: 4.8,
      features: ['Raised Beds', 'Shade Net', 'Water Source'],
      available: 'Immediately',
      category: 'small',
      soilType: 'Garden Soil',
      distance: '5 km from Pandavapura'
    }
  ];

  const filteredPlots = availablePlots.filter(plot => {
    const matchesFilter = selectedFilter === 'all' || plot.category === selectedFilter;
    const matchesSearch = plot.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plot.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="plots" className="py-20 bg-gradient-to-b from-white to-farm-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora animate-fade-in">
            Available <span className="text-gradient">Plots in Mandya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up">
            Discover premium agricultural plots across Mandya District, Karnataka. Each plot is carefully selected and 
            maintained to ensure optimal growing conditions for your farming success.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by crop type or area..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-farm-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 transform hover:scale-105 ${
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
          {filteredPlots.map((plot, index) => (
            <Card key={plot.id} className="group card-hover overflow-hidden border-0 shadow-lg bg-white animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img
                  src={plot.image}
                  alt={`${plot.type} in ${plot.location}`}
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
                  <Button className="flex-1 bg-farm-green-600 hover:bg-farm-green-700 text-white rounded-full font-semibold transition-all duration-200 text-sm hover:scale-105">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white rounded-full font-semibold text-sm px-4 hover:scale-105">
                    Visit Plot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-farm-green-50 to-farm-green-100 rounded-2xl p-8 text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
            Can't Find the Perfect Plot in Mandya?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We have many more plots available across Mandya District and we're constantly adding new locations. 
            Let us know what you're looking for and we'll help you find the perfect farming opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
              Browse All Mandya Plots (150+)
            </Button>
            <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
              Request Custom Search
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5 text-farm-green-600" />
              <span>Transparent pricing in Indian Rupees</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-farm-green-600" />
              <span>Prime locations across Mandya District</span>
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
