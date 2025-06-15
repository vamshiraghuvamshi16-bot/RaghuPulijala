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

export default function SilentHustlersDefine() {
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

        <AnimatedSection>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">❗ Problem Statement</h2>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-6">
              Many emerging UX/UI designers—especially students, self-taught creatives, and career switchers—struggle to find supportive spaces to grow. Traditional platforms like Dribbble and Behance often emphasize perfection, popularity, or aesthetics over learning, feedback, and real-world growth.
            </p>
            <p className="text-lg text-[#3A3A3C] mb-4">These "silent hustlers" work tirelessly behind the scenes, but face:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                <span className="text-[#3A3A3C]">Lack of visibility despite strong potential</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                <span className="text-[#3A3A3C]">Limited access to mentorship, job opportunities, and real feedback</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                <span className="text-[#3A3A3C]">Few places to collaborate, network, or share work-in-progress without judgment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                <span className="text-[#3A3A3C]">A sense of isolation in their learning and career journey</span>
              </li>
            </ul>
            <p className="text-lg text-[#3A3A3C]">
              There's a clear gap for a community-first platform that not only showcases design work but also nurtures the people behind it.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">🌱 Where Quiet Designers Grow Loud Results</h2>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-6">
              Silent Hustlers UX/UI Design is not just another platform—it's a movement for those who work behind the scenes, crafting meaningful designs without the noise.
            </p>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-6">
              While platforms like Dribbble and Behance focus on showcasing polished portfolios and popularity, Silent Hustlers focuses on your growth, your journey, and your potential.
            </p>
            <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">Here's what makes us different:</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '400ms' }}>
                <span className="text-2xl mr-3">✅</span>
                <span className="text-[#3A3A3C]">Upload real, raw, or finished projects—progress is welcome</span>
              </li>
              <li className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '600ms' }}>
                <span className="text-2xl mr-3">🤝</span>
                <span className="text-[#3A3A3C]">Connect through e-meetings with mentors, peers, or recruiters</span>
              </li>
              <li className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '800ms' }}>
                <span className="text-2xl mr-3">💼</span>
                <span className="text-[#3A3A3C]">Discover job and internship opportunities made for emerging talent</span>
              </li>
              <li className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '1000ms' }}>
                <span className="text-2xl mr-3">🧠</span>
                <span className="text-[#3A3A3C]">Learn and collaborate, not just display</span>
              </li>
            </ul>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-4">
              Silent Hustlers is for the ones who hustle quietly but dream loudly—where your work is seen, your effort is valued, and your journey is supported.
            </p>
            <p className="text-lg text-[#3A3A3C] leading-relaxed font-semibold">
              This is your space to grow, connect, and thrive—no hype needed.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}