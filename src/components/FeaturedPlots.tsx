import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Leaf, Sun } from 'lucide-react';
const FeaturedPlots = () => {
  const farmingImages = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Rice paddies'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Agricultural field'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Crop cultivation'
  }, {
    id: 4,
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Farmland landscape'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Coconut plantation'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Wheat field'
  }, {
    id: 7,
    src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Agricultural landscape'
  }, {
    id: 8,
    src: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Farming scene'
  }, {
    id: 9,
    src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Rural farming'
  }, {
    id: 10,
    src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain agriculture'
  }];
  return <section id="plots" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-lora animate-fade-in">
            Available <span className="text-gradient">Plots </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up">
            Discover premium agricultural plots across Mandya District, Karnataka. Each plot is carefully selected and 
            maintained to ensure optimal growing conditions for your farming success.
          </p>
        </div>

        {/* Scrolling Ticker */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll-right-to-left">
            {/* First set of images */}
            {farmingImages.map(image => <div key={`first-${image.id}`} className="flex-shrink-0 mx-4">
                <img src={image.src} alt={image.alt} className="h-64 w-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-scale-down" />
              </div>)}
            {/* Duplicate set for seamless loop */}
            {farmingImages.map(image => <div key={`second-${image.id}`} className="flex-shrink-0 mx-4">
                <img src={image.src} alt={image.alt} className="h-64 w-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
              </div>)}
          </div>
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
    </section>;
};
export default FeaturedPlots;