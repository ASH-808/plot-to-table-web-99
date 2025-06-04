
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-lora">
              About Us
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Farm My Plot, we're revolutionizing agriculture by bringing together sustainable farming practices and inclusive investment opportunities. Our mission is to make farming accessible to everyone while promoting environmental stewardship.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide well-maintained agricultural plots that serve as the foundation for your farming dreams. Whether you're a seasoned farmer or just starting your agricultural journey, we offer the expertise and support you need to succeed.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Together, we're cultivating a future where investment meets sustainability, creating value for both our partners and the planet.
            </p>
            
            <div className="pt-4">
              <Button className="bg-farm-green-600 hover:bg-farm-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg">
                Contact us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                <source src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag. Please consider upgrading your browser.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
