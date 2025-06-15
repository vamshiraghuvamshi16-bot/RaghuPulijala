import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#007AFF', '#34C759', '#FF9500'];

const competitorFeatures = [
  { feature: 'User Experience', SilentHustlers: 90, Behance: 75, Dribbble: 70 },
  { feature: 'Community Focus', SilentHustlers: 95, Behance: 60, Dribbble: 65 },
  { feature: 'Content Quality', SilentHustlers: 85, Behance: 80, Dribbble: 70 },
  { feature: 'Privacy Features', SilentHustlers: 95, Behance: 50, Dribbble: 45 },
  { feature: 'Job Opportunities', SilentHustlers: 80, Behance: 85, Dribbble: 75 }
];

const marketShareData = [
  { category: 'Independent Designers', SilentHustlers: 75, Behance: 45, Dribbble: 40 },
  { category: 'Design Agencies', SilentHustlers: 45, Behance: 80, Dribbble: 65 },
  { category: 'Student Designers', SilentHustlers: 85, Behance: 60, Dribbble: 55 }
];

const competitorData = [
  {
    category: 'User Persona',
    SilentHustlers: 'Independent creatives, introverts, deep workers, minimalists',
    Behance: 'Creative professionals, agencies, students',
    Dribbble: 'UI/UX designers, illustrators, startups'
  },
  {
    category: 'Content Format',
    SilentHustlers: 'Long-form stories, behind-the-scenes, anonymous or minimal profile projects',
    Behance: 'Portfolio projects with detailed case studies',
    Dribbble: 'Snapshot-style visuals ("shots") of ongoing or finished designs'
  },
  {
    category: 'Community Culture',
    SilentHustlers: 'Quiet growth, mutual support, authenticity over aesthetics',
    Behance: 'Competitive, feedback-oriented, social exposure',
    Dribbble: 'Trend-focused, social proof driven, followers matter'
  },
  {
    category: 'Visibility Model',
    SilentHustlers: 'Curated or invite-only showcase, no "likes" or limited public metrics',
    Behance: 'Algorithm + human curation (Featured Projects, Adobe staff picks)',
    Dribbble: 'Popularity algorithm, trending shots, Pro visibility'
  },
  {
    category: 'Networking',
    SilentHustlers: 'Small group interactions, anonymous peer feedback, closed communities',
    Behance: 'Open following, comments, collaborations',
    Dribbble: 'Followers, messages, likes; Pro networking features'
  }
];

function CompetitorTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F5F7]">
            <th className="px-6 py-4 text-left text-[#1C1C1E] font-semibold">Category</th>
            <th className="px-6 py-4 text-left text-[#007AFF] font-semibold">Silent Hustlers</th>
            <th className="px-6 py-4 text-left text-[#34C759] font-semibold">Behance</th>
            <th className="px-6 py-4 text-left text-[#FF9500] font-semibold">Dribbble</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F5F5F7]">
          {competitorData.map((row, index) => (
            <tr key={index} className="hover:bg-[#F5F5F7]/50 transition-colors duration-200">
              <td className="px-6 py-4 text-[#1C1C1E] font-semibold">{row.category}</td>
              <td className="px-6 py-4 text-[#3A3A3C]">{row.SilentHustlers}</td>
              <td className="px-6 py-4 text-[#3A3A3C]">{row.Behance}</td>
              <td className="px-6 py-4 text-[#3A3A3C]">{row.Dribbble}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MarketAnalysis() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Market Analysis</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive analysis of the design platform landscape, comparing key features,
          target audiences, and community aspects across major competitors.
        </p>

        <div className="space-y-12">
          {/* Feature Comparison */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Feature Comparison</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={competitorFeatures}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="feature" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Silent Hustlers" dataKey="SilentHustlers" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.2} />
                  <Radar name="Behance" dataKey="Behance" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.2} />
                  <Radar name="Dribbble" dataKey="Dribbble" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.2} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Market Share Analysis */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Market Share by Designer Type</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketShareData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="SilentHustlers" name="Silent Hustlers">
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[0]} />
                    ))}
                  </Bar>
                  <Bar dataKey="Behance" name="Behance">
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[1]} />
                    ))}
                  </Bar>
                  <Bar dataKey="Dribbble" name="Dribbble">
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[2]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Detailed Platform Comparison</h2>
            <CompetitorTable />
          </section>

          {/* Key Findings */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-[#007AFF] mb-4">Market Opportunities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Growing demand for focused, distraction-free platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Untapped market of introverted creators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Need for meaningful connections over vanity metrics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#FF3B30] mb-4">Competitive Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Established platforms with large user bases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Network effect of existing communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Building trust in a new platform</span>
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