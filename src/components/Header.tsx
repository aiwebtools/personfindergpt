
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            <a href="#faq" className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300">
              FAQ
            </a>
            <a href="#disclaimer" className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300">
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
            className="md:hidden text-cyberpunk-neon-blue hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-cyberpunk-darker/90 backdrop-blur-lg z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-20">
          <nav className="flex flex-col items-center space-y-6">
            <Button 
              href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" 
              variant="default" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Person Information Finder GPT
            </Button>
            <Button 
              href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
              variant="purple" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Property Data Finder GPT
            </Button>
            <a 
              href="#faq" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <Button 
              href="https://www.aiwebtools.ai" 
              variant="pink" 
              size="sm"
              className="w-full"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
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
