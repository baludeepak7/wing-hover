import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ShieldPng from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = ['about', 'uav-offerings', 'defense-systems', 'agriculture', 'mobility', 'intelligence', 'contact'];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(id);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'UAV Solutions', id: 'uav-offerings' },
    { name: 'Defense Systems', id: 'defense-systems' },
    { name: 'Agriculture', id: 'agriculture' },
    { name: 'Intelligence', id: 'intelligence' },
  ];

  const navButtonClass = (id: string) =>
    `text-slate-600 hover:text-teal-600 transition-colors font-medium focus:outline-none focus:ring-0 whitespace-nowrap ${
      activeSection === id ? 'text-teal-600 border-b-2 border-teal-600' : ''
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0 mr-8">
            <div className="relative">
              <img src={ShieldPng} alt="WINGHOVER logo" className="w-10 h-10 lg:w-12 lg:h-12" /> 
            </div>
            <div className="flex items-center">
              <span className="text-xl lg:text-2xl font-bold text-slate-800">WING</span>
              <span className="text-xl lg:text-2xl font-bold text-teal-600">HOVER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navButtonClass(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Contact Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg border border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-colors mt-2"
              >
                Contact Team
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;