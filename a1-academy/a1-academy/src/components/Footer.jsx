import React from 'react';
import { Instagram, Share2 } from 'lucide-react';
import { IMAGES } from '../config/images';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description - Center on mobile */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 text-white justify-center md:justify-start">
              <img src={IMAGES.logo} alt="A1 Academy" className="h-12 w-auto" />
              <span className="font-bold text-3xl tracking-tight">A1 Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6 mx-auto md:mx-0">
              Empowering students of class 9th and 10th with superior quality education in Maths, Science, and Social Science since 2000.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/a1academy_jbp/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@a1academy575" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/a1academyjbp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links and Subjects - Side by side on mobile */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div>

                <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#home" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Home</a></li>
                  <li><a href="#director" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Director</a></li>
                  <li><a href="#services" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Facilities</a></li>
                  <li><a href="#results" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Toppers</a></li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col items-center md:items-start">
              <div>

                <h4 className="text-white font-bold text-lg mb-6">Subjects</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Mathematics</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Science</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Social Science</li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'A1 Academy',
                        text: 'Check out A1 Academy for 9th & 10th Coaching!',
                        url: window.location.href,
                      })
                    }
                  }}
                  className="flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 cursor-pointer font-medium"
                >
                  <Share2 size={16} /> Share this website
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} A1 Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed by <a href="https://portfolio-sahilmandre.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Sahil Mandre</a> with ❤️ for A1 Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
