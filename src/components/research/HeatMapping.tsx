import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const heatMapData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const clickDistributionData = [
  { x: 200, y: 260, z: 240 },
  { x: 180, y: 290, z: 220 },
  { x: 170, y: 290, z: 230 },
  { x: 190, y: 280, z: 250 },
  { x: 210, y: 300, z: 260 },
  { x: 160, y: 270, z: 210 },
];

export default function HeatMapping() {
  return (
    <div className="min-h-screen bg-white p-8">
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Heat Mapping Analysis</h1>

        <div className="grid gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">User Interaction Hotspots</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="x" />
                  <YAxis type="number" dataKey="y" name="y" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter 
                    name="Interactions" 
                    data={heatMapData} 
                    fill="#007AFF"
                    animationDuration={1500}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Click Distribution</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="x" />
                  <YAxis type="number" dataKey="y" name="y" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter 
                    name="Clicks" 
                    data={clickDistributionData} 
                    fill="#34C759"
                    animationDuration={1500}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}