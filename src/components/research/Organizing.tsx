import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
            <span className="text-[#3A3A3C]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#F5F5F7] p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="w-2 h-2 mt-2 mr-2 bg-[#007AFF] rounded-full" />
            <span className="text-[#3A3A3C]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Organizing() {
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

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#1C1C1E] mb-8">Project Organization</h1>

          <div className="space-y-12">
            <Section 
              title="🎯 Key User Needs Identified"
              items={[
                "Price transparency",
                "Easy ordering from home",
                "Product availability updates",
                "Simple interface (for both shopkeepers & customers)",
                "Trustworthy, fast delivery",
                "No complex digital requirements",
                "Senior citizens will be very helpful"
              ]}
            />

            <Section 
              title="🔍 'How Might We' Questions (HMWs)"
              items={[
                "HMW help users shop from local kirana stores online while maintaining trust?",
                "HMW simplify the ordering process for less tech-savvy users?",
                "HMW allow store owners with low digital skills to manage their inventory easily?",
                "HMW provide familiar ways of ordering like WhatsApp or phone?"
              ]}
            />

            <div>
              <h2 className="text-2xl font-semibold text-[#1C1C1E] mb-6">🌟 Top Solution Ideas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <SolutionCard 
                  title="Minimal Local Store App/Website"
                  items={[
                    "Category-based browsing (e.g., Rice, Milk, Snacks)",
                    "Product availability status (In Stock / Out of Stock)",
                    "Transparent pricing",
                    "'Reorder Previous Items' button"
                  ]}
                />

                <SolutionCard 
                  title="WhatsApp Ordering Integration"
                  items={[
                    "Website button → opens WhatsApp with pre-filled product message",
                    "Store receives and confirms orders via WhatsApp",
                    "Convenient for older or rural users",
                    "No need to install app for these users"
                  ]}
                />

                <SolutionCard 
                  title="Simple Inventory Dashboard"
                  items={[
                    "Add/edit items quickly with photos",
                    "Mark stock status",
                    "Adjust prices easily",
                    "View order summaries per day"
                  ]}
                />

                <SolutionCard 
                  title="Loyalty & Trust-Building Features"
                  items={[
                    "'Pay Later' for trusted customers",
                    "Localized offers (e.g., 'Festival Rice Pack Offer')",
                    "Simple rewards for repeat users",
                    "Personalized order greetings"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}