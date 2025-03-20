
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 border border-cyberpunk-neon-blue rounded-full bg-cyberpunk-gray/30 text-cyberpunk-neon-blue text-sm font-cyber">
            LEGAL INFORMATION
          </div>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-white">
            Legal <span className="text-cyberpunk-neon-blue">Disclaimer</span>
          </h2>
          <div className="flex justify-center mb-6">
            <AlertTriangle size={32} className="text-yellow-500" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto cyber-card border-cyberpunk-neon-blue">
          <h3 className="text-xl font-cyber mb-4 text-white">Terms of Use</h3>
          <p className="text-gray-300 mb-6">
            Person Information Finder GPT (the "Tool") is provided by AI Web Tools LLC for informational purposes only. By using this Tool, you agree to these terms and conditions.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Data Sources & Limitations</h3>
          <p className="text-gray-300 mb-6">
            The Tool accesses only publicly available information. We make no representations or warranties about the accuracy, completeness, or reliability of the information provided. Users should independently verify any critical information before making decisions based on it.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Acceptable Use</h3>
          <p className="text-gray-300 mb-6">
            Users agree to use the Tool only for legitimate, lawful purposes. Prohibited uses include but are not limited to: harassment, stalking, identity theft, fraud, discrimination, or any activity that violates the rights of others or applicable laws.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Privacy & Data Protection</h3>
          <p className="text-gray-300 mb-6">
            The Tool is designed to comply with applicable privacy laws. Users are responsible for ensuring their use of any information obtained complies with relevant data protection and privacy laws, including GDPR, CCPA, and other applicable regulations.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Limitation of Liability</h3>
          <p className="text-gray-300 mb-6">
            To the maximum extent permitted by law, AI Web Tools LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the Tool or any information obtained through it.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Third-Party Services</h3>
          <p className="text-gray-300 mb-6">
            The Tool may provide information gathered from third-party services. We are not responsible for the content, privacy practices, or availability of third-party websites or services.
          </p>
          
          <h3 className="text-xl font-cyber mb-4 text-white">Governing Law</h3>
          <p className="text-gray-300 mb-6">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AI Web Tools LLC operates, without regard to its conflict of law provisions.
          </p>
          
          <div className="cyber-divider"></div>
          
          <p className="text-gray-400 text-sm mt-6">
            By using Person Information Finder GPT, you acknowledge that you have read, understood, and agree to be bound by these terms. AI Web Tools LLC reserves the right to modify these terms at any time without notice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
