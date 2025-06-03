
import React from 'react';
import { Search, Database, ShieldCheck, UserCheck, Globe, BarChart } from 'lucide-react';
import { HologramCube } from './3DElements';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  colorClass?: string;
}> = ({ icon, title, description, delay, colorClass = "border-cyberpunk-neon-blue" }) => {
  return (
    <div 
      className={`cyber-card ${colorClass} group`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 text-cyberpunk-neon-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-cyber mb-3 text-white group-hover:text-cyberpunk-neon-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search size={32} />,
      title: "AI-Powered People Search",
      description: "Find detailed information about any individual using our advanced AI web tools that scan multiple public data sources with unprecedented accuracy.",
      colorClass: "border-cyberpunk-neon-blue"
    },
    {
      icon: <Database size={32} />,
      title: "Deep Data Mining AI Tools",
      description: "Access social media profiles, employment history, education background, public records and more with our comprehensive AI tools suite.",
      colorClass: "border-cyberpunk-neon-purple"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Ethical AI Web Tools",
      description: "All information is collected ethically from publicly available sources using responsible AI tools, respecting privacy laws and individual rights.",
      colorClass: "border-cyberpunk-neon-pink"
    },
    {
      icon: <UserCheck size={32} />,
      title: "AI Identity Verification",
      description: "Confirm identities and differentiate between individuals with similar names using our advanced AI tools for accurate results.",
      colorClass: "border-cyberpunk-neon-blue"
    },
    {
      icon: <Globe size={32} />,
      title: "Global AI Search Coverage",
      description: "Our AI web tools database covers individuals from across the globe, with particularly detailed information for those with digital footprints.",
      colorClass: "border-cyberpunk-neon-purple"
    },
    {
      icon: <BarChart size={32} />,
      title: "AI Data Analysis Tools",
      description: "Advanced analysis using cutting-edge AI tools to provide insights into the individual's online presence and public persona.",
      colorClass: "border-cyberpunk-neon-pink"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* 3D decorative elements */}
      <div className="absolute -left-16 top-1/4 opacity-50 hidden lg:block">
        <HologramCube size={100} color="purple" />
      </div>
      <div className="absolute -right-16 bottom-1/4 opacity-50 hidden lg:block">
        <HologramCube size={100} color="blue" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-cyberpunk-neon-blue rounded-full bg-cyberpunk-gray/30 text-cyberpunk-neon-blue text-sm font-cyber">
            PREMIUM AI WEB TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-white">
            Advanced <span className="text-cyberpunk-neon-blue">AI Tools</span> for Information Gathering
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered web tools suite scans and compiles public information from across the web, creating detailed profiles with unprecedented accuracy. The most trusted AI tools platform for professionals worldwide.
          </p>
        </div>
        
        {/* Image moved above HOW IT WORKS section */}
        <div className="max-w-4xl mx-auto p-6 cyber-card border-cyberpunk-neon-purple mb-16">
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://ideogram.ai/assets/image/lossless/response/gHXnMcOUT0mj-K7G752VAA" 
              alt="AI Web Tools - Person Information Finder GPT - Best AI Tools 2025" 
              className="w-full h-auto rounded-lg shadow-neon-purple object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 * index}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="cyber-divider"></div>
          <h3 className="text-2xl font-cyber mb-6 text-white">
            Experience <span className="text-cyberpunk-neon-pink">AI Web Tools</span> in Action
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of professionals using our AI tools for background checks, due diligence, and comprehensive people research. The #1 AI web tools platform trusted by investigators worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
