import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, tags, link, image }: { 
  title: string; 
  description: string; 
  tags: string[]; 
  link: string; 
  image: string;
}) {
  return (
    <div className="animated-border-card">
      <div className="bg-white p-6 rounded-xl relative z-10 h-full">
        <div className="aspect-video bg-[#F5F5F7] rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">{title}</h3>
        <p className="text-[#3A3A3C] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-[#F5F5F7] rounded-full text-sm text-[#3A3A3C]">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/project/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-[#007AFF] hover:text-[#005BB5]"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C1C1E] mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Virtual Reality Experience"
            description="A groundbreaking VR platform that transforms user interaction into immersive exploration"
            tags={['Figma', 'Photoshop', 'Notion', 'Sketches']}
            link="/project/virtual-reality-experience"
            image="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
          />
          <ProjectCard
            title="Silent Hustlers"
            description="A social platform empowering designers to share work, learn from peers, and collaborate on projects"
            tags={['Figma', 'Photoshop', 'Notion', 'Sketches']}
            link="/project/silent-hustlers"
            image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
          />
          <ProjectCard
            title="Prabha Kirana Store"
            description="A local grocery e-commerce platform providing seamless shopping experience for neighborhood customers"
            tags={['Figma', 'Photoshop', 'Notion', 'Sketches']}
            link="/project/prabha-kirana-store"
            image="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
          />
        </div>
      </div>
    </section>
  );
}