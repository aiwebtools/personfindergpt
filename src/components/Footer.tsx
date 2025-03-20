
import React from 'react';
import Button from './Button';
import Logo from './Logo';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-8 bg-cyberpunk-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              The ultimate AI-powered tool for finding detailed public information about any individual on Earth.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+14758008096" className="text-gray-300 hover:text-cyberpunk-neon-blue transition-colors flex items-center">
                <Phone size={16} className="mr-2" />
                (475) 800-8096
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover:text-cyberpunk-neon-blue transition-colors flex items-center">
                <Mail size={16} className="mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-cyber text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-cyber text-lg mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Person Information Finder GPT
                </a>
              </li>
              <li>
                <a href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Property Data Finder GPT
                </a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-cyber text-lg mb-4">Try It Now</h4>
            <Button 
              href="https://chatgpt.com/g/g-67dc2561e2448191a6a47117f9247d64-person-information-finder-gpt" 
              variant="default" 
              className="w-full mb-4"
              target="_blank"
            >
              Use Person Information Finder GPT
            </Button>
            
            <div className="relative overflow-hidden rounded-full mt-8">
              <Button 
                href="https://www.aiwebtools.ai" 
                variant="purple" 
                className="w-full rounded-full"
                target="_blank"
              >
                More AI Tools
              </Button>
            </div>
          </div>
        </div>
        
        <div className="cyber-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-cyberpunk-neon-blue transition-colors">
              AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-cyberpunk-neon-blue transition-colors">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="hover:text-cyberpunk-neon-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
