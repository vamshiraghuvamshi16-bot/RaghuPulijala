import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Prototype() {
  React.useEffect(() => {
    window.location.href = 'https://www.figma.com/proto/zTDh83Jc3c1rDMCwugwOx3/Untitled?node-id=0-1&t=Ar8U3ROoToH59ppu-1';
  }, []);

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

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">Redirecting to Prototype...</h1>
          <p className="text-[#3A3A3C] mb-8">
            You'll be redirected to the Figma prototype in a moment. If you're not redirected,{' '}
            <a 
              href="https://www.figma.com/proto/zTDh83Jc3c1rDMCwugwOx3/Untitled?node-id=0-1&t=Ar8U3ROoToH59ppu-1"
              className="text-[#007AFF] hover:text-[#005BB5] inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}