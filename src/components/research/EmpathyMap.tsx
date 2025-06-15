import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const empathyMapData = {
  says: [
    "VR makes me dizzy sometimes",
    "I wish the controls were more intuitive",
    "The graphics are amazing but navigation is confusing",
    "I love how immersive it feels",
    "It's hard to use for more than 30 minutes",
    "The setup process is complicated"
  ],
  thinks: [
    "Will this be worth my time?",
    "Am I doing this right?",
    "This could revolutionize how I work",
    "I hope I don't look silly while using this",
    "Will I get motion sickness?",
    "Is this safe for my eyes?"
  ],
  does: [
    "Spends only 3-5 minutes in VR initially",
    "Takes frequent breaks during sessions",
    "Adjusts headset frequently for comfort",
    "Uses simple gestures and basic controls",
    "Explores environment cautiously",
    "Shares experience with friends"
  ],
  feels: [
    "Excited about new possibilities",
    "Anxious about technical complexity",
    "Overwhelmed by sensory input",
    "Curious about features",
    "Frustrated with learning curve",
    "Amazed by immersive experience"
  ],
  goals: [
    "Master VR controls naturally",
    "Use VR for productive work",
    "Experience immersive content",
    "Connect with others in VR",
    "Learn new skills through VR",
    "Stay comfortable during long sessions"
  ],
  frustrations: [
    "Complex setup procedures",
    "Unintuitive navigation",
    "Motion sickness and discomfort",
    "Limited session duration",
    "Steep learning curve",
    "Poor user guidance"
  ]
};

function EmpathySection({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className={`text-xl font-semibold mb-4 ${color}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-2 h-2 mt-2 mr-2 rounded-full ${color.replace('text-', 'bg-')}`} />
            <span className="text-[#3A3A3C]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EmpathyMap() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">User Empathy Map</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive analysis of user behaviors, attitudes, and emotions when interacting with VR experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EmpathySection 
            title="💬 Says"
            items={empathyMapData.says}
            color="text-[#007AFF]"
          />
          <EmpathySection 
            title="🤔 Thinks"
            items={empathyMapData.thinks}
            color="text-[#34C759]"
          />
          <EmpathySection 
            title="🎯 Does"
            items={empathyMapData.does}
            color="text-[#FF9500]"
          />
          <EmpathySection 
            title="💭 Feels"
            items={empathyMapData.feels}
            color="text-[#5856D6]"
          />
          <EmpathySection 
            title="🎯 Goals"
            items={empathyMapData.goals}
            color="text-[#FF2D55]"
          />
          <EmpathySection 
            title="⚠️ Pain Points"
            items={empathyMapData.frustrations}
            color="text-[#FF3B30]"
          />
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">Key Insights</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Users are excited about VR's potential but struggle with technical barriers
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Physical comfort and session duration are major concerns
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Users need better onboarding and intuitive controls
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                There's a strong desire to use VR for productive purposes
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}