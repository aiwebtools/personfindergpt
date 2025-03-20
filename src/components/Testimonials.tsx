
import React from 'react';
import { Star, User } from 'lucide-react';
import { FloatingParticles } from './3DElements';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating, delay }) => {
  return (
    <div 
      className="cyber-card border-cyberpunk-neon-blue hover:border-cyberpunk-neon-purple transition-all duration-500 h-full flex flex-col"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-cyberpunk-gray flex items-center justify-center border border-cyberpunk-neon-blue">
            <User size={20} className="text-cyberpunk-neon-blue" />
          </div>
          <div className="ml-3">
            <h4 className="text-white font-cyber">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-cyberpunk-neon-yellow fill-cyberpunk-neon-yellow" : "text-gray-600"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-300 italic flex-grow">{content}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Private Investigator",
      content: "This tool has revolutionized my workflow. I can gather preliminary information on subjects in minutes instead of hours. The depth of data it provides from public sources is remarkable.",
      rating: 5
    },
    {
      name: "Jamie Williams",
      role: "Genealogy Researcher",
      content: "Person Information Finder GPT has been invaluable for my family history research. It's helped me connect with distant relatives and piece together our family tree with impressive accuracy.",
      rating: 5
    },
    {
      name: "Taylor Chen",
      role: "HR Professional",
      content: "I use this tool for preliminary background research on candidates. The ethical approach to data gathering and comprehensive reports make my job much easier while staying compliant.",
      rating: 4
    },
    {
      name: "Morgan Smith",
      role: "Journalist",
      content: "The speed and accuracy of this tool are unmatched. It helps me gather background information on subjects for my articles while saving countless research hours.",
      rating: 5
    },
    {
      name: "Casey Johnson",
      role: "Security Consultant",
      content: "This is the most powerful OSINT tool I've used. The ability to map connections between individuals and their digital footprint is extraordinary.",
      rating: 5
    },
    {
      name: "Jordan Reynolds",
      role: "Reconnection Specialist",
      content: "I help people find long-lost friends and family members. This tool has increased my success rate by over 70%. The global coverage is especially useful.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <FloatingParticles count={20} color="purple" className="opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-cyberpunk-neon-purple rounded-full bg-cyberpunk-gray/30 text-cyberpunk-neon-purple text-sm font-cyber">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-white">
            What Our Users <span className="text-cyberpunk-neon-purple">Are Saying</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professionals across various fields trust Person Information Finder GPT for their information gathering needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
