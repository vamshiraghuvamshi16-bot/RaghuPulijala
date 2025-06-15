import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF3B30'];

interface CompanyInfo {
  name: string;
  focus: string;
  connection: string;
}

const companies: CompanyInfo[] = [
  {
    name: "Epic Games (Unreal Engine)",
    focus: "Game dev + VR toolset",
    connection: "Widely used for immersive UI and VR environments"
  },
  {
    name: "Valve (Steam + SteamVR)",
    focus: "PC games + VR ecosystem",
    connection: "Offers VR UI templates for indie developers"
  },
  {
    name: "Unity",
    focus: "Cross-platform game engine",
    connection: "Common choice for indie VR/UX designers"
  },
  {
    name: "Superhot Team",
    focus: "Indie VR game studio",
    connection: "Known for innovative UI-less immersive play"
  },
  {
    name: "PlayStation (Sony)",
    focus: "Console + PSVR",
    connection: "UX guidelines for VR HUDs and control systems"
  },
  {
    name: "Rec Room / VRChat",
    focus: "Social VR games",
    connection: "Showcases how UI evolves in multiplayer, immersive spaces"
  }
];

const insights = [
  {
    icon: "🕹️",
    title: "Responsive interfaces are key to engagement",
    description: "Modern games require adaptive, intuitive interfaces that respond naturally to user interactions."
  },
  {
    icon: "🧩",
    title: "Intuitive onboarding, HUDs, and feedback loops improve retention",
    description: "Clear guidance and immediate feedback help players understand and master game mechanics."
  },
  {
    icon: "🎨",
    title: "Game menus, level navigation, inventory systems are increasingly UX-centered",
    description: "User experience design principles are becoming central to game interface design."
  },
  {
    icon: "🤿",
    title: "In VR: spatial UI, eye-tracking, and gesture design are transforming gameplay",
    description: "Virtual reality introduces new paradigms for user interaction and interface design."
  }
];

const featureComparisonData = [
  { feature: 'Immersive UI', Epic: 90, Unity: 85, Valve: 80 },
  { feature: 'Developer Tools', Epic: 95, Unity: 90, Valve: 85 },
  { feature: 'VR Support', Epic: 85, Unity: 80, Valve: 90 },
  { feature: 'Documentation', Epic: 80, Unity: 85, Valve: 75 },
  { feature: 'Community', Epic: 85, Unity: 90, Valve: 80 }
];

const marketShareData = [
  { quarter: 'Q1 2024', Epic: 35, Unity: 30, Valve: 25 },
  { quarter: 'Q2 2024', Epic: 38, Unity: 28, Valve: 24 },
  { quarter: 'Q3 2024', Epic: 40, Unity: 27, Valve: 23 },
  { quarter: 'Q4 2024', Epic: 42, Unity: 26, Valve: 22 }
];

function CompanyCard({ company }: { company: CompanyInfo }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{company.name}</h3>
      <div className="space-y-2">
        <p className="text-[#3A3A3C]">
          <span className="font-semibold">Focus:</span> {company.focus}
        </p>
        <p className="text-[#3A3A3C]">
          <span className="font-semibold">UX/UI Connection:</span> {company.connection}
        </p>
      </div>
    </div>
  );
}

function InsightCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{title}</h3>
      <p className="text-[#3A3A3C]">{description}</p>
    </div>
  );
}

export default function IndustryAnalysis() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Industry Analysis</h1>
        <p className="text-[#3A3A3C] mb-8">
          Game success today relies not just on storytelling or mechanics—but also user experience 
          and interaction design.
        </p>

        <div className="space-y-12">
          {/* Feature Comparison */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Platform Feature Comparison</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={featureComparisonData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="feature" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Epic" dataKey="Epic" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.2} />
                  <Radar name="Unity" dataKey="Unity" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.2} />
                  <Radar name="Valve" dataKey="Valve" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.2} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Market Share Trends */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Market Share Trends</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketShareData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Epic" name="Epic Games" fill={COLORS[0]} />
                  <Bar dataKey="Unity" name="Unity" fill={COLORS[1]} />
                  <Bar dataKey="Valve" name="Valve" fill={COLORS[2]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Key Industry Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {insights.map((insight, index) => (
                <InsightCard key={index} {...insight} />
              ))}
            </div>
          </section>

          {/* Companies Analysis */}
          <section>
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Relevant Gaming Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <CompanyCard key={index} company={company} />
              ))}
            </div>
          </section>

          {/* Industry Trends */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Industry Trends</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#007AFF] mb-4">Rising Importance of UX</h3>
                <p className="text-[#3A3A3C] mb-4">
                  The gaming industry is increasingly recognizing UX design as a critical factor in game success. 
                  Companies are investing more in user research, prototyping, and iterative design processes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#34C759] mb-4">VR Innovation</h3>
                <p className="text-[#3A3A3C] mb-4">
                  Virtual Reality is pushing the boundaries of traditional UI/UX design, requiring new 
                  approaches to spatial design, gesture interaction, and immersive feedback systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#FF9500] mb-4">Cross-Platform Integration</h3>
                <p className="text-[#3A3A3C]">
                  With games becoming more platform-agnostic, there's a growing need for adaptive UI 
                  systems that work seamlessly across different devices and input methods.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}