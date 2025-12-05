import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDirector from './components/AboutDirector';
import Services from './components/Services';
import AdmissionSection from './components/AdmissionSection';
import ResultsGallery from './components/ResultsGallery';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white selection:bg-yellow-200 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <Hero />
      <AboutDirector />
      <Services />
      <AdmissionSection />
      <ResultsGallery />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
