
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler } from 'lucide-react';

const FeaturedPlots = () => {
  const availablePlots = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Northern California',
      size: '2.5 acres',
      type: 'Agricultural Land'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Oregon Valley',
      size: '1.8 acres',
      type: 'Farmland'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Colorado Springs',
      size: '3.2 acres',
      type: 'Crop Land'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Texas Plains',
      size: '4.1 acres',
      type: 'Organic Farm'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Washington State',
      size: '2.9 acres',
      type: 'Vegetable Farm'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      location: 'Montana Valley',
      size: '5.7 acres',
      type: 'Ranch Land'
    }
  ];

  return (
    <section id="plots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora">
            Available <span className="text-gradient">Plots</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We have various plots available for farming across different locations. 
            From small garden plots to large-scale farming land, find your ideal growing space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availablePlots.map((plot) => (
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
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm">{plot.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Ruler className="w-4 h-4 mr-2 text-farm-green-500" />
                  <span className="text-sm">{plot.size}</span>
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
            Looking for something specific? We have many more plots available across different regions.
          </p>
          <Button variant="outline" className="border-farm-green-600 text-farm-green-600 hover:bg-farm-green-600 hover:text-white px-8 py-3 rounded-full font-semibold">
            View Our Plots
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;
