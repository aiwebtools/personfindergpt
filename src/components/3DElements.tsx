
import React, { useEffect, useRef } from 'react';

interface HologramCubeProps {
  className?: string;
  size?: number;
  rotation?: 'slow' | 'medium' | 'fast';
  color?: 'blue' | 'purple' | 'pink';
}

export const HologramCube: React.FC<HologramCubeProps> = ({ 
  className,
  size = 100, 
  rotation = 'medium',
  color = 'blue' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let angle = 0;
    let requestId: number;
    
    const rotationSpeed = {
      slow: 0.003,
      medium: 0.007,
      fast: 0.01
    };
    
    const animate = () => {
      angle += rotationSpeed[rotation];
      
      if (container) {
        container.style.transform = `rotateX(${angle}rad) rotateY(${angle * 0.8}rad)`;
      }
      
      requestId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [rotation]);

  const getColorClass = () => {
    switch (color) {
      case 'purple': return 'border-cyberpunk-neon-purple';
      case 'pink': return 'border-cyberpunk-neon-pink';
      default: return 'border-cyberpunk-neon-blue';
    }
  };
  
  const colorClass = getColorClass();
  
  return (
    <div className={`preserve-3d ${className || ''}`}>
      <div 
        ref={containerRef}
        className="preserve-3d relative" 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateZ(${size / 2}px)`,
          }}
        ></div>
        
        {/* Back face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
          }}
        ></div>
        
        {/* Left face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateX(-${size / 2}px) rotateY(-90deg)`,
            width: `${size}px`
          }}
        ></div>
        
        {/* Right face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateX(${size / 2}px) rotateY(90deg)`,
            width: `${size}px`
          }}
        ></div>
        
        {/* Top face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateY(-${size / 2}px) rotateX(90deg)`,
            height: `${size}px`
          }}
        ></div>
        
        {/* Bottom face */}
        <div 
          className={`absolute w-full h-full ${colorClass} border opacity-40 backdrop-blur-sm bg-opacity-10`}
          style={{ 
            transform: `translateY(${size / 2}px) rotateX(-90deg)`,
            height: `${size}px`
          }}
        ></div>
      </div>
    </div>
  );
};

interface FloatingParticlesProps {
  className?: string;
  count?: number;
  color?: 'blue' | 'purple' | 'pink' | 'mixed';
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  className,
  count = 20,
  color = 'mixed'
}) => {
  const getRandomColor = () => {
    if (color === 'mixed') {
      const colors = ['blue', 'purple', 'pink'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    return color;
  };
  
  const particles = Array.from({ length: count }).map((_, index) => {
    const size = Math.random() * 4 + 1;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const particleColor = getRandomColor();
    
    let colorClass = 'bg-cyberpunk-neon-blue';
    if (particleColor === 'purple') colorClass = 'bg-cyberpunk-neon-purple';
    if (particleColor === 'pink') colorClass = 'bg-cyberpunk-neon-pink';
    
    return (
      <div 
        key={index}
        className={`absolute rounded-full ${colorClass}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${xPos}%`,
          top: `${yPos}%`,
          opacity: Math.random() * 0.5 + 0.3,
          boxShadow: `0 0 ${size * 2}px ${colorClass.replace('bg-', '')}`,
          animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        }}
      ></div>
    );
  });
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}>
      {particles}
    </div>
  );
};

interface DataStreamProps {
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  density?: 'low' | 'medium' | 'high'; 
}

export const DataStream: React.FC<DataStreamProps> = ({
  className,
  speed = 'medium',
  density = 'medium'
}) => {
  const getRandomChar = () => {
    const chars = '01';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  const getSpeedClass = () => {
    switch (speed) {
      case 'slow': return 'animate-[datafall_8s_linear_infinite]';
      case 'fast': return 'animate-[datafall_3s_linear_infinite]';
      default: return 'animate-[datafall_5s_linear_infinite]';
    }
  };
  
  const getDensityCount = () => {
    switch (density) {
      case 'low': return 8;
      case 'high': return 24;
      default: return 16;
    }
  };
  
  const streamCount = getDensityCount();
  const speedClass = getSpeedClass();
  
  const streams = Array.from({ length: streamCount }).map((_, index) => {
    const xPos = (index / streamCount) * 100;
    const delay = Math.random() * 5;
    const streamLength = Math.floor(Math.random() * 10) + 10;
    
    const chars = Array.from({ length: streamLength }).map((_, charIndex) => {
      const opacity = 1 - (charIndex / streamLength);
      const isHighlighted = charIndex === 0;
      
      return (
        <div 
          key={charIndex}
          className={`text-xs md:text-sm absolute ${isHighlighted ? 'text-white' : 'text-cyberpunk-neon-blue'}`}
          style={{
            top: `${charIndex * 20}px`,
            opacity: opacity,
          }}
        >
          {getRandomChar()}
        </div>
      );
    });
    
    return (
      <div
        key={index}
        className={`absolute ${speedClass}`}
        style={{
          left: `${xPos}%`,
          animationDelay: `${delay}s`,
        }}
      >
        {chars}
      </div>
    );
  });
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}>
      {streams}
      <style>
        {`
          @keyframes datafall {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}
      </style>
    </div>
  );
};
