import React from 'react';
import { Shield, Zap, Weight, Settings } from 'lucide-react';

const Mobility = () => {
  const protectionGear = [
    {
      category: "Body Armor Systems",
      items: [
        "BR1-BR5 Ballistic Protection",
        "MOLLE Compatible Vests",
        "Quick-Release Mechanisms",
        "Modular Plate Carriers"
      ]
    },
    {
      category: "Tactical Equipment",
      items: [
        "Evacuation Kits",
        "Load-Bearing Gear",
        "Combat Harness Systems",
        "Field Medical Packs"
      ]
    }
  ];

  const motorSpecs = [
    {
      model: "WH-17.5K",
      power: "17.5kW",
      cooling: "Air-cooled",
      application: "Light UAV",
      torque: "45 Nm",
      weight: "2.8kg"
    },
    {
      model: "WH-35K",
      power: "35kW",
      cooling: "Liquid-cooled",
      application: "Medium UAV",
      torque: "95 Nm",
      weight: "5.2kg"
    },
    {
      model: "WH-50K",
      power: "50kW",
      cooling: "Hybrid-cooled",
      application: "Heavy UAV",
      torque: "130 Nm",
      weight: "7.8kg"
    }
  ];

  return (
    <section id="mobility" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Mobility & Protection</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced tactical gear and high-performance UAV propulsion systems for mission-critical operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Protection Gear */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-slate-800">Tactical Protection</h3>
            </div>
            
            {protectionGear.map((category, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-orange-500">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-slate-800 mb-2">Protection Levels</h4>
              <div className="grid grid-cols-5 gap-2">
                {['BR1', 'BR2', 'BR3', 'BR4', 'BR5'].map((level, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* UAV Motors */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-slate-800">High-Torque UAV Motors</h3>
            </div>
            
            <div className="space-y-4">
              {motorSpecs.map((motor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-teal-600">{motor.model}</h4>
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">
                      {motor.application}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Power:</span>
                      <div className="font-semibold">{motor.power}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Torque:</span>
                      <div className="font-semibold">{motor.torque}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Weight:</span>
                      <div className="font-semibold">{motor.weight}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    Cooling: {motor.cooling}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-slate-800 mb-2">Motor Features</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center space-x-2">
                  <Settings className="h-4 w-4 text-orange-500" />
                  <span className="text-slate-600">Rugged military-grade construction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Weight className="h-4 w-4 text-orange-500" />
                  <span className="text-slate-600">Optimized power-to-weight ratio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span className="text-slate-600">Advanced thermal management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Complete Integration Services</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
            From tactical gear customization to UAV motor integration, we provide end-to-end engineering and manufacturing support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Protection Gear Catalog
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Motor Integration Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobility;