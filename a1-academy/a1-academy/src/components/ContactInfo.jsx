import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div id="contact" className="bg-white pb-24 pt-24 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="text-gray-500 mt-2">Visit our campus or give us a call</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="text-red-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              105, Nav Adarsh Colony, MR-4 Rd,<br/>
              Behind Ambition Dadarya Classes,<br/>
              Jabalpur, MP 482002
            </p>
            <a href="https://goo.gl/maps/aEswBtgCmGzCeZbG9" target="_blank" rel="noreferrer" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Get Directions &rarr;
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-green-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-1">Mobile: +91 7224963725</p>
            <p className="text-gray-600 text-sm">Office: 0761-4084225</p>
            <a href="tel:7224963725" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Call Now &rarr;
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-yellow-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">
              cometoa1academy@gmail.com
            </p>
            <p className="text-gray-400 text-xs mt-2">We reply within 24 hours</p>
            <a href="mailto:cometoa1academy@gmail.com" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Send Email &rarr;
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg h-96 w-full relative">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.627702677937!2d79.9333!3d23.1467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzQ4LjEiTiA3OcKwNTYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="A1 Academy Location"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
