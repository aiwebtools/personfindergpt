
import React, { useState, useEffect } from 'react';
import Button from './Button';

const ConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('consentAccepted');
    
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-cyberpunk-darker/80 backdrop-blur-lg flex items-center justify-center z-[100] p-4">
      <div className="cyber-card border-cyberpunk-neon-purple max-w-lg w-full animate-fade-in">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-cyberpunk-neon-pink rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-cyberpunk-neon-blue rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-cyberpunk-neon-purple rounded-full"></div>
        </div>
        
        <h3 className="text-2xl font-cyber mb-4 text-white">Important Notice</h3>
        
        <p className="text-gray-300 mb-4">
          Person Information Finder GPT is designed to collect and provide publicly available information only. By continuing to use this service, you agree to:
        </p>
        
        <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-2">
          <li>Use the information for legitimate and lawful purposes only</li>
          <li>Not use the information for harassment, stalking, or any illegal activities</li>
          <li>Comply with all applicable privacy laws and regulations</li>
          <li>Accept that information accuracy may vary and should be verified</li>
          <li>Acknowledge the limitations and ethical considerations outlined in our terms</li>
        </ul>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleAccept}
            variant="default"
            size="lg"
            className="w-full"
          >
            I Understand and Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
