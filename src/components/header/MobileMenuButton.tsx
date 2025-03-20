
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className="md:hidden text-cyberpunk-neon-blue bg-cyberpunk-darker p-2 rounded-md hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon-blue"
      onClick={onClick}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
