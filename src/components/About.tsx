import React from 'react';
import { Cloud, Shield, Zap, Globe, Users, Award } from 'lucide-react';
import DroneManufacturing from '../assets/dronemanufacturing.jpg';

const About = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: "Digital Transformation",
      description: "10+ years of cloud modernization, data engineering, and enterprise IT consulting expertise."
    },
    {
      icon: Shield,
      title: "UAV Defense Innovation",
      description: "Cutting-edge drone technology aligned with Atmanirbhar Bharat for India's defense needs."
    },
    {
      icon: Zap,
      title: "AI & Intelligence Systems",
      description: "Advanced C4i command software, surveillance systems, and battlefield intelligence solutions."
    },
    {
      icon: Globe,
      title: "End-to-End Engineering",
      description: "From concept to deployment - complete system integration and OEM manufacturing capabilities."
    }
  ];

  const stats = [
    { value: "10+", label: "Years IT Experience" },
    { value: "50+", label: "UAV Models Developed" },
    { value: "24/7", label: "Mission Support" },
    { value: "100%", label: "India-First Approach" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">About OptiValue Tek</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            OptiValue Tek is a dual-domain powerhouse—pioneering digital transformation and UAV innovation in India. 
            With over a decade of IT consulting experience and a bold foray into drone tech, we lead enterprise and defense-grade engineering missions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={DroneManufacturing}
              alt="OptiValue Tek engineering facility"
              className="w-full max-h-[500px] h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-600">Dual-Domain Excellence</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Born from a decade of digital transformation leadership, OptiValue Tek has evolved into India's premier UAV and defense technology innovator. 
              Our unique combination of enterprise IT expertise and cutting-edge drone engineering positions us at the forefront of India's technological sovereignty.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We specialize in mission-critical UAV systems, anti-drone defense solutions, and AI-powered intelligence platforms. 
              Every solution is designed with Atmanirbhar Bharat principles, ensuring complete indigenous capability and strategic independence.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-orange-500" />
              <span className="text-lg font-semibold text-slate-700">DGCA Certified | Defense Grade Security</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-md">
              <div className="mb-4">
                <capability.icon className="h-12 w-12 text-blue-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-800">{capability.title}</h4>
              <p className="text-slate-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;