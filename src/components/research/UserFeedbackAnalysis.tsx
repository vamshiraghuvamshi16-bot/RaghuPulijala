import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF3B30'];

const satisfactionData = [
  { name: 'Deep Focus Achieved', value: 55 },
  { name: 'Minimal Distractions', value: 25 },
  { name: 'Enhanced Productivity', value: 15 },
  { name: 'Needs Improvement', value: 5 },
];

const feedbackTrendData = [
  { month: 'Jan', focusTime: 75, distractions: 25 },
  { month: 'Feb', focusTime: 80, distractions: 20 },
  { month: 'Mar', focusTime: 85, distractions: 15 },
  { month: 'Apr', focusTime: 90, distractions: 10 },
  { month: 'May', focusTime: 95, distractions: 5 },
];

export default function UserFeedbackAnalysis() {
  return (
    <div className="min-h-screen bg-white p-8">
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Focus & Flow Analysis</h1>

        <div className="grid gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">User Experience Distribution</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Focus Time vs. Distractions</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={feedbackTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="focusTime" 
                    name="Focus Time"
                    stroke="#34C759" 
                    strokeWidth={2}
                    animationDuration={1500}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="distractions" 
                    name="Distractions"
                    stroke="#FF3B30" 
                    strokeWidth={2}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}