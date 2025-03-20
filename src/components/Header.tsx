
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle navigation to section and close mobile menu
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        closeMobileMenu();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links, just close the menu
      closeMobileMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-cyberpunk-darker/80 backdrop-blur-lg shadow-lg' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" 
              variant="default" 
              size="sm"
              target="_blank"
            >
              Use Person Information Finder GPT
            </Button>
            <Button 
              href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
              variant="purple" 
              size="sm"
              target="_blank"
            >
              Try Property Data Finder GPT
            </Button>
            <a 
              href="#faq" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300"
              onClick={(e) => handleNavigation(e, '#faq')}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300"
              onClick={(e) => handleNavigation(e, '#disclaimer')}
            >
              Disclaimer
            </a>
            <Button 
              href="https://www.aiwebtools.ai" 
              variant="pink" 
              size="sm"
              target="_blank"
            >
              More AI Tools
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyberpunk-neon-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon-blue rounded-md p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu with improved accessibility and touch interactions */}
      <div 
        className={`md:hidden fixed inset-0 bg-cyberpunk-darker/95 backdrop-blur-lg z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button at top right corner for better mobile usability */}
        <button 
          className="absolute top-6 right-6 text-cyberpunk-neon-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon-blue rounded-md p-1"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <X size={28} />
        </button>
        
        <div className="container mx-auto px-6 py-20">
          <nav className="flex flex-col items-center space-y-6">
            <Button 
              href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" 
              variant="default" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={closeMobileMenu}
            >
              Use Person Information Finder GPT
            </Button>
            <Button 
              href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
              variant="purple" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={closeMobileMenu}
            >
              Try Property Data Finder GPT
            </Button>
            <a 
              href="#faq" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg touch-manipulation py-2 px-4 w-full text-center"
              onClick={(e) => handleNavigation(e, '#faq')}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg touch-manipulation py-2 px-4 w-full text-center"
              onClick={(e) => handleNavigation(e, '#disclaimer')}
            >
              Disclaimer
            </a>
            <Button 
              href="https://www.aiwebtools.ai" 
              variant="pink" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={closeMobileMenu}
            >
              More AI Tools
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
