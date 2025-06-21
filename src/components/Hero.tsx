import React, { useEffect, useState } from 'react';
import { ArrowRight, Cloud, Shield, Cpu } from 'lucide-react';
import droneVideo from '../assets/drone.mp4';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={droneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5"></div>
        <div className="absolute inset-0 bg-slate-900/60 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-center text-white drop-shadow-lg animate-fade-in-up">
            Engineering India's 
            <span className="text-teal-400 block mt-2">UAV Future</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 drop-shadow-md mb-6 max-w-4xl mx-auto text-center leading-relaxed animate-fade-in-up delay-[200ms]">
            Backed by Digital Brilliance
          </p>

          <p className="text-base sm:text-lg text-gray-200 drop-shadow-md mb-12 max-w-3xl mx-auto text-center leading-relaxed animate-fade-in-up delay-[400ms]">
            From cloud-native modernization to battlefield-ready drones, WINGHOVER delivers end-to-end technology for tomorrow.
          </p>

          {/* Key Expertise Areas */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
              <Cloud className="h-8 w-8 text-teal-600" />
              <span className="text-lg font-semibold text-slate-700">Digital Transformation</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
              <Shield className="h-8 w-8 text-orange-500" />
              <span className="text-lg font-semibold text-slate-700">Defense UAVs</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
              <Cpu className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-slate-700">AI Systems</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => document.getElementById('uav-offerings')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 group shadow-lg"
            >
              <span>Explore UAVs</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;