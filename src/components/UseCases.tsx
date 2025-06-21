import React from 'react';
import { Shield, TreePine, AlertTriangle, MapPin, Satellite, Eye } from 'lucide-react';
import forestdrone from '../assets/drone_forest.jpg';
import borderDrone from '../assets/droneborder.png';

const UseCases = () => {
  const useCases = [
    {
      icon: Shield,
      title: "Border Security & Surveillance",
      description: "24/7 monitoring of international borders with real-time threat detection and automated alert systems.",
      image: borderDrone,
      features: ["Thermal imaging", "Motion detection", "Live streaming", "GPS tracking"]
    },
    {
      icon: TreePine,
      title: "Forest Fire Detection",
      description: "Early detection and monitoring of forest fires using advanced thermal sensors and AI-powered analysis.",
      image: forestdrone,
      features: ["Heat signature analysis", "Smoke detection", "Coverage mapping", "Emergency response"]
    },
    {
      icon: AlertTriangle,
      title: "Disaster Response",
      description: "Rapid deployment for natural disasters, providing critical intelligence and supporting rescue operations.",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      features: ["Search & rescue", "Damage assessment", "Communication relay", "Supply delivery"]
    },
    {
      icon: MapPin,
      title: "Critical Infrastructure Protection",
      description: "Monitoring and securing vital infrastructure including power plants, ports, and military installations.",
      image: "https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      features: ["Perimeter security", "Asset monitoring", "Threat assessment", "Access control"]
    },
    {
      icon: Satellite,
      title: "Maritime Surveillance",
      description: "Coastal and offshore monitoring for illegal fishing, smuggling, and maritime security threats.",
      image: "https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      features: ["Vessel tracking", "Coast guard support", "Anti-piracy ops", "Environmental monitoring"]
    },
    {
      icon: Eye,
      title: "Urban Security",
      description: "Enhanced city surveillance for public safety, crowd monitoring, and emergency response coordination.",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      features: ["Crowd analysis", "Traffic monitoring", "Event security", "Crime prevention"]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Use Cases & Applications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Versatile drone solutions addressing critical security and surveillance challenges across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-teal-600">{useCase.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-2 rounded-lg font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Deploy?</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto text-lg">
            Contact our technical team to discuss how our drone solutions can address your specific security and surveillance requirements.
          </p>
          <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;