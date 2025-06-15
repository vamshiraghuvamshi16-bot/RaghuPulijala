import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionSection {
  title: string;
  questions: string[];
}

const sections: QuestionSection[] = [
  {
    title: "Introduction Questions",
    questions: [
      "How familiar are you with virtual reality technology?",
      "Have you visited any VR websites before? If yes, which ones?",
      "What was your experience like on those VR websites?"
    ]
  },
  {
    title: "User Behavior & Needs",
    questions: [
      "What motivates you to visit a VR website?",
      "What information or features do you usually look for on a VR landing page?",
      "How do you prefer to explore VR content online? (Videos, animations, 3D previews, text, etc.)",
      "What device do you usually use to browse VR websites? (Mobile, desktop, VR headset, etc.)"
    ]
  },
  {
    title: "Pain Points & Challenges",
    questions: [
      "What frustrations or difficulties have you faced when using VR websites?",
      "Have you ever abandoned a VR website because it was confusing or slow? Can you explain why?",
      "What parts of a VR website landing page confuse you the most?",
      "How easy or hard do you find understanding VR demos or product features on websites?"
    ]
  },
  {
    title: "Design & Interaction Preferences",
    questions: [
      "Do you find animations helpful or distracting when learning about VR products?",
      "What kind of animations or interactive elements do you like to see on tech landing pages?",
      "Would you prefer a simple, clean design or a more dynamic, animated experience on a VR landing page? Why?",
      "How important is quick access to demos or trials on the landing page for you?"
    ]
  },
  {
    title: "Expectations & Suggestions",
    questions: [
      "What would make a VR website landing page more engaging or easier for you to use?",
      "Are there any features or content you think are missing from VR websites you've used?",
      "How do you usually decide to explore a VR product further after visiting a landing page?",
      "What would encourage you to spend more time on a VR website landing page?",
      "If you could change one thing about VR landing pages you've seen, what would it be?"
    ]
  },
  {
    title: "Closing",
    questions: [
      "Is there anything else you would like to share about your experience with VR websites or VR technology in general?"
    ]
  }
];

function Section({ title, questions }: QuestionSection) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">{title}</h3>
      <ul className="space-y-4">
        {questions.map((question, index) => (
          <li 
            key={index} 
            className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
            <span className="text-[#3A3A3C]">{question}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DesignDiscoveryTalks() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/project/virtual-reality-experience"
            className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Project
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Design Discovery Talks</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive interview guide to understand user experiences, preferences, and pain points 
          with VR websites and landing pages.
        </p>

        <div className="grid gap-6">
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