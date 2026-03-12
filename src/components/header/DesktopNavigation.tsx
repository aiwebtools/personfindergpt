
import React from 'react';
import Button from '../Button';

interface DesktopNavigationProps {
  onNavigation: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onNavigation }) => {
  return (
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
        onClick={(e) => onNavigation(e, '#faq')}
      >
        FAQ
      </a>
      <a 
        href="#disclaimer" 
        className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-300"
        onClick={(e) => onNavigation(e, '#disclaimer')}
      >
        Disclaimer
      </a>
      <Button 
        href="https://aiwebtools.lovable.app/?via=aiwebtools" 
        variant="pink" 
        size="sm"
        target="_blank"
      >
        More AI Tools
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
