import React from 'react';
import { Clock, Gauge, Weight, Camera, Zap, Target } from 'lucide-react';
import survereilance from '../assets/drone_surv.jpg';
import securityDrone from '../assets/dronesecurity.png';

const UAVOfferings = () => {
  const uavProducts = [
    {
      name: "Tethered Surveillance Drone",
      category: "Persistent Overwatch",
      image: survereilance,
      specs: {
        "Flight Time": "12+ hours",
        "Altitude": "150m tethered",
        "Power": "Ground-supplied",
        "Payload": "Multi-sensor",
        "Coverage": "360° surveillance",
        "Data": "Real-time HD"
      },
      features: [
        "Continuous power supply",
        "Uninterrupted surveillance",
        "Weather-resistant design",
        "Secure data transmission"
      ]
    },
    {
      name: "VTOL Heavy-Lift UAV",
      category: "Tactical Transport",
      image: securityDrone,
      specs: {
        "Payload": "200kg capacity",
        "Range": "500km radius",
        "Flight Time": "8 hours",
        "Speed": "180 km/h",
        "VTOL": "Vertical takeoff",
        "Navigation": "GPS/INS hybrid"
      },
      features: [
        "Heavy payload capability",
        "Vertical takeoff/landing",
        "Long-range operations",
        "All-weather performance"
      ]
    },
    {
      name: "Kamikaze Interceptor",
      category: "AI-Guided Defense",
      image: "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: {
        "Speed": "300+ km/h",
        "Range": "50km strike",
        "Guidance": "AI target lock",
        "Warhead": "Precision payload",
        "Launch": "Rapid deployment",
        "Accuracy": "< 1m CEP"
      },
      features: [
        "AI-powered targeting",
        "High-speed interception",
        "Precision strike capability",
        "Swarm coordination ready"
      ]
    },
    {
      name: "Vimanetra ISR UAV",
      category: "Intelligence Surveillance",
      image: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: {
        "Endurance": "20+ hours",
        "Altitude": "8,000m service",
        "Sensors": "Multi-spectral",
        "Range": "300km radius",
        "Data Link": "Encrypted SATCOM",
        "Stealth": "Low RCS design"
      },
      features: [
        "Extended endurance",
        "High-altitude operations",
        "Multi-sensor payload",
        "Stealth characteristics"
      ]
    },
    {
      name: "RUDRA Tactical Delivery",
      category: "Logistics Support",
      image: "https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: {
        "Payload": "5kg delivery",
        "Range": "100km radius",
        "Speed": "120 km/h",
        "Navigation": "Precision GPS",
        "Drop System": "Automated release",
        "Recovery": "Parachute/VTOL"
      },
      features: [
        "Precision delivery system",
        "Automated drop mechanism",
        "GPS-guided navigation",
        "Rapid deployment capability"
      ]
    },
    {
      name: "AKZ Aerostat System",
      category: "Persistent Surveillance",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: {
        "Flight Time": "72+ hours",
        "Altitude": "1,000m station",
        "Payload": "200kg sensors",
        "Coverage": "500km radius",
        "Stability": "All-weather",
        "Power": "Ground tethered"
      },
      features: [
        "Ultra-long endurance",
        "High-altitude platform",
        "Massive sensor payload",
        "Weather-independent ops"
      ]
    }
  ];

  const getSpecIcon = (spec: string) => {
    switch (spec) {
      case 'Flight Time': case 'Endurance': return Clock;
      case 'Speed': return Gauge;
      case 'Payload': return Weight;
      case 'Sensors': case 'Camera': case 'Coverage': return Camera;
      case 'Power': case 'Guidance': return Zap;
      default: return Target;
    }
  };

  return (
    <section id="uav-offerings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Our UAV Offerings</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mission-critical unmanned systems engineered for defense, surveillance, and tactical operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uavProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-600">{product.name}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-orange-500 uppercase tracking-wide">Specifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(product.specs).map(([spec, value]) => {
                      const Icon = getSpecIcon(spec);
                      return (
                        <div key={spec} className="flex items-center space-x-2">
                          <Icon className="h-3 w-3 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">{spec}</div>
                            <div className="text-xs font-medium text-slate-700">{value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-orange-500 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-600 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02]">
                  Request Technical Brief
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Custom UAV Development</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Need specialized UAV capabilities? Our engineering team develops custom solutions tailored to your mission requirements and operational parameters.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Custom Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAVOfferings;