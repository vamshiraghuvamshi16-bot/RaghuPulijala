import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const personas = {
  'virtual-reality-experience': {
    name: 'Sashanka',
    age: 28,
    occupation: 'Software Developer',
    goals: [
      'Find an immersive VR experience for coding visualization',
      'Learn new technologies through interactive experiences',
      'Connect with other developers in virtual spaces'
    ],
    painPoints: [
      'Traditional learning methods are too passive',
      'Difficulty visualizing complex code structures',
      'Limited interaction in online learning platforms'
    ],
    quote: "I need a VR experience that makes learning and coding more interactive and engaging."
  },
  'silent-hustlers': {
    name: 'Lohitha',
    age: 25,
    occupation: 'UI/UX Designer',
    goals: [
      'Build a strong design portfolio',
      'Connect with other designers for collaboration',
      'Find meaningful freelance opportunities'
    ],
    painPoints: [
      'Oversaturated design platforms',
      'Difficulty standing out as a new designer',
      'Lack of meaningful feedback on work'
    ],
    quote: "I want a platform where I can grow as a designer and find real opportunities."
  },
  'prabha-kirana-store': {
    name: 'Anuradha',
    age: 45,
    occupation: 'Homemaker',
    goals: [
      'Order groceries conveniently from local stores',
      'Save time on daily shopping',
      'Get quality products at reasonable prices'
    ],
    painPoints: [
      'Time-consuming visits to physical stores',
      'Difficulty comparing prices across stores',
      'Concerns about product quality in online ordering'
    ],
    quote: "I need a simple way to order groceries from stores I trust."
  }
};

export default function UserPersonas() {
  const { projectId } = useParams();
  const persona = projectId ? personas[projectId as keyof typeof personas] : null;

  if (!persona) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to={`/project/${projectId}`}
            className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Project
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">User Persona</h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2">{persona.name}</h2>
            <p className="text-[#3A3A3C]">{persona.age} years old • {persona.occupation}</p>
          </div>

          <blockquote className="text-xl italic text-[#007AFF] mb-8">
            "{persona.quote}"
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1C1C1E] mb-4">Goals</h3>
              <ul className="space-y-3">
                {persona.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#34C759] rounded-full" />
                    <span className="text-[#3A3A3C]">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1C1C1E] mb-4">Pain Points</h3>
              <ul className="space-y-3">
                {persona.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}