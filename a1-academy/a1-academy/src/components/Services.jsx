import React from 'react';
import { MonitorPlay, Video, CheckCircle, Users } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "High-Tech Digital Boards",
      description: "Experience learning like never before with our 4K digital classrooms and visual aids."
    },
    {
      icon: Video,
      title: "Recorded Backups",
      description: "Missed a class? No problem. Access high-quality recordings of every lecture on our app."
    },
    {
      icon: CheckCircle,
      title: "Biweekly Testing",
      description: "Regular assessment system designed to eliminate exam fear and track progress precisely."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "One-on-one doubt clearing sessions and small batch sizes for focused learning."
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wide">Why A1 Academy?</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Modern Education Meets <span className="text-blue-600">Traditional Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
