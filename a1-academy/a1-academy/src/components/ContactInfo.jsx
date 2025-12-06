import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ContactInfo = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter your 10-digit phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
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
