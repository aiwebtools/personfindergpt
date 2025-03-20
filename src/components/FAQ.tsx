
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-cyberpunk-gray rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:border-cyberpunk-neon-blue">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-cyberpunk-gray/30 hover:bg-cyberpunk-gray/50 transition-colors duration-300"
        onClick={toggleOpen}
      >
        <h3 className="text-white font-cyber text-lg">{question}</h3>
        <div className="text-cyberpunk-neon-blue">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-cyberpunk-darker/50 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What information can Person Information Finder GPT access?",
      answer: "Our AI can access and compile publicly available information from various sources including social media profiles, professional networks, public records, news articles, and other online databases. All information gathered is already in the public domain."
    },
    {
      question: "Is it legal to use this tool to find information about people?",
      answer: "Yes, when used ethically and in accordance with applicable laws. The tool only accesses publicly available information that individuals have willingly shared online or that exists in public records. However, users must ensure they're using the information for legitimate purposes and not for harassment, stalking, or other illegal activities."
    },
    {
      question: "How accurate is the information provided?",
      answer: "The tool provides information based on publicly available data, which may vary in accuracy and recency. While we strive to deliver the most accurate results possible, we recommend verifying critical information through multiple sources before making important decisions based on the findings."
    },
    {
      question: "Can I use this tool to find anyone in the world?",
      answer: "The tool's effectiveness depends on the individual's digital footprint and public presence. It works best for people with an established online presence or those who appear in public records. Results may be limited for individuals with minimal online activity or those in regions with limited digital infrastructure."
    },
    {
      question: "Are there privacy concerns when using this tool?",
      answer: "We take privacy seriously and only access information that is already publicly available. The tool is designed to comply with privacy regulations such as GDPR and CCPA. We do not hack, breach security measures, or access private information. Users should respect privacy laws and use the information responsibly."
    },
    {
      question: "What are some legitimate uses for Person Information Finder GPT?",
      answer: "Legitimate uses include reconnecting with old friends or family members, conducting background research for professional purposes, genealogical research, verifying identities for business transactions, journalistic research, and academic studies on public figures. Always ensure your use aligns with ethical guidelines and legal requirements."
    }
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,0,255,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 border border-cyberpunk-neon-pink rounded-full bg-cyberpunk-gray/30 text-cyberpunk-neon-pink text-sm font-cyber">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 text-white">
            Frequently Asked <span className="text-cyberpunk-neon-pink">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the Person Information Finder GPT tool.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
