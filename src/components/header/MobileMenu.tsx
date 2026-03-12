
import React from 'react';
import { X } from 'lucide-react';
import Button from '../Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigation: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigation }) => {
  return (
    <div 
      className={`md:hidden fixed inset-0 bg-cyberpunk-darker backdrop-blur-lg z-40 transition-all duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Close button at top right corner for better mobile usability */}
      <button 
        className="absolute top-6 right-6 text-cyberpunk-neon-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon-blue rounded-md p-1"
        onClick={onClose}
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
            onClick={onClose}
          >
            Use Person Information Finder GPT
          </Button>
          <Button 
            href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
            variant="purple" 
            size="sm"
            className="w-full"
            target="_blank"
            onClick={onClose}
          >
            Try Property Data Finder GPT
          </Button>
          <a 
            href="#faq" 
            className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg touch-manipulation py-2 px-4 w-full text-center"
            onClick={(e) => onNavigation(e, '#faq')}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 text-lg touch-manipulation py-2 px-4 w-full text-center"
            onClick={(e) => onNavigation(e, '#disclaimer')}
          >
            Disclaimer
          </a>
          <Button 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            variant="pink" 
            size="sm"
            className="w-full"
            target="_blank"
            onClick={onClose}
          >
            More AI Tools
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
