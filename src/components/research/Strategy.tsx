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

export default function Strategy() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Strategy Development</h1>

        <AnimatedSection>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Brainstorming & Idea Generation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Use animated hero banner showing VR scenes transitioning smoothly",
                "Incorporate subtle micro-animations on buttons and icons for feedback",
                "Animate step-by-step VR experience explanation",
                "Add scrolling-triggered animations to reveal product features dynamically",
                "Include animated user testimonials or ratings to build trust",
                "Use animated background elements related to VR",
                "Introduce animated call-to-action buttons that draw attention",
                "Use smooth page transition animations for a modern feel"
              ].map((idea, index) => (
                <div 
                  key={index}
                  className="bg-[#F5F5F7] p-6 rounded-xl opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">{idea}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Organize & Categorize Ideas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Visual Engagement", items: ["Animated hero", "scrolling animations", "background"], priority: "High" },
                { name: "User Interaction", items: ["Animated buttons", "micro-interactions"], priority: "High" },
                { name: "Content Delivery", items: ["Animated 'How it works' section", "testimonials"], priority: "Medium" },
                { name: "Branding", items: ["Animations consistent with VR futuristic style"], priority: "High" }
              ].map((category, index) => (
                <div 
                  key={index}
                  className="bg-[#F5F5F7] p-6 rounded-xl opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-[#1C1C1E] mb-3">{category.name}</h3>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#007AFF] text-white rounded-full text-sm">
                      Priority: {category.priority}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                        <span className="text-[#3A3A3C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Refine & Develop Concepts</h2>
            <div className="space-y-4">
              {[
                "Created wireframes with focus on animation hotspots: hero area, info sections, and CTAs",
                "Designed animated SVG illustrations explaining VR experience steps",
                "Developed prototypes with scroll-triggered fade-ins and slide animations",
                "Planned use of CSS and lightweight animation libraries for smooth effects without performance loss"
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#34C759] rounded-full" />
                  <span className="text-[#3A3A3C]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Validate & Select Strategy</h2>
            <div className="space-y-4">
              {[
                "Tested animations with sample users; found increased interest and easier understanding",
                "Feedback indicated animations made the page feel modern and engaging without distractions",
                "Stakeholders liked the consistent futuristic style and clear content flow",
                "Final strategy: Focus on smooth, purposeful animations that guide and delight users while explaining VR features clearly"
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#FF9500] rounded-full" />
                  <span className="text-[#3A3A3C]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}