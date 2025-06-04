
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Filter, Search, Leaf, Droplets, Sun } from 'lucide-react';

const FeaturedPlots = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = [
    { id: 'all', label: 'All Plots', count: 24 },
    { id: 'organic', label: 'Organic Certified', count: 8 },
    { id: 'irrigated', label: 'Irrigated', count: 12 },
    { id: 'premium', label: 'Premium Plots', count: 4 }
  ];

  const availablePlots = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Organic Paddy Field',
      features: ['Organic Certified', 'Rich Black Cotton Soil', 'Canal Irrigation System'],
      description: 'Premium organic paddy cultivation land with traditional water management systems and rich alluvial soil perfect for rice production.',
      category: 'organic',
      soilType: 'Black Cotton Soil',
      waterSource: 'Canal Irrigation'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Vegetable Cultivation Land',
      features: ['Drip Irrigation Ready', 'Poly House Compatible', 'Highway Access'],
      description: 'Ideal for year-round vegetable cultivation with modern irrigation infrastructure and excellent market connectivity.',
      category: 'irrigated',
      soilType: 'Red Laterite Soil',
      waterSource: 'Bore Well & Drip System'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Sugarcane Estate',
      features: ['Sugar Mill Contract', 'Canal Water Rights', 'Machinery Access'],
      description: 'Established sugarcane cultivation land with guaranteed mill contracts and abundant water supply for optimal yield.',
      category: 'premium',
      soilType: 'Alluvial Soil',
      waterSource: 'Canal Irrigation'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Multi-Crop Farmland',
      features: ['Versatile Cropping', 'Storage Facilities', 'Equipment Shed'],
      description: 'Flexible farmland suitable for rotating crops including cereals, pulses, and commercial crops with complete infrastructure.',
      category: 'premium',
      soilType: 'Black Cotton Soil',
      waterSource: 'Mixed Sources'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Coconut Grove',
      features: ['Mature Trees', 'Intercropping Allowed', 'Processing Unit Nearby'],
      description: 'Established coconut plantation with mature bearing trees, perfect for coconut production and intercropping opportunities.',
      category: 'organic',
      soilType: 'Red Sandy Loam',
      waterSource: 'Rainwater & Bore Well'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Mandya District, Karnataka',
      type: 'Flower Garden',
      features: ['Controlled Environment', 'Shade Net Systems', 'Premium Market Access'],
      description: 'Specialized flower cultivation area with climate control systems and direct access to premium flower markets.',
      category: 'irrigated',
      soilType: 'Garden Soil Mix',
      waterSource: 'Micro Irrigation'
    }
  ];

  const filteredPlots = availablePlots.filter(plot => {
    const matchesFilter = selectedFilter === 'all' || plot.category === selectedFilter;
    const matchesSearch = plot.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plot.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="plots" className="py-20 bg-gradient-to-b from-white to-green-50">
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  ? 'bg-green-600 text-white shadow-lg'
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
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plot.type}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-sm font-medium">{plot.location}</span>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{plot.description}</p>

                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600">{plot.soilType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-gray-600">{plot.waterSource}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {plot.features.map((feature, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-200 text-sm hover:scale-105">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full font-semibold text-sm px-4 hover:scale-105">
                    Visit Plot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-lora">
            Can't Find the Perfect Plot in Mandya?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We have many more plots available across Mandya District and we're constantly adding new locations. 
            Let us know what you're looking for and we'll help you find the perfect farming opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
              Browse All Mandya Plots (150+)
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200">
              Request Custom Search
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Sun className="w-5 h-5 text-green-600" />
              <span>Climate-optimized locations</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Prime locations across Mandya District</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <span>Organic and sustainable farming ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;
