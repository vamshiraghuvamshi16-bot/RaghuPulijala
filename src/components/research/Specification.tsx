import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div 
      className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]" 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const pictographs = [
  {
    icon: "🎯",
    title: "User-Centric Design",
    description: "Focused on delivering intuitive and engaging user experiences"
  },
  {
    icon: "🌐",
    title: "Immersive Web",
    description: "Bridging the gap between traditional web and VR experiences"
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Fast-loading, smooth interactions for optimal engagement"
  },
  {
    icon: "🔄",
    title: "Interactive Elements",
    description: "Dynamic components that respond to user actions"
  }
];

const workflowSteps = [
  {
    icon: "🎨",
    title: "Research & Analysis",
    description: "Understanding user needs and market landscape",
    tasks: [
      "Competitor analysis",
      "User interviews",
      "Market research",
      "Trend analysis"
    ]
  },
  {
    icon: "📝",
    title: "Planning & Strategy",
    description: "Defining project scope and approach",
    tasks: [
      "Feature prioritization",
      "Technical requirements",
      "Timeline planning",
      "Resource allocation"
    ]
  },
  {
    icon: "💡",
    title: "Design & Development",
    description: "Creating and implementing solutions",
    tasks: [
      "UI/UX design",
      "Prototyping",
      "Development",
      "Testing"
    ]
  }
];

export default function Specification() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Project Specification</h1>

        <AnimatedCard>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Definition</h2>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-8">
              This VR landing page functions as a gateway that combines modern web design with immersive virtual reality elements. It aims to attract, inform, and engage users by offering interactive previews, clear navigation, and compelling calls to action, serving both casual visitors and VR enthusiasts alike.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pictographs.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#F5F5F7] p-6 rounded-xl text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-[#1C1C1E] mb-2">{item.title}</h3>
                  <p className="text-[#3A3A3C] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Problem Statement</h2>
            <p className="text-lg text-[#3A3A3C] leading-relaxed mb-6">
              Traditional landing pages lack the ability to convey the experiential and interactive nature of virtual reality, leading to poor engagement and missed conversions. Users expect to feel the immersive aspect of VR immediately, but many sites rely on outdated, flat designs that fail to spark curiosity or convey the technology's full potential. The goal is to develop a landing page that bridges this gap, offering users an exciting and intuitive introduction to VR.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">Key Challenges:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F5F5F7] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#007AFF] mb-3">Content Presentation</h4>
                  <p className="text-[#3A3A3C]">
                    Overcoming the challenge of presenting 3D VR content in a 2D web format without losing 
                    interactivity and immersion.
                  </p>
                </div>
                <div className="bg-[#F5F5F7] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#34C759] mb-3">Navigation</h4>
                  <p className="text-[#3A3A3C]">
                    Simplifying navigation so users of varying technical skills can intuitively explore VR 
                    demos and information.
                  </p>
                </div>
                <div className="bg-[#F5F5F7] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#FF9500] mb-3">Performance</h4>
                  <p className="text-[#3A3A3C]">
                    Creating a fast-loading, visually appealing page that works seamlessly across devices, 
                    including desktops, tablets, and smartphones.
                  </p>
                </div>
                <div className="bg-[#F5F5F7] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#FF3B30] mb-3">Trust Building</h4>
                  <p className="text-[#3A3A3C]">
                    Building trust and excitement around the VR brand or product by incorporating interactive 
                    previews, engaging visuals, and clear calls to action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Design Workflow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-[#F5F5F7] p-6 rounded-xl opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <span className="text-4xl mb-4 block">{step.icon}</span>
                  <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{step.title}</h3>
                  <p className="text-[#3A3A3C] mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                        <span className="text-[#3A3A3C]">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}