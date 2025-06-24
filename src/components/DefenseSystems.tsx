import React from 'react';
import { Shield, Radar, Zap, Radio, Eye, Target } from 'lucide-react';
import csborder from '../assets/cs_border.png';

const DefenseSystems = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const defenseSystems = [
    {
      icon: Radar,
      title: "CUAS Anti-Drone System",
      description: "360° radar detection with RF jamming and kinetic interception capabilities",
      image: csborder,
      specs: [
        "Detection Range: 10km",
        "Tracking: Multi-target",
        "Jamming: 2.4/5.8 GHz",
        "Response Time: < 3 seconds"
      ],
      features: [
        "Automated threat assessment",
        "Multi-layer defense protocol",
        "Integration with C4i systems",
        "Mobile and fixed deployment"
      ]
    },
    {
      icon: Radio,
      title: "KTSK Underwater Detection",
      description: "Sonar and radar fusion for underwater intrusion detection and maritime security",
      image: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      specs: [
        "Sonar Range: 5km",
        "Depth Coverage: 200m",
        "Detection: Divers/UUVs",
        "Alert System: Real-time"
      ],
      features: [
        "Passive/active sonar modes",
        "AI-powered classification",
        "Weather-independent operation",
        "Coastal defense integration"
      ]
    },
    {
      icon: Target,
      title: "PRO-ACTIVE-8-VM",
      description: "Vehicle-mounted interceptor system for mobile anti-drone operations",
      image: "https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      specs: [
        "Intercept Range: 8km",
        "Vehicle Platform: Tactical",
        "Deployment: < 5 minutes",
        "Ammunition: 8 interceptors"
      ],
      features: [
        "Rapid deployment capability",
        "All-terrain mobility",
        "Autonomous engagement mode",
        "Battlefield integration ready"
      ]
    },
    {
      icon: Shield,
      title: "PRO-ACTIVE-4-BP",
      description: "Backpack-portable mobile interceptor for infantry anti-drone operations",
      image: "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      specs: [
        "Weight: 15kg backpack",
        "Range: 4km intercept",
        "Setup Time: < 2 minutes",
        "Power: 4-hour battery"
      ],
      features: [
        "Man-portable design",
        "Quick setup/teardown",
        "Silent operation mode",
        "Squad-level deployment"
      ]
    },
    {
      icon: Eye,
      title: "Laser Acoustic Surveillance",
      description: "Stealth voice capture and audio intelligence using laser-based technology",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      specs: [
        "Range: 500m covert",
        "Accuracy: Voice clarity",
        "Detection: Undetectable",
        "Recording: Digital storage"
      ],
      features: [
        "Invisible beam technology",
        "Real-time audio processing",
        "Multi-language support",
        "Covert operations ready"
      ]
    },
    {
      icon: Zap,
      title: "Integrated Command Center",
      description: "C4i command and control system for unified defense operations management",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      specs: [
        "Systems: Multi-platform",
        "Display: 360° situational",
        "Network: Secure mesh",
        "Response: Automated"
      ],
      features: [
        "Real-time threat fusion",
        "Automated response protocols",
        "Multi-domain awareness",
        "Scalable architecture"
      ]
    }
  ];

  return (
    <section id="defense-systems" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Defense Systems</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced defense technologies for comprehensive threat detection, interception, and battlefield intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defenseSystems.map((system, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={system.image}
                  alt={system.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <system.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-teal-600">{system.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{system.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-orange-500 uppercase tracking-wide">Specifications</h4>
                  <div className="space-y-1">
                    {system.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        <span className="text-xs text-slate-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-orange-500 uppercase tracking-wide">Key Features</h4>
                  <div className="space-y-1">
                    {system.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-2 rounded-lg font-medium text-sm transition-all duration-300"
                >
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Integrated Defense Solutions</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto text-lg">
            Our defense systems work together as a unified platform, providing layered security and comprehensive threat response capabilities.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule System Integration Briefing
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefenseSystems;