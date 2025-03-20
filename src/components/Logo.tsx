
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
        <h1 className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-cyberpunk-neon-blue animate-neon-text truncate max-w-[220px] md:max-w-none`}>
          Person Information Finder GPT
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-neon-blue to-transparent"></div>
      </div>
      <p className="text-xs text-white/70 mt-1">
        Presented by <a href="https://www.aiwebtools.ai" className="text-cyberpunk-neon-pink hover:underline transition-all">AiWebTools.Ai</a>
      </p>
    </div>
  );
};

export default Logo;
