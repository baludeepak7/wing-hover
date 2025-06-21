import React from 'react';
import { Camera, Shield, Zap, Clock, Gauge, Radio } from 'lucide-react';
import survereilance from '../assets/drone_surv.jpg';
import securityDrone from '../assets/dronesecurity.png';


const Products = () => {
  const products = [
    {
      name: "WH-Tactical Pro",
      category: "Tactical Surveillance",
      image: survereilance,
      specs: {
        "Flight Time": "8 hours",
        "Range": "100 km",
        "Payload": "15 kg",
        "Speed": "120 km/h",
        "Camera": "4K Thermal & RGB",
        "Altitude": "6,000m"
      },
      features: [
        "Advanced thermal imaging",
        "Real-time data transmission",
        "GPS/GLONASS navigation",
        "Weather resistant design"
      ]
    },
    {
      name: "WH-Guardian Elite",
      category: "Border Security",
      image: securityDrone,
      specs: {
        "Flight Time": "12 hours",
        "Range": "200 km",
        "Payload": "25 kg",
        "Speed": "150 km/h",
        "Camera": "8K Multi-spectrum",
        "Altitude": "8,000m"
      },
      features: [
        "Long-endurance capability",
        "Multi-sensor payload",
        "Encrypted communications",
        "Autonomous patrol modes"
      ]
    },
    {
      name: "WH-Recon Mini",
      category: "Reconnaissance",
      image: "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: {
        "Flight Time": "4 hours",
        "Range": "25 km",
        "Payload": "2 kg",
        "Speed": "80 km/h",
        "Camera": "4K Stabilized",
        "Altitude": "3,000m"
      },
      features: [
        "Compact and portable",
        "Silent operation",
        "Quick deployment",
        "AI-powered detection"
      ]
    }
  ];

  const getSpecIcon = (spec: string) => {
    switch (spec) {
      case 'Flight Time': return Clock;
      case 'Range': return Radio;
      case 'Speed': return Gauge;
      case 'Camera': return Camera;
      case 'Payload': return Shield;
      default: return Zap;
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Our Drone Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced unmanned aerial systems designed for defense, security, and surveillance applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">{product.name}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-orange-500">Specifications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specs).map(([spec, value]) => {
                      const Icon = getSpecIcon(spec);
                      return (
                        <div key={spec} className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">{spec}</div>
                            <div className="text-sm font-medium text-slate-700">{value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-orange-500">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Custom Solutions Available</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Need a specialized drone solution? Our engineering team can develop custom UAV systems tailored to your specific requirements and mission parameters.
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

export default Products;