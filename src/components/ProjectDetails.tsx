import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF3B30'];

const VRResearchMethods = [
  {
    icon: "🔍",
    title: "Competitor Analysis",
    description: "Analyzing leading VR platforms and their landing pages",
    link: "/research/competitor-analysis"
  },
  {
    icon: "🎯",
    title: "User Personas",
    description: "Creating detailed profiles of target users",
    link: "/research/user-personas/virtual-reality-experience"
  }
];

const SilentHustlersResearch = [
  {
    icon: "📊",
    title: "Market Analysis",
    description: "Understanding the design platform landscape",
    link: "/research/market-analysis"
  },
  {
    icon: "🤝",
    title: "User Personas",
    description: "Creating profiles of quiet designers",
    link: "/research/user-personas/silent-hustlers"
  },
  {
    icon: "💭",
    title: "User Feelings",
    description: "Understanding designer emotions and needs",
    link: "/research/user-feelings"
  },
  {
    icon: "📝",
    title: "Stakeholder Questioning",
    description: "Gathering insights from key stakeholders",
    link: "/research/stakeholder-questioning"
  }
];

const InformationMethods = [
  {
    icon: "📊",
    title: "Demand Analysis",
    description: "Understanding local market demands and shopping patterns",
    link: "/research/demand-analysis"
  },
  {
    icon: "💬",
    title: "End-User Discussion",
    description: "Direct conversations with potential users about their shopping needs",
    link: "/research/end-user-discussion"
  },
  {
    icon: "🗺️",
    title: "Customer Feelings Map",
    description: "Mapping emotional journey of customers during grocery shopping",
    link: "/research/customer-feelings-map"
  }
];

const SilentHustlersProcess = [
  {
    title: "Define",
    description: "Understanding the quiet designer's journey",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    link: "/research/silent-hustlers-define"
  },
  {
    title: "Core Components",
    description: "Building the essential platform features",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
    link: "/research/core-components"
  },
  {
    title: "Wireframe",
    description: "Creating the platform structure and layout",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    link: "https://sideheaven.netlify.app/"
  }
];

const DesignMethodology = [
  {
    title: "Interpretation",
    description: "Analyzing and understanding user needs and market requirements",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
    link: "/research/interpretation"
  },
  {
    title: "Organizing",
    description: "Structuring information and planning the user experience flow",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    link: "/research/organizing"
  },
  {
    title: "Blueprint",
    description: "Creating detailed specifications and implementation plans",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    link: "/research/blueprint"
  }
];

const DesignProcess = {
  'virtual-reality-experience': [
    {
      title: "Empathy Maps",
      description: "Mapping user emotions and behaviors",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
      link: "/research/empathy-maps"
    },
    {
      title: "Ideation",
      description: "Generating innovative VR interface solutions",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      link: "/research/ideation"
    },
    {
      title: "Prototype",
      description: "Creating interactive VR prototypes",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      link: "/research/prototype"
    }
  ]
};

export default function ProjectDetails({ project }: { project: any }) {
  const metricsData = React.useMemo(() => {
    if (project.id === 'virtual-reality-experience') {
      return [
        { name: 'User Engagement', before: 35, after: 85 },
        { name: 'Onboarding Success', before: 25, after: 75 },
        { name: 'Feature Discovery', before: 40, after: 90 }
      ];
    } else if (project.id === 'silent-hustlers') {
      return [
        { name: 'Focus Time', before: 30, after: 90 },
        { name: 'Learning Progress', before: 40, after: 85 },
        { name: 'Community Growth', before: 25, after: 75 }
      ];
    } else {
      return [
        { name: 'Order Efficiency', before: 20, after: 70 },
        { name: 'Customer Satisfaction', before: 45, after: 85 },
        { name: 'Digital Adoption', before: 30, after: 80 }
      ];
    }
  }, [project.id]);

  const satisfactionData = React.useMemo(() => {
    if (project.id === 'virtual-reality-experience') {
      return [
        { name: 'Immersive Experience', value: 55 },
        { name: 'Navigation Ease', value: 25 },
        { name: 'Feature Usage', value: 15 },
        { name: 'Learning Curve', value: 5 }
      ];
    } else if (project.id === 'silent-hustlers') {
      return [
        { name: 'Deep Work', value: 50 },
        { name: 'Skill Growth', value: 30 },
        { name: 'Collaboration', value: 15 },
        { name: 'Career Progress', value: 5 }
      ];
    } else {
      return [
        { name: 'Shopping Experience', value: 45 },
        { name: 'Delivery Service', value: 35 },
        { name: 'Product Quality', value: 15 },
        { name: 'Price Value', value: 5 }
      ];
    }
  }, [project.id]);

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors duration-200 text-[#007AFF]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="w-full h-[50vh] relative overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl opacity-90">{project.role}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {project.id === 'virtual-reality-experience' && (
          <>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Research Methods</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {VRResearchMethods.map((method, index) => (
                  <Link
                    key={index}
                    to={method.link}
                    className="group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F5F5F7]"
                  >
                    <span className="text-4xl mb-4 block transform transition-transform group-hover:scale-110">{method.icon}</span>
                    <h3 
                      className="text-xl font-semibold mb-2 transition-colors duration-300"
                      style={{ color: COLORS[index % COLORS.length] }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-[#3A3A3C] mb-4 transition-colors duration-300 group-hover:text-[#1C1C1E]">
                      {method.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Design Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {DesignProcess['virtual-reality-experience'].map((process, index) => (
                  <Link
                    key={index}
                    to={process.link}
                    className="relative overflow-hidden rounded-xl group h-64"
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={process.image} 
                        alt={process.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {process.title}
                      </h3>
                      <p className="text-white/90">{process.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {project.id === 'silent-hustlers' && (
          <>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Research & Analysis</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {SilentHustlersResearch.map((method, index) => (
                  <Link
                    key={index}
                    to={method.link}
                    className="group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F5F5F7]"
                  >
                    <span className="text-4xl mb-4 block transform transition-transform group-hover:scale-110">{method.icon}</span>
                    <h3 
                      className="text-xl font-semibold mb-2 transition-colors duration-300"
                      style={{ color: COLORS[index % COLORS.length] }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-[#3A3A3C] mb-4 transition-colors duration-300 group-hover:text-[#1C1C1E]">
                      {method.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Design Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {SilentHustlersProcess.map((process, index) => (
                  <Link
                    key={index}
                    to={process.link}
                    className="relative overflow-hidden rounded-xl group h-64"
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={process.image} 
                        alt={process.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {process.title}
                      </h3>
                      <p className="text-white/90">{process.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {project.id === 'prabha-kirana-store' && (
          <>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Information Methods</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {InformationMethods.map((method, index) => (
                  <Link
                    key={index}
                    to={method.link}
                    className="group bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F5F5F7]"
                  >
                    <span className="text-4xl mb-4 block transform transition-transform group-hover:scale-110">{method.icon}</span>
                    <h3 
                      className="text-xl font-semibold mb-2 transition-colors duration-300"
                      style={{ color: COLORS[index % COLORS.length] }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-[#3A3A3C] mb-4 transition-colors duration-300 group-hover:text-[#1C1C1E]">
                      {method.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Design Methodology</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {DesignMethodology.map((method, index) => (
                  <Link
                    key={index}
                    to={method.link}
                    className="relative overflow-hidden rounded-xl group h-64"
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={method.image} 
                        alt={method.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {method.title}
                      </h3>
                      <p className="text-white/90">{method.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1C1C1E] mb-6">Key Metrics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F7] p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">
                {project.id === 'virtual-reality-experience' ? 'Performance Metrics' : 
                 project.id === 'silent-hustlers' ? 'Focus & Productivity' : 
                 'Business Impact'}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={metricsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="before" fill="#8884d8" name="Before" animationDuration={1500} />
                  <Bar dataKey="after" fill="#82ca9d" name="After" animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-[#F5F5F7] p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#1C1C1E] mb-4">
                {project.id === 'virtual-reality-experience' ? 'User Experience' : 
                 project.id === 'silent-hustlers' ? 'Focus Analysis' : 
                 'Customer Experience'}
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
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
        </section>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#005BB5] transition-colors duration-200"
          >
            View More Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}