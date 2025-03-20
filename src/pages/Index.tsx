
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import ConsentPopup from '../components/ConsentPopup';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Update document title
    document.title = "Person Information Finder GPT | Find Anyone, Anywhere";
    
    // Mark page as loaded for animations
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`min-h-screen flex flex-col bg-cyberpunk-dark text-white ${isPageLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Animated scan line effect - disable on mobile for performance */}
      {!isMobile && <div className="scan-line"></div>}
      
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
