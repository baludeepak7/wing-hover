import React from 'react';
import { Eye, Brain, Network, Shield, Cpu, Satellite } from 'lucide-react';

const Intelligence = () => {
  const intelligenceSystems = [
    {
      icon: Eye,
      title: "Multi-Sensor Units",
      description: "Modular thermal, day/night EO/IR, and multi-spectral imaging systems",
      features: [
        "Thermal + RGB fusion",
        "Night vision capability",
        "Multi-spectral analysis",
        "Stabilized gimbal mount"
      ]
    },
    {
      icon: Brain,
      title: "AI Surveillance Software",
      description: "Advanced computer vision and anomaly detection for real-time threat assessment",
      features: [
        "Object recognition",
        "Behavioral analysis",
        "Threat classification",
        "Automated alerting"
      ]
    },
    {
      icon: Network,
      title: "C4i Command Platform",
      description: "Integrated command, control, communications, and intelligence system",
      features: [
        "Multi-domain awareness",
        "Real-time data fusion",
        "Decision support tools",
        "Mission planning"
      ]
    },
    {
      icon: Satellite,
      title: "Secure Data Transport",
      description: "Fiber optic and encrypted wireless communication systems",
      features: [
        "Military-grade encryption",
        "Fiber optic backbone",
        "Mesh networking",
        "Redundant pathways"
      ]
    }
  ];

  const c4iCapabilities = [
    "Real-time battlefield visualization",
    "Multi-source intelligence fusion",
    "Automated threat detection and tracking",
    "Secure multi-platform communication",
    "Mission planning and execution support",
    "Resource allocation optimization"
  ];

  return (
    <section id="intelligence" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">System Intelligence</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered surveillance, command systems, and secure communications for comprehensive situational awareness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {intelligenceSystems.map((system, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <system.icon className="h-10 w-10 text-teal-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-800">{system.title}</h4>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{system.description}</p>
              
              <ul className="space-y-2">
                {system.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                    <span className="text-xs text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-slate-800">C4i Command Center</h3>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Comprehensive command, control, communications, computers, and intelligence platform 
              designed for multi-domain operations and real-time decision making.
            </p>

            <div className="space-y-3">
              {c4iCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{capability}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Request C4i Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">System Engineering Services</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Custom Integration</h4>
                  <p className="text-teal-100 text-sm">Tailored system architecture and integration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">AI Development</h4>
                  <p className="text-teal-100 text-sm">Custom AI models and algorithms</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Security Implementation</h4>
                  <p className="text-teal-100 text-sm">Military-grade security protocols</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-teal-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
              Discuss Engineering Requirements
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">OEM Integration & Manufacturing</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Complete OEM services from component manufacturing to system integration. 
              We partner with defense contractors and system integrators to deliver mission-critical solutions.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore OEM Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;