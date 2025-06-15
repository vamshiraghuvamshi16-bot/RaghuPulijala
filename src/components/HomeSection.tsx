import React from 'react';
import { ChevronDown } from 'lucide-react';
import PlaygroundScene from './PlaygroundScene';

export default function HomeSection() {
  const [text] = React.useState("CX Designer");
  const [displayText, setDisplayText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <PlaygroundScene />
      </div>
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1E] mb-6">
              Hey, I'm <span><span className="text-[#007AFF]">R</span>aghu <span className="text-[#007AFF]">V</span>amshi</span>
            </h1>
            <div className="h-8 mb-8">
              <span className="text-xl text-[#3A3A3C] inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-xl text-[#3A3A3C] mb-8">
              I design digital experiences that people love
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#005BB5] transition-colors duration-200"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}