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
    `text-slate-600 hover:text-blue-700 transition-colors font-medium focus:outline-none focus:ring-0 ${
      activeSection === id ? 'underline underline-offset-4 decoration-2 text-blue-700' : ''
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={ShieldPng} alt="OptiValue Tek logo" width={50} height={50} /> 
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">OPTIVALUE</span>
              <span className="text-xl font-bold text-blue-600">TEK</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navButtonClass(item.id)}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Contact Team
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-700 underline underline-offset-4'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
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