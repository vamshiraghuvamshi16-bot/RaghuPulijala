import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeelingSection {
  title: string;
  items: string[];
}

const sections: FeelingSection[] = [
  {
    title: "What They Say",
    items: [
      "I need learning that fits my busy, unpredictable schedule.",
      "I prefer content that's straight to the point—no fluff.",
      "I want projects that I can showcase to build my portfolio.",
      "A clean, distraction-free interface helps me focus."
    ]
  },
  {
    title: "What They Think",
    items: [
      "Will this platform help me get real skills that employers want?",
      "Am I progressing fast enough compared to others?",
      "How do I make my portfolio stand out in a crowded market?",
      "Is this platform keeping up with the latest UI/UX trends?"
    ]
  },
  {
    title: "What They Do",
    items: [
      "Learns independently, mostly at odd hours or in small chunks",
      "Builds portfolio projects step-by-step, often iterating on them",
      "Skims through resources quickly to find what's useful",
      "Limits social interactions, prefers quiet learning spaces"
    ]
  },
  {
    title: "How They Feel",
    items: [
      "Determined to improve but sometimes feels overwhelmed",
      "Motivated but worries about not being good enough",
      "Occasionally frustrated by too much information or noise",
      "Focused yet sometimes isolated or unsure about next steps"
    ]
  }
];

function Section({ title, items }: FeelingSection) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
            <span className="text-[#3A3A3C]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UserFeelings() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/project/silent-hustlers"
            className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Project
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">User Feelings Map</h1>
        <p className="text-[#3A3A3C] mb-8">
          Understanding the thoughts, feelings, actions, and words of our users to create 
          a more empathetic and effective design solution.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Section {...section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}