import React from 'react';
import { Bookmark } from 'lucide-react';

function BlogCard({ title, date, description, link }: { 
  title: string; 
  date: string; 
  description: string; 
  link: string;
}) {
  return (
    <div className="animated-border-card">
      <div className="bg-white p-6 rounded-xl relative z-10 h-full">
        <div className="text-[#3A3A3C] text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{title}</h3>
        <p className="text-[#3A3A3C] mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
        >
          Read More <Bookmark className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-[#F5F5F7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C1C1E] mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="NeuroUX: The Future of Design"
            date="May 30, 2025"
            description="Exploring how neuroscience insights are revolutionizing user experience design and digital interactions"
            link="https://www.linkedin.com/pulse/neuro-uxthe-future-design-raghu-krishna-vamshi-pulijala-9nwyc"
          />
          <BlogCard
            title="Federated TinyML and the Future of Ethical, On-Device AI Design"
            date="June 1, 2025"
            description="Creating efficient and powerful machine learning solutions for resource-constrained devices"
            link="https://www.linkedin.com/pulse/federated-tinyml-designing-future-private-smart-tiny-ai-pulijala-r8zhc"
          />
          <BlogCard
            title="Autonomous Cloud Operations with AIOps & Self-Healing Systems"
            date="June 5, 2025"
            description="Navigating ethical considerations in AI-powered design systems and user experiences"
            link="https://www.linkedin.com/pulse/how-i-see-future-autonomous-cloud-operations-aiops-systems-pulijala-hofrc"
          />
        </div>
      </div>
    </section>
  );
}