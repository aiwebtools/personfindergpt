
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`font-cyber flex flex-col items-center ${className}`}>
      <div className="relative">
        <h1 className={`${isMobile ? 'text-lg' : 'text-2xl md:text-3xl'} font-bold text-cyberpunk-neon-blue animate-neon-text ${isMobile ? 'max-w-[200px]' : 'max-w-[220px] md:max-w-none'}`}>
          {isMobile ? 'Person Info Finder GPT' : 'Person Information Finder GPT'}
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-neon-blue to-transparent"></div>
      </div>
      <p className="text-xs text-white/70 mt-1">
        Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="text-cyberpunk-neon-pink hover:underline transition-all" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>
      </p>
    </div>
  );
};

export default Logo;
