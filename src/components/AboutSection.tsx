import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-[#3A3A3C] hover:text-[#007AFF] transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="animated-border-card">
      <div className="bg-white p-6 rounded-xl relative z-10 h-full">
        <h3 className="text-lg font-semibold text-[#1C1C1E] mb-2">{title}</h3>
        <p className="text-[#3A3A3C]">{description}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#F5F5F7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C1C1E] mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#3A3A3C] mb-6">
              I'm a passionate designer and developer focused on creating beautiful, 
              functional digital experiences. With a keen eye for detail and a love 
              for clean, elegant solutions, I help businesses and individuals bring 
              their visions to life.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="mailto:rvamshipulijala@gmail.com" icon={<Mail />} />
              <SocialLink href="http://linkedin.com/in/rv23" icon={<Linkedin />} />
            </div>
          </div>
          <div className="space-y-4">
            <SkillCard title="UI/UX Design" description="Creating intuitive and beautiful interfaces" />
            <SkillCard title="Motion Design" description="Bringing interfaces to life with animation" />
            <SkillCard title="Front-end Development" description="Building responsive and performant web applications" />
            <SkillCard title="3D Design" description="Creating immersive 3D experiences for the web" />
          </div>
        </div>
      </div>
    </section>
  );
}