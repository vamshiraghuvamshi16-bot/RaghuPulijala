import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiscussionSection {
  title: string;
  questions: string[];
}

const sections: DiscussionSection[] = [
  {
    title: "Shopping Habits",
    questions: [
      "How often do you visit local grocery stores?",
      "What times do you usually shop?",
      "Do you plan your purchases in advance?",
      "How do you keep track of needed items?"
    ]
  },
  {
    title: "Product Selection",
    questions: [
      "What types of products do you regularly buy?",
      "How do you choose between different brands?",
      "Are there specific local brands you prefer?",
      "How important is price in your decision?"
    ]
  },
  {
    title: "Store Experience",
    questions: [
      "What do you like about shopping at local stores?",
      "What frustrates you about the current shopping experience?",
      "How long do you typically spend in the store?",
      "Do you compare prices across different stores?"
    ]
  },
  {
    title: "Digital Comfort",
    questions: [
      "Do you use any shopping apps currently?",
      "Would you be comfortable ordering groceries online?",
      "How do you prefer to pay for purchases?",
      "What concerns do you have about online ordering?"
    ]
  },
  {
    title: "Delivery Preferences",
    questions: [
      "Would you use home delivery for groceries?",
      "What delivery times would work best for you?",
      "How quickly would you expect delivery?",
      "Would you pay extra for delivery?"
    ]
  }
];

function Section({ title, questions }: DiscussionSection) {
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

export default function EndUserDiscussion() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/project/prabha-kirana-store"
            className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Project
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">End-User Discussion Guide</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive set of questions designed to understand customer shopping habits, 
          preferences, and pain points in local grocery shopping.
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