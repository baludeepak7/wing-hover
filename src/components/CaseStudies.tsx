import React from 'react';
import { TrendingUp, Clock, MapPin, CheckCircle } from 'lucide-react';
import csforest from '../assets/cs_forest.png';
import csborder from '../assets/cs_border.png';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Operation Border Shield",
      location: "abc-xyz Border",
      duration: "18 months",
      droneModel: "WH-Guardian Elite",
      image: csborder,
      description: "Comprehensive border surveillance operation covering 500km of sensitive border area with 24/7 monitoring capabilities.",
      metrics: [
        { label: "Incidents Detected", value: "2,847", icon: TrendingUp },
        { label: "Response Time", value: "< 5 min", icon: Clock },
        { label: "Coverage Area", value: "500 km", icon: MapPin },
        { label: "Success Rate", value: "99.2%", icon: CheckCircle }
      ],
      outcomes: [
        "Reduced border infiltration attempts by 85%",
        "Improved response time for security threats",
        "Enhanced situational awareness for ground forces",
        "Significant cost savings compared to traditional methods"
      ]
    },
    {
      title: "Forest Guardian Initiative",
      location: "Western Ghats, Karnataka",
      duration: "24 months",
      droneModel: "WH-Tactical Pro",
      image: csforest,
      description: "Early fire detection and wildlife monitoring across 15,000 hectares of protected forest area using advanced thermal imaging.",
      metrics: [
        { label: "Fires Detected", value: "142", icon: TrendingUp },
        { label: "Detection Time", value: "< 2 min", icon: Clock },
        { label: "Area Covered", value: "15,000 ha", icon: MapPin },
        { label: "Prevention Rate", value: "94%", icon: CheckCircle }
      ],
      outcomes: [
        "Prevented major forest fires saving 12,000+ hectares",
        "Enhanced wildlife conservation efforts",
        "Reduced fire response time by 70%",
        "Created comprehensive forest health database"
      ]
    },
    {
      title: "Coastal Security Network",
      location: "Gujarat Coastline",
      duration: "12 months",
      droneModel: "WH-Guardian Elite",
      image: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Maritime surveillance operation monitoring 300km of coastline for illegal activities and security threats.",
      metrics: [
        { label: "Vessels Tracked", value: "8,945", icon: TrendingUp },
        { label: "Alert Response", value: "< 8 min", icon: Clock },
        { label: "Coastline Covered", value: "300 km", icon: MapPin },
        { label: "Interdiction Rate", value: "87%", icon: CheckCircle }
      ],
      outcomes: [
        "Intercepted 47 suspicious vessel activities",
        "Enhanced coastal guard coordination",
        "Improved maritime domain awareness",
        "Strengthened anti-smuggling operations"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Case Studies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-world deployments showcasing the effectiveness and impact of our drone solutions in critical operations
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-3 text-teal-600">{study.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{study.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </span>
                      <span className="bg-orange-500 px-3 py-1 rounded-full text-white text-xs">
                        {study.droneModel}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <metric.icon className="h-5 w-5 text-teal-600" />
                          <span className="text-xs text-slate-500">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-500">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Interested in a Custom Deployment?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Every operation is unique. Let us work with you to design and implement a drone solution that meets your specific mission requirements.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Your Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;