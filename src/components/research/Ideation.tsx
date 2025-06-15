import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PainPoint {
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    title: "Complex Setup Procedures",
    description: "Streamlined onboarding with guided tutorials and automated configuration settings to reduce friction during initial setup."
  },
  {
    title: "Unintuitive Navigation",
    description: "Introduced a spatial navigation system with visual anchors and consistent UI patterns to improve discoverability and reduce cognitive load."
  },
  {
    title: "Motion Sickness and Discomfort",
    description: "Designed a \"Comfort Mode\" with customizable motion settings, reduced camera shake, and slower transitions to support user comfort."
  },
  {
    title: "Limited Session Duration",
    description: "Added session-aware prompts and lightweight interaction modes to extend usability without causing fatigue."
  },
  {
    title: "Steep Learning Curve",
    description: "Implemented contextual tooltips and a progressive learning flow, enabling users to master complex features step by step."
  },
  {
    title: "Poor User Guidance",
    description: "Created an interactive, voice-assisted help system that adapts to user behavior and offers timely suggestions and reminders."
  }
];

function PainPointCard({ title, description }: PainPoint) {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-3 relative z-10 group-hover:text-[#007AFF] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#3A3A3C] relative z-10 group-hover:text-[#1C1C1E] transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

export default function Ideation() {
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

        <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">💡 Ideation Phase: Addressing Real User Pain Points</h1>
          <p className="text-[#3A3A3C] mb-8">
            During the ideation phase, we translated user frustrations into design opportunities. 
            Grounded in empathy and research, our brainstorming focused on solving the following core challenges:
          </p>
        </div>

        <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] animation-delay-100">
          <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">⚠️ Identified Pain Points & Design Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <PainPointCard {...point} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}