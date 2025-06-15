import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
  title: string;
  emoji: string;
  questions: string[];
}

const sections: Section[] = [
  {
    title: "Background & Context",
    emoji: "🎯",
    questions: [
      "Can you tell me a bit about yourself and your journey in UX/UI design?",
      "How did you first hear about Silent Hustlers UX/UI Design Hub?",
      "What are your current goals as a UX/UI designer?"
    ]
  },
  {
    title: "Learning & Skill Development",
    emoji: "🧠",
    questions: [
      "What challenges do you face while learning or improving your design skills?",
      "What kind of design content or resources do you typically look for (e.g., case studies, UI kits, templates, feedback sessions)?",
      "How do you currently practice and showcase your UX/UI skills?"
    ]
  },
  {
    title: "Tools & Workflow",
    emoji: "🛠️",
    questions: [
      "What tools do you commonly use in your design workflow (e.g., Figma, Adobe XD, Notion)?",
      "Do you feel confident using them, or would you like guided support/resources?"
    ]
  },
  {
    title: "Community & Support",
    emoji: "🤝",
    questions: [
      "Do you currently engage with any UX/UI communities or forums? What's missing in those communities?",
      "Would you find value in mentorship, live feedback, or collaborative projects in this hub?"
    ]
  },
  {
    title: "Goals & Motivation",
    emoji: "📈",
    questions: [
      "What does success look like for you in your UX/UI journey?",
      "Are you preparing for internships, jobs, freelance projects, or building a portfolio?",
      "What kind of recognition or support would keep you motivated?"
    ]
  },
  {
    title: "Pain Points",
    emoji: "⚠️",
    questions: [
      "What's the biggest frustration or barrier in your UX/UI growth right now?",
      "Have you ever felt lost or overwhelmed in the design field? Can you tell me more?"
    ]
  },
  {
    title: "Expectations from the Hub",
    emoji: "🧭",
    questions: [
      "What features or experiences would you expect from a UX/UI design hub like Silent Hustlers?",
      "Would you prefer structured programs (courses, challenges) or open learning (resources, community)?",
      "Would you be interested in live events like portfolio reviews, UX jams, or design sprints?"
    ]
  },
  {
    title: "Final Insights",
    emoji: "💡",
    questions: [
      "If you had one wish for your design journey, what would it be?",
      "Anything else you'd like to share that could help us improve the Silent Hustlers hub?"
    ]
  }
];

function Section({ title, emoji, questions }: Section) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4 flex items-center">
        <span className="mr-2">{emoji}</span>
        {title}
      </h3>
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

export default function StakeholderQuestioning() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Stakeholder Questioning Guide</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive set of questions designed to understand the needs, challenges, 
          and aspirations of UX/UI designers in their journey.
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