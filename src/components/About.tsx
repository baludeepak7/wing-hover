import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';
import DroneManufacturing from '../assets/dronemanufacturing.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide cutting-edge indigenous drone technology solutions that enhance national security, defense capabilities, and surveillance operations."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our multidisciplinary team combines aerospace engineers, AI specialists, and defense experts with decades of combined experience."
    },
    {
      icon: Award,
      title: "Certifications",
      description: "ISO 9001:2015 certified with DGCA approvals and military-grade security clearances for sensitive defense projects."
    },
    {
      icon: Globe,
      title: "Indigenous Innovation",
      description: "Proudly developing world-class drone technology with local expertise, contributing to national self-reliance in defense."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">About Wing Hover</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leading the future of indigenous drone technology with innovative solutions for defense, security, and surveillance applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={DroneManufacturing}
              alt="Drone manufacturing facility"
             className="w-full max-h-[500px] h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-teal-600">Pioneering Indigenous Technology</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with the vision of achieving technological self-reliance, Wing Hover has emerged as a leading manufacturer of indigenous drone systems. Our commitment to innovation and excellence has made us a trusted partner for defense and security organizations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We specialize in developing high-performance unmanned aerial vehicles (UAVs) that meet the stringent requirements of modern defense and surveillance operations. Our drones are designed and manufactured entirely in-house, ensuring complete control over quality and security.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-md">
              <div className="mb-4">
                <value.icon className="h-12 w-12 text-teal-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-800">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">500+</div>
            <div className="text-slate-600">Drones Deployed</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-slate-600">Defense Contracts</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-slate-600">Support Service</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-slate-600">Mission Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;