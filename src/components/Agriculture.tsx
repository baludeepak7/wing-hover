import React from 'react';
import { Leaf, Droplets, BarChart3, MapPin, Clock, Shield } from 'lucide-react';
import forestdrone from '../assets/drone_forest.jpg';

const Agriculture = () => {
  const agriFeatures = [
    {
      icon: Leaf,
      title: "Precision Crop Monitoring",
      description: "NDVI analysis and multispectral imaging for crop health assessment"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation Mapping",
      description: "Soil moisture detection and irrigation optimization recommendations"
    },
    {
      icon: BarChart3,
      title: "Yield Prediction Analytics",
      description: "AI-powered crop yield forecasting and harvest planning"
    },
    {
      icon: MapPin,
      title: "Terrain Mapping",
      description: "High-resolution field mapping and boundary surveying"
    }
  ];

  const krishi3Specs = [
    { label: "Coverage", value: "5 acres/flight", icon: MapPin },
    { label: "Flight Time", value: "25 minutes", icon: Clock },
    { label: "Payload", value: "10L tank", icon: Droplets },
    { label: "Certification", value: "DGCA Type", icon: Shield },
    { label: "Spray Width", value: "4 meters", icon: Leaf },
    { label: "Precision", value: "±10cm GPS", icon: BarChart3 }
  ];

  return (
    <section id="agriculture" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Smart Agriculture</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing farming with precision agriculture technology and intelligent crop management systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={forestdrone}
              alt="Krishi 3 Pro agricultural drone"
              className="w-full max-h-[400px] h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-green-600">Krishi 3 Pro Drone</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              DGCA certified agricultural drone designed for precision farming operations. 
              Advanced spraying system with GPS-guided navigation ensures optimal crop treatment with minimal waste.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {krishi3Specs.map((spec, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <spec.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-slate-500">{spec.label}</span>
                  </div>
                  <div className="text-lg font-bold text-slate-800">{spec.value}</div>
                </div>
              ))}
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Krishi 3 Pro Details
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {agriFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-green-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-800">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Agri-Intelligence Dashboard</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Real-time NDVI and crop health monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Precision terrain mapping and field analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Droplets className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Automated telemetry and spray pattern optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-slate-600">Comprehensive pilot training and certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 text-green-800">Complete Agriculture Package</h4>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex justify-between">
                  <span>Krishi 3 Pro Drone</span>
                  <span className="font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Intelligence Dashboard</span>
                  <span className="font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Pilot Training Program</span>
                  <span className="font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between">
                  <span>24/7 Technical Support</span>
                  <span className="font-semibold">✓ Included</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                Request Agriculture Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;