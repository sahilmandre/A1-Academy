import { Star, ChevronRight, Trophy } from 'lucide-react';
import ThreeDScene from './ThreeDScene';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-blue-900">
      {/* 3D Background Container */}
      <div className="absolute inset-0 z-0">
        <ThreeDScene />
      </div>

      {/* Overlays for Text Readability */}
      <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply z-1 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-transparent to-blue-900/50 z-1 pointer-events-none"></div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs tracking-widest uppercase border border-amber-500/30 backdrop-blur-md shadow-lg animate-fade-in-up">
          <Star size={12} className="fill-amber-300" /> Est. Since 2000
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight drop-shadow-2xl animate-fade-in-up delay-100">
          Transforming Potential into <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 animate-pulse-slow">
            Academic Excellence
          </span>
        </h1>

        <p className="mt-3 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-blue-100 font-light mb-8 leading-relaxed animate-fade-in-up delay-200">
          Premier Coaching for <span className="font-bold text-white">Class 9th & 10th</span> in Maths, Science & Social Science.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#admissions"
            className="group px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 text-base font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Enroll for 2025
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="px-6 py-3 bg-white/5 border border-white/20 text-white text-base font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
          >
            View Toppers
            <Trophy className="w-5 h-5" />
          </a>
        </div>

        {/* Floating Stats at Bottom */}
        <div className="mt-12 flex justify-center gap-8 md:gap-12 opacity-60 animate-fade-in-up delay-500">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">500+</div>
            <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wider">Students</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">100%</div>
            <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wider">Results</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white">25+</div>
            <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wider">Years</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10 opacity-50">
        <span className="text-blue-200 text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 bg-linear-to-b from-blue-200 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
