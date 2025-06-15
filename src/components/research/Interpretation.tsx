import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Interpretation() {
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

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Problem Analysis</h1>
          
          <div className="space-y-8 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <div>
              <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">🔹 Problem Statement</h2>
              <p className="text-lg text-[#3A3A3C] leading-relaxed">
                Local kirana stores face challenges in offering the convenience and transparency 
                of modern online shopping platforms, leading to reduced competitiveness and low 
                digital adoption.
              </p>
            </div>

            <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] animation-delay-200">
              <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">🔹 Problem Definition</h2>
              <p className="text-lg text-[#3A3A3C] leading-relaxed">
                While customers prefer the trust and familiarity of their neighborhood stores, 
                they also expect the speed, ease, and transparency offered by digital platforms. 
                Through interviews, surveys, and SWOT analysis, we found that store owners lack 
                the digital tools and UI/UX design needed to create user-friendly experiences. 
                The key is designing a system that preserves trust and community connection while 
                modernizing ordering, payment, and delivery workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}