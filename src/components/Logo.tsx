
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`font-cyber flex flex-col items-center ${className}`}>
      <div className="relative">
        <h1 className="text-2xl md:text-3xl font-bold text-cyberpunk-neon-blue animate-neon-text">
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
