
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, DollarSign, Droplets, Sun, Tractor } from 'lucide-react';

const FeaturedPlots = () => {
  const featuredPlots = [
    {
      id: 1,
      title: 'Sunset Valley Farm Plot',
      location: 'Northern California',
      size: '2.5 acres',
      price: '$450/month',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: ['Water Access', 'Full Sun', 'Equipment Included'],
      type: 'Organic Certified'
    },
    {
      id: 2,
      title: 'Green Meadows Plot',
      location: 'Oregon Valley',
      size: '1.8 acres',
      price: '$320/month',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: ['Irrigation System', 'Storage Shed', 'Partial Shade'],
      type: 'Vegetable Farming'
    },
    {
      id: 3,
      title: 'Mountain View Agricultural Land',
      location: 'Colorado Springs',
      size: '3.2 acres',
      price: '$580/month',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: ['Mountain Views', 'Rich Soil', 'Tool Storage'],
      type: 'Fruit Orchard'
    }
  ];

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Water') || feature.includes('Irrigation')) return Droplets;
    if (feature.includes('Sun') || feature.includes('Shade')) return Sun;
    if (feature.includes('Equipment') || feature.includes('Tool') || feature.includes('Storage')) return Tractor;
    return Tractor;
  };

  return (
    <section id="plots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            Featured <span className="text-gradient">Agricultural Plots</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover hand-picked agricultural plots perfect for your farming dreams. 
            From small garden plots to large-scale farming land, find your ideal growing space.
          </p>
          <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold">
            View All Available Plots
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlots.map((plot) => (
            <Card key={plot.id} className="group card-hover overflow-hidden border-0 shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-farm-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plot.type}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-lora group-hover:text-farm-green-600 transition-colors">
                  {plot.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm">{plot.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-4 h-4 mr-2 text-farm-green-500" />
                    <span className="text-sm">{plot.size}</span>
                  </div>
                  <div className="flex items-center text-farm-green-600 font-bold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{plot.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {plot.features.map((feature, index) => {
                      const Icon = getFeatureIcon(feature);
                      return (
                        <div key={index} className="flex items-center bg-farm-green-50 text-farm-green-700 px-3 py-1 rounded-full text-xs">
                          <Icon className="w-3 h-3 mr-1" />
                          {feature}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <Button className="w-full bg-farm-green-600 hover:bg-farm-green-700 text-white rounded-full font-semibold transition-colors duration-200">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We have hundreds more plots available.
          </p>
          <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white px-8 py-3 rounded-full font-semibold">
            Browse All Plots
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;
