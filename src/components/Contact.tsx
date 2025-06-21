import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: '',
    requirements: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: '',
        requirements: 'general'
      });
    }, 3000);
  };

  const teamMembers = [
    {
      name: "Ashish Kumar",
      role: "Technical Director",
      email: "ashish.kumar@winghover.com",
      phone: "+91 98765 43210",
      specialization: "UAV Systems & Defense Tech"
    },
    {
      name: "Ragini Jha",
      role: "Operations Director",
      email: "ragini.jha@winghover.com",
      phone: "+91 98765 43211",
      specialization: "Project Management & Delivery"
    },
    {
      name: "Alok Mishra",
      role: "Finance Director",
      email: "alok.mishra@winghover.com",
      phone: "+91 98765 43212",
      specialization: "Financial Planning & Contracts"
    },
    {
      name: "Shyla Mahendra",
      role: "Compliance Director",
      email: "shyla.mahendra@winghover.com",
      phone: "+91 98765 43213",
      specialization: "Regulatory & Quality Assurance"
    },
    {
      name: "Prosenjit Bose",
      role: "HR Director",
      email: "prosenjit.bose@winghover.com",
      phone: "+91 98765 43214",
      specialization: "Human Resources & Talent"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 80 4567 8900", "+91 80 4567 8901"],
      subtitle: "24/7 Support Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@winghover.com", "support@winghover.com"],
      subtitle: "Response within 4 hours"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["WINGHOVER Private Limited", "Electronic City, Bangalore - 560100"],
      subtitle: "Karnataka, India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      subtitle: "IST (UTC +5:30)"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Contact Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your UAV technology or digital transformation requirements? Our experts are here to help you find the perfect solution.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{member.name}</h4>
                    <p className="text-sm text-teal-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-3">{member.specialization}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <a href={`mailto:${member.email}`} className="text-sm text-slate-600 hover:text-teal-600">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <a href={`tel:${member.phone}`} className="text-sm text-slate-600 hover:text-teal-600">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-slate-800">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 mb-1">{detail}</p>
                      ))}
                      <p className="text-sm text-slate-500">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-teal-600 to-teal-700 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-white">Emergency Support</h3>
              <p className="text-teal-100 text-sm mb-3">
                For urgent technical support or mission-critical assistance
              </p>
              <p className="text-white font-semibold">+91 98765 43200</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2 text-slate-700">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium mb-2 text-slate-700">
                        Requirements Type
                      </label>
                      <select
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="uav">UAV Solutions</option>
                        <option value="defense">Defense Systems</option>
                        <option value="agriculture">Agricultural Drones</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="custom">Custom Development</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your requirements, timeline, and any specific questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-green-600">Message Sent Successfully!</h3>
                  <p className="text-slate-600">
                    Thank you for your inquiry. Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;