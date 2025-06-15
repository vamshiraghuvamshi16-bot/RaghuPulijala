import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div 
      className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]" 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Define() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Define Phase</h1>

        <AnimatedSection>
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">❗ Problem Statement</h2>
            <p className="text-[#3A3A3C] mb-8">
              "Users find VR experiences difficult to start and navigate due to complex setups, unintuitive interfaces, and a lack of real-time guidance, leading to short session durations and user drop-off."
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">🎯 User Needs Identified</h2>
            <ul className="space-y-3 mb-8">
              {[
                "Easy and fast onboarding",
                "Simple, intuitive navigation",
                "Clear instructions and system feedback",
                "Physically comfortable experience (minimal motion sickness)",
                "Encouragement through guided support"
              ].map((need, index) => (
                <li 
                  key={index} 
                  className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                  <span className="text-[#3A3A3C]">{need}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">🔍 Design Opportunity</h2>
            <p className="text-[#3A3A3C] mb-8">
              "How might we design a VR experience that simplifies user onboarding, provides real-time support, and ensures both comfort and confidence throughout the session?"
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">🧩 Design Objectives</h2>
            <ul className="space-y-3">
              {[
                "Reduce friction during the setup process",
                "Design intuitive controls and spatial navigation",
                "Minimize motion-related discomfort",
                "Integrate real-time guidance (voice, visual cues)",
                "Support users through gradual learning without overwhelming them"
              ].map((objective, index) => (
                <li 
                  key={index} 
                  className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100 + 700}ms` }}
                >
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                  <span className="text-[#3A3A3C]">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}