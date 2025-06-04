import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const footerSections = [{
    title: 'Platform',
    links: [{
      label: 'Browse Plots',
      href: '#plots'
    }, {
      label: 'List Your Land',
      href: '#list-land'
    }, {
      label: 'How It Works',
      href: '#how-it-works'
    }, {
      label: 'Pricing',
      href: '#pricing'
    }]
  }, {
    title: 'Resources',
    links: [{
      label: 'Farming Guides',
      href: '#guides'
    }, {
      label: 'Success Stories',
      href: '#stories'
    }, {
      label: 'FAQ',
      href: '#faq'
    }, {
      label: 'Blog',
      href: '#blog'
    }]
  }, {
    title: 'Support',
    links: [{
      label: 'Help Center',
      href: '#help'
    }, {
      label: 'Contact Us',
      href: '#contact'
    }, {
      label: 'Community',
      href: '#community'
    }, {
      label: 'Safety',
      href: '#safety'
    }]
  }, {
    title: 'Legal',
    links: [{
      label: 'Terms of Service',
      href: '#terms'
    }, {
      label: 'Privacy Policy',
      href: '#privacy'
    }, {
      label: 'Cookie Policy',
      href: '#cookies'
    }, {
      label: 'Land Agreement',
      href: '#agreement'
    }]
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img alt="Farm My Plot Logo" className="h-10 sm:h-12 w-auto object-contain flex-shrink-0" src="/lovable-uploads/4e3d877f-3a8d-4a0d-b274-eae2ddf6bcc9.png" />
              <div className="min-w-0">
                
                
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Connecting landowners with aspiring farmers to create sustainable agricultural communities. 
              Start your farming journey or maximize your land's potential today.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => <li key={linkIndex}>
                    <a href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-white text-sm sm:text-base truncate">hello@farmmyplot.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="text-white text-sm sm:text-base">+1 (555) 123-FARM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Visit Us</p>
                <p className="text-white text-sm sm:text-base">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8 space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Farm My Plot. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Built with ❤️ for sustainable agriculture
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;