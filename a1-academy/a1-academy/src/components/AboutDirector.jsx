import React from 'react';
import { Award } from 'lucide-react';
import { IMAGES } from '../config/images';

const AboutDirector = () => {
  return (
    <div id="director" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Director Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-yellow-100 rounded-2xl transform rotate-2"></div>
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform -rotate-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={IMAGES.director} 
                alt="Aviral Namdeo - Director" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wide mb-2">
              <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
              Meet The Mentor
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Aviral Namdeo
              <span className="block text-xl text-gray-500 font-medium mt-1">Founder & Director</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                "Aviral Sir strongly believes that a true educationist is the one who promotes and nurtures open-mindedness, curiosity, values, and the love of learning... To create the best students, and ultimately, the best citizens."
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 flex gap-4">
              <Award className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-blue-900 text-lg">22+ Years of Experience</h4>
                <p className="text-sm text-blue-700">One of the most eminent educationists of our times, guiding students towards success since 2000.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDirector;
