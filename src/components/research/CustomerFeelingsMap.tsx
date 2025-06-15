import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const feelingsData = {
  says: [
    "I need to check multiple stores for best prices",
    "The store is often crowded during peak hours",
    "Some items are frequently out of stock",
    "I trust my local store owner's recommendations",
    "It's convenient having a store nearby",
    "I wish they had home delivery"
  ],
  thinks: [
    "Am I getting the best price?",
    "Will all items be available today?",
    "Should I try a different store?",
    "Is this product fresh?",
    "I hope the queue isn't too long",
    "Maybe I should stock up more"
  ],
  does: [
    "Visits store 2-3 times per week",
    "Compares prices with other stores",
    "Makes lists before shopping",
    "Checks product expiry dates",
    "Buys in bulk when prices are good",
    "Asks for recommendations"
  ],
  feels: [
    "Frustrated with inconsistent pricing",
    "Comfortable with familiar store staff",
    "Anxious about product availability",
    "Satisfied with product quality",
    "Rushed during peak hours",
    "Connected to local community"
  ],
  goals: [
    "Save money on groceries",
    "Find all needed items in one place",
    "Maintain good relationship with store",
    "Get fresh, quality products",
    "Shop efficiently",
    "Support local business"
  ],
  painPoints: [
    "Inconsistent pricing",
    "Limited product availability",
    "Long queues during peak hours",
    "Carrying heavy items home",
    "No digital payment options",
    "Lack of delivery service"
  ]
};

function EmpathySection({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className={`text-xl font-semibold mb-4 ${color}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-2 h-2 mt-2 mr-2 rounded-full ${color.replace('text-', 'bg-')}`} />
            <span className="text-[#3A3A3C]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CustomerFeelingsMap() {
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

        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Customer Feelings Map</h1>
        <p className="text-[#3A3A3C] mb-8">
          A comprehensive analysis of customer behaviors, attitudes, and emotions when shopping 
          at local grocery stores.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EmpathySection 
            title="💬 Says"
            items={feelingsData.says}
            color="text-[#007AFF]"
          />
          <EmpathySection 
            title="🤔 Thinks"
            items={feelingsData.thinks}
            color="text-[#34C759]"
          />
          <EmpathySection 
            title="🎯 Does"
            items={feelingsData.does}
            color="text-[#FF9500]"
          />
          <EmpathySection 
            title="💭 Feels"
            items={feelingsData.feels}
            color="text-[#5856D6]"
          />
          <EmpathySection 
            title="🎯 Goals"
            items={feelingsData.goals}
            color="text-[#FF2D55]"
          />
          <EmpathySection 
            title="⚠️ Pain Points"
            items={feelingsData.painPoints}
            color="text-[#FF3B30]"
          />
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">Key Insights</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Customers value the personal relationship with local stores but want modern conveniences
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Price transparency and consistency are major concerns
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Digital solutions must maintain the trust and community aspect of local shopping
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
              <span className="text-[#3A3A3C]">
                Convenience features like delivery and digital payments are highly desired
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}