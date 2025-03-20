
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Person Information Finder GPT | Find Anyone, Anywhere";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark text-white">
      {/* Animated scan line effect */}
      <div className="scan-line"></div>
      
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
