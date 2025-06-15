import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const competitors = [
  {
    name: 'Meta Quest',
    description: 'By Meta',
    strengths: ['Immersive visuals', 'Mobile responsive', 'Strong brand'],
    weaknesses: ['Hidden CTA', 'Cluttered layout', 'Poor accessibility']
  },
  {
    name: 'HTC Vive',
    description: 'Premium VR Experience',
    strengths: ['Good visual hierarchy', 'Moderate CTA visibility', 'Mobile responsive'],
    weaknesses: ['Complex navigation', 'Poor accessibility', 'Slow loading']
  },
  {
    name: 'Oculus',
    description: 'By Meta',
    strengths: ['Immersive visuals', 'Mobile responsive', 'Rich content'],
    weaknesses: ['Not prominent CTA', 'Confusing hierarchy', 'Poor accessibility']
  }
];

const featureComparisonData = [
  { feature: 'User Interface', MetaQuest: 30, HTCVive: 45, Oculus: 90 },
  { feature: 'Visual Appeal', MetaQuest: 40, HTCVive: 60, Oculus: 85 },
  { feature: 'Navigation', MetaQuest: 70, HTCVive: 50, Oculus: 80 },
  { feature: 'Performance', MetaQuest: 20, HTCVive: 40, Oculus: 95 },
  { feature: 'Accessibility', MetaQuest: 60, HTCVive: 55, Oculus: 85 }
];

const marketShareData = [
  { quarter: 'Q1 2024', MetaQuest: 45, HTCVive: 40, Oculus: 15 },
  { quarter: 'Q2 2024', MetaQuest: 42, HTCVive: 38, Oculus: 20 },
  { quarter: 'Q3 2024', MetaQuest: 40, HTCVive: 35, Oculus: 25 },
  { quarter: 'Q4 2024', MetaQuest: 38, HTCVive: 32, Oculus: 30 }
];

const CompetitorCard = ({ competitor }: { competitor: typeof competitors[0] }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{competitor.name}</h3>
    <p className="text-[#3A3A3C] mb-4">{competitor.description}</p>
    
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-[#007AFF] mb-2">Strengths</h4>
        <ul className="list-disc list-inside space-y-1">
          {competitor.strengths.map((strength, index) => (
            <li key={index} className="text-[#3A3A3C]">{strength}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-[#FF3B30] mb-2">Weaknesses</h4>
        <ul className="list-disc list-inside space-y-1">
          {competitor.weaknesses.map((weakness, index) => (
            <li key={index} className="text-[#3A3A3C]">{weakness}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function CompetitorAnalysis() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Local Market Analysis</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive analysis of leading VR platforms, identifying opportunities 
          for better user experience and feature implementation.
        </p>

        <div className="space-y-12">
          {/* Competitor Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Key Competitors</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <CompetitorCard key={index} competitor={competitor} />
              ))}
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Feature Comparison</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={featureComparisonData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="feature" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Meta Quest" dataKey="MetaQuest" stroke="#007AFF" fill="#007AFF" fillOpacity={0.2} />
                  <Radar name="HTC Vive" dataKey="HTCVive" stroke="#34C759" fill="#34C759" fillOpacity={0.2} />
                  <Radar name="Oculus" dataKey="Oculus" stroke="#5856D6" fill="#5856D6" fillOpacity={0.2} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Market Share Analysis */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Market Share Trends</h2>
            <p className="text-[#3A3A3C] mb-4">
              Analysis of VR market share shows a gradual shift towards more immersive and 
              user-friendly platforms, with newer solutions gaining traction through superior 
              user experience and feature sets.
            </p>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketShareData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="MetaQuest" stackId="a" fill="#007AFF" />
                  <Bar dataKey="HTCVive" stackId="a" fill="#34C759" />
                  <Bar dataKey="Oculus" stackId="a" fill="#5856D6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Key Findings */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#007AFF] mb-4">Market Opportunities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Growing demand for immersive experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Need for better navigation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Demand for accessible VR interfaces</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#FF3B30] mb-4">Competitive Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Established market leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">High user expectations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Technical limitations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}