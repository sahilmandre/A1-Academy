import React from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../config/images';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.classroom} 
          alt="Classroom Background" 
          className="w-full h-full object-cover"
          onError={(e) => console.warn("Hero image failed to load")}
        />
        <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm tracking-wider uppercase border border-yellow-500/50 backdrop-blur-sm">
          <Star size={16} fill="currentColor" /> Est. Since 2000
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Transforming Potential into <br/>
          <span className="text-yellow-500">Academic Excellence</span>
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 font-light mb-10">
          Premier Coaching for <span className="font-bold text-white">Class 9th & 10th</span> in 
          Maths, Science & Social Science.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#admissions" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1">
            Enroll for 2025
          </a>
          <a href="#results" className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all">
            View Toppers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
