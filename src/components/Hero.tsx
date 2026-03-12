
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { HologramCube, FloatingParticles } from './3DElements';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Glitch effect timing for the heading
    const heading = headingRef.current;
    if (!heading) return;
    
    let timeout: ReturnType<typeof setTimeout>;
    
    const triggerGlitch = () => {
      heading.classList.add('glitch');
      
      // Remove glitch class after animation completes
      timeout = setTimeout(() => {
        heading.classList.remove('glitch');
        
        // Schedule next glitch after random interval
        timeout = setTimeout(triggerGlitch, Math.random() * 5000 + 3000);
      }, 300);
    };
    
    // Start glitch effect after initial delay
    timeout = setTimeout(triggerGlitch, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background particles */}
      <FloatingParticles count={40} />
      
      {/* Interactive 3D cube */}
      <div className="absolute top-1/4 right-[5%] hidden lg:block">
        <HologramCube size={160} rotation="slow" />
      </div>
      
      <div className="absolute bottom-1/4 left-[10%] hidden lg:block">
        <HologramCube size={120} rotation="medium" color="purple" />
      </div>
      
      {/* Animated scan line effect */}
      <div className="scan-line"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1 border border-cyberpunk-neon-pink rounded-full bg-cyberpunk-gray/30 text-cyberpunk-neon-pink text-sm font-cyber animate-fade-in">
            #1 AI WEB TOOLS PLATFORM
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold mb-6 text-white"
          >
            <span className="block">AI Web Tools - Find Anyone, Anywhere</span> 
            <span className="text-cyberpunk-neon-blue animate-neon-text">Person Information Finder GPT</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-reveal-up" style={{ animationDelay: '0.3s' }}>
            The most advanced AI tools for comprehensive people search. Access detailed public information, social media profiles, employment history, and location data about any individual on Earth with our cutting-edge AI web tools.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" 
              variant="default" 
              size="lg"
              target="_blank"
            >
              Try AI Person Finder Now
            </Button>
            <Button 
              href="#features" 
              variant="purple" 
              size="lg"
            >
              Explore AI Tools
            </Button>
          </div>
          
          <div className="mt-12 p-4 bg-cyberpunk-gray/30 border border-cyberpunk-neon-blue/30 rounded-lg backdrop-blur-sm max-w-3xl mx-auto animate-reveal-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-sm text-gray-400 italic">
              "The ultimate AI web tools suite for professional investigators, HR professionals, and researchers worldwide."
            </p>
          </div>
          
          {/* SEO Keywords Section */}
          <div className="mt-8 text-xs text-gray-500 max-w-4xl mx-auto">
            <p className="opacity-60">
              AI Tools | AI Web Tools | Person Finder | Background Check AI | People Search Engine | AI Investigation Tools | Social Media Finder | Public Records Search | AI Detective Tools | Professional AI Tools 2025
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyberpunk-neon-blue/50"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyberpunk-neon-purple/50"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyberpunk-neon-purple/50"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyberpunk-neon-blue/50"></div>
    </section>
  );
};

export default Hero;
