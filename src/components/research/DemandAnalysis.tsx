import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF3B30'];

const productRangeData = [
  { category: 'Essential Groceries', PrabhaKirana: 90, OtherStores: 60 },
  { category: 'Branded Products', PrabhaKirana: 85, OtherStores: 50 },
  { category: 'Snacks & Beverages', PrabhaKirana: 80, OtherStores: 45 },
  { category: 'Seasonal Items', PrabhaKirana: 95, OtherStores: 40 }
];

const customerData = [
  { category: 'Daily Customer Count', PrabhaKirana: 125, OtherStores: 70 },
  { category: 'Customer Loyalty', PrabhaKirana: 90, OtherStores: 60 },
  { category: 'High-Demand Periods', PrabhaKirana: 85, OtherStores: 55 }
];

const technologyData = [
  { name: 'Digital Payment', value: 95 },
  { name: 'Home Delivery', value: 90 },
  { name: 'Inventory Tracking', value: 85 },
  { name: 'Customer Service', value: 95 }
];

const demandDrivers = [
  { driver: 'Local Trust', PrabhaKirana: 95, OtherStores: 70 },
  { driver: 'Quick Restocking', PrabhaKirana: 90, OtherStores: 50 },
  { driver: 'Competitive Prices', PrabhaKirana: 85, OtherStores: 75 },
  { driver: 'Word-of-mouth', PrabhaKirana: 95, OtherStores: 60 }
];

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function DemandAnalysis() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Demand Analysis</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive analysis of market demand and competitive positioning for Prabha Kirana Store.
        </p>

        <div className="grid gap-8">
          {/* Product Range Comparison */}
          <InfoCard title="Product Range and Availability">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productRangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="PrabhaKirana" name="Prabha Kirana" fill={COLORS[0]} />
                  <Bar dataKey="OtherStores" name="Other Stores" fill={COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </InfoCard>

          {/* Customer Data */}
          <InfoCard title="Customer Footfall and Preferences">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={customerData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar name="Prabha Kirana" dataKey="PrabhaKirana" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.6} />
                  <Radar name="Other Stores" dataKey="OtherStores" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </InfoCard>

          {/* Technology and Services */}
          <InfoCard title="Technology and Ordering">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={technologyData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="value" fill={COLORS[2]}>
                    {technologyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </InfoCard>

          {/* Demand Drivers */}
          <InfoCard title="Demand Drivers">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={demandDrivers}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="driver" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Prabha Kirana" dataKey="PrabhaKirana" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.6} />
                  <Radar name="Other Stores" dataKey="OtherStores" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </InfoCard>

          {/* Key Insights */}
          <InfoCard title="Key Insights">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#007AFF] mb-4">Market Strengths</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Strong local customer trust and loyalty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Comprehensive product range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
                    <span className="text-[#3A3A3C]">Advanced technology adoption</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#FF3B30] mb-4">Growth Opportunities</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Expand delivery radius</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Enhance digital presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#FF3B30] rounded-full" />
                    <span className="text-[#3A3A3C]">Introduce loyalty programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}