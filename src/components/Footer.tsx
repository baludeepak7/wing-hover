import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'UAV Solutions', href: '#uav-offerings' },
    { name: 'Defense Systems', href: '#defense-systems' },
    { name: 'Agriculture', href: '#agriculture' },
    { name: 'Contact', href: '#contact' }
  ];

  const solutions = [
    { name: 'Tethered Drones', href: '#uav-offerings' },
    { name: 'VTOL Systems', href: '#uav-offerings' },
    { name: 'Anti-Drone Defense', href: '#defense-systems' },
    { name: 'Agricultural Drones', href: '#agriculture' },
    { name: 'C4i Systems', href: '#intelligence' },
    { name: 'Digital Transformation', href: '#about' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <span className="text-2xl font-bold text-white">OPTIVALUE</span>
                <span className="text-2xl font-bold text-blue-400">TEK</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Engineering India's UAV future with dual-domain excellence in digital transformation and defense technology. 
              Delivering mission-critical solutions with indigenous innovation and Atmanirbhar Bharat principles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@optivaluetek.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 80 4567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Electronic City, Bangalore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(solution.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {solution.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} OptiValue Tek Private Limited. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors group">
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors group">
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors group">
                  <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;