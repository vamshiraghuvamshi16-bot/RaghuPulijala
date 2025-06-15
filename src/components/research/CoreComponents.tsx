import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const coreComponents = [
  {
    icon: "🔁",
    title: "Passive Opportunity Feed",
    subtitle: "Auto-Matched",
    description: "Learners get personalized gig/internship/job suggestions based on their activity (skills learned, projects submitted)",
    features: [
      "No active browsing required",
      "Silent notification: \"👀 3 design internships fit your profile this week.\""
    ]
  },
  {
    icon: "🤝",
    title: "1:1 Quiet Mentor Booking",
    description: "Instead of public Q&A or forums, users can book silent 1:1 mentor sessions",
    features: [
      "Review my portfolio",
      "Prepare for a UX interview",
      "How to price freelance work",
      "Only audio or private messaging; camera optional"
    ]
  },
  {
    icon: "🧠",
    title: "Project Collaboration Board",
    subtitle: "Invite-Only",
    description: "A private space where learners can request or join a small team for a UX project",
    features: [
      "Looking for a UI designer for a VR project — quiet collab only",
      "Need 1 reviewer for a case study draft"
    ]
  },
  {
    icon: "🎯",
    title: "Opportunity Vault",
    description: "Curated list of opportunities for designers",
    features: [
      "Real job openings (remote-friendly, junior-friendly)",
      "Design competitions or hackathons",
      "Paid freelance gigs (ethical and portfolio-worthy)",
      "Search filters: Remote / Internship / Entry-level / UX writing"
    ]
  }
];

function ComponentCard({ component }: { component: typeof coreComponents[0] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{component.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1E]">{component.title}</h3>
          {component.subtitle && (
            <span className="text-sm text-[#007AFF]">{component.subtitle}</span>
          )}
        </div>
      </div>
      
      <p className="text-[#3A3A3C] mb-4">{component.description}</p>
      
      <ul className="space-y-2">
        {component.features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
            <span className="text-[#3A3A3C]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CoreComponents() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Core Components</h1>
        <p className="text-[#3A3A3C] mb-8">
          Essential features designed to create a focused, distraction-free environment 
          for designers to learn, collaborate, and grow.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {coreComponents.map((component, index) => (
            <div 
              key={index}
              className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ComponentCard component={component} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}