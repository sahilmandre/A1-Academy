import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { IMAGES } from '../config/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Director', href: '#director' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={IMAGES.logo} 
              alt="A1 Academy Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display='none';
                console.warn("Logo image failed to load. Ensure 'image_f6a565.png' is in the public folder.");
              }} 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-blue-900 leading-none">
                A1 Academy
              </span>
              <span className="text-xs font-semibold text-yellow-600 tracking-wider">
                EXPLORE THE BEST IN YOU
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-blue-900 hover:font-bold transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+917224963725" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
