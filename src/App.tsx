import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ProjectDetails from './components/ProjectDetails';
import CompetitorAnalysis from './components/research/CompetitorAnalysis';
import UserFeedbackAnalysis from './components/research/UserFeedbackAnalysis';
import UserPersonas from './components/research/UserPersonas';
import Empathize from './components/research/Empathize';
import EmpathyMap from './components/research/EmpathyMap';
import Ideation from './components/research/Ideation';
import Prototype from './components/research/Prototype';
import Define from './components/research/Define';
import MarketAnalysis from './components/research/MarketAnalysis';
import SilentHustlersDefine from './components/research/SilentHustlersDefine';
import StakeholderQuestioning from './components/research/StakeholderQuestioning';
import IndustryAnalysis from './components/research/IndustryAnalysis';
import Strategy from './components/research/Strategy';
import DesignDiscoveryTalks from './components/research/DesignDiscoveryTalks';
import UserFeelings from './components/research/UserFeelings';
import CoreComponents from './components/research/CoreComponents';
import Specification from './components/research/Specification';
import DemandAnalysis from './components/research/DemandAnalysis';
import Interpretation from './components/research/Interpretation';
import Organizing from './components/research/Organizing';
import Blueprint from './components/research/Blueprint';
import EndUserDiscussion from './components/research/EndUserDiscussion';
import CustomerFeelingsMap from './components/research/CustomerFeelingsMap';

const projectsData = {
  'virtual-reality-experience': {
    id: 'virtual-reality-experience',
    title: "Virtual Reality Experience",
    role: "Landing Page Designer",
    timeline: "1 month (Jan 2025)",
    team: ["Raghu Vamshi - Landing Page Designer"],
    tools: ["Figma", "Photoshop"],
    overview: "Designed an engaging and informative landing page for a groundbreaking VR platform, focusing on communicating the product's value proposition and driving user sign-ups.",
    problem: "The existing landing page failed to effectively communicate the platform's unique features and benefits, resulting in low conversion rates and user engagement.",
    goals: {
      business: [
        "Increase landing page conversion rate by 50%",
        "Reduce bounce rate by 30%",
        "Improve user understanding of product features"
      ],
      user: [
        "Clear understanding of product benefits",
        "Easy access to key information",
        "Smooth sign-up process"
      ]
    },
    research: {
      methods: ["Competitor Analysis", "User Feedback Analysis", "Empathize"],
      findings: [
        "Users need clear value proposition",
        "Visual demonstrations are crucial",
        "Simple sign-up process is essential"
      ]
    },
    process: {
      sketches: ["Hero section concepts", "Feature showcase layouts", "CTA placements"],
      wireframes: ["Desktop layouts", "Mobile responsive designs", "Navigation structure"],
      design: ["Final UI components", "Responsive breakpoints", "Animation specifications"]
    },
    testing: {
      methods: [
        "A/B testing with different layouts",
        "User feedback sessions",
        "Analytics tracking"
      ],
      feedback: [
        "Clear and compelling messaging",
        "Effective feature presentation",
        "Intuitive navigation"
      ],
      changes: [
        "Optimized hero section",
        "Enhanced feature visualization",
        "Improved call-to-actions"
      ]
    },
    impact: {
      results: [
        "70% increase in conversion rate",
        "40% reduction in bounce rate",
        "85% positive user feedback"
      ],
      feedback: [
        "\"Crystal clear product presentation\"",
        "\"Compelling and easy to understand\"",
        "\"Professional and engaging design\""
      ]
    },
    learnings: [
      "Visual hierarchy is crucial for landing pages",
      "Clear CTAs drive better conversions",
      "Mobile responsiveness is non-negotiable",
      "Performance optimization is key"
    ],
    coverImage: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg",
    images: {
      sketches: [
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg",
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
      ],
      wireframes: [
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg",
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
      ],
      final: [
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg",
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
      ]
    }
  },
  'silent-hustlers': {
    id: 'silent-hustlers',
    title: "Silent Hustlers",
    role: "UX/UI Designer",
    timeline: "4 months (Sep 2024 - Dec 2024)",
    team: ["Raghu Vamshi - UX/UI Designer"],
    tools: ["Figma", "Adobe XD", "Miro", "Notion"],
    overview: "Build quietly. Design boldly. A platform for designers who let their work speak louder than their words.",
    problem: "Today's design world rewards noise: fast posts, flashy portfolios, and never-ending notifications. But not all creatives thrive in chaos. Some of us build in silence. We needed a space made for focus — not distraction.",
    goals: {
      business: [
        "Create a distraction-free design environment",
        "Build a community of focused creators",
        "Enable meaningful portfolio growth"
      ],
      user: [
        "Find a quiet space to create",
        "Connect with like-minded designers",
        "Showcase work without the noise"
      ]
    },
    research: {
      methods: [
        {
          name: "Market Analysis",
          icon: "📊",
          color: "#007AFF",
          link: "/research/competitor-analysis",
          description: "Understanding the design platform landscape"
        },
        {
          name: "Empathy Maps",
          icon: "🗺️",
          color: "#5856D6",
          description: "Understanding designer emotions and behaviors"
        }
      ],
      findings: [
        "Designers seek focused work environments",
        "Quality feedback matters more than quantity",
        "Community trust is essential"
      ]
    },
    process: {
      sketches: ["Zen Mode interface", "Feedback system", "Portfolio layouts"],
      wireframes: ["Minimal UI components", "Focus-first navigation", "Distraction-free zones"],
      design: ["Dark mode variations", "Typography system", "Interaction patterns"]
    },
    testing: {
      methods: [
        "Usability testing with designers",
        "Focus group sessions",
        "A/B testing of key features"
      ],
      feedback: [
        "\"It's like the platform gets me\"",
        "\"I finally found a space where I can just... create\"",
        "\"No fluff. Just flow\""
      ],
      changes: [
        "Enhanced Zen Mode features",
        "Simplified navigation",
        "Improved focus tools"
      ]
    },
    impact: {
      results: [
        "90% reduction in UI distractions",
        "85% user retention rate",
        "95% positive feedback on focus features"
      ],
      feedback: [
        "\"Perfect for deep work sessions\"",
        "\"Finally, a platform that respects my process\"",
        "\"The quiet space I needed\""
      ]
    },
    learnings: [
      "Not all designers thrive in noisy environments",
      "Focus and flow are crucial for creativity",
      "Community can be built quietly",
      "Simplicity enables deeper work"
    ],
    coverImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    images: {
      sketches: [
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
      ],
      wireframes: [
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
      ],
      final: [
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
      ]
    }
  },
  'prabha-kirana-store': {
    id: 'prabha-kirana-store',
    title: "Prabha Kirana Store",
    role: "3D Designer - Landing Page & Welcoming Screen",
    timeline: "3 months (Apr 2024 - Jun 2024)",
    team: ["Raghu Vamshi - 3D Designer"],
    tools: ["Blender", "Three.js", "Figma", "Cinema 4D"],
    overview: "A local grocery e-commerce platform providing seamless shopping experience for neighborhood customers, bridging the gap between traditional kirana stores and digital convenience with immersive 3D landing page and welcoming screen design.",
    problem: "Local grocery stores struggle to compete with large e-commerce platforms, while customers seek the convenience of online shopping with the trust of local stores. Traditional flat designs fail to create engaging first impressions.",
    goals: {
      business: [
        "Increase store revenue by 40%",
        "Achieve 70% digital adoption",
        "Reduce order processing time",
        "Create memorable brand experience"
      ],
      user: [
        "Easy product discovery",
        "Quick ordering process",
        "Reliable delivery system",
        "Engaging visual experience"
      ]
    },
    research: {
      methods: ["Customer Interviews", "Store Owner Surveys", "Competition Analysis", "Service Blueprint"],
      findings: [
        "Trust is key for local customers",
        "Quick delivery is essential",
        "Price transparency is crucial",
        "Visual appeal increases engagement"
      ]
    },
    process: {
      sketches: ["3D store concepts", "Product visualization", "Interactive elements"],
      wireframes: ["3D scene layouts", "Animation flows", "User interaction paths"],
      design: ["3D models", "Lighting setup", "Material design", "Animation sequences"]
    },
    testing: {
      methods: [
        "In-store user testing",
        "3D interaction studies",
        "Performance monitoring"
      ],
      feedback: [
        "Immersive shopping experience",
        "Clear product visualization",
        "Smooth 3D interactions"
      ],
      changes: [
        "Optimized 3D performance",
        "Enhanced visual feedback",
        "Improved loading animations"
      ]
    },
    impact: {
      results: [
        "50% increase in store revenue",
        "80% customer retention rate",
        "30% reduction in order processing",
        "95% positive feedback on visual design"
      ],
      feedback: [
        "\"Shopping made incredibly engaging\"",
        "\"Best 3D shopping experience for local stores\"",
        "\"Beautiful and functional design\""
      ]
    },
    learnings: [
      "3D design enhances user engagement",
      "Performance optimization is crucial for 3D web",
      "Visual storytelling builds trust",
      "Interactive elements improve conversion"
    ],
    coverImage: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    images: {
      sketches: [
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
      ],
      wireframes: [
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
      ],
      final: [
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
      ]
    }
  }
};

function ProjectDetailsWrapper() {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectDetails project={project} />;
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-[#3A3A3C] hover:text-[#007AFF] transition-all duration-300 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007AFF] group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-6 py-3 text-[#3A3A3C] hover:text-[#007AFF] hover:bg-blue-50/50 transition-all duration-200 rounded-lg"
    >
      {children}
    </a>
  );
}

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-[#D1D1D6]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <span className="text-[#007AFF] font-bold text-2xl tracking-tight">RV</span>
            
            <div className="hidden md:flex items-center space-x-2">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#blog">Blog</NavLink>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-[#007AFF]" /> : <Menu className="text-[#007AFF]" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#D1D1D6]/50">
            <div className="px-4 py-4 space-y-2">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#blog">Blog</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />

      <footer className="bg-[#1C1C1E] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Raghu Vamshi</h3>
              <p className="text-gray-400">CX Designer</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:rvamshipulijala@gmail.com" className="text-gray-400 hover:text-white">
                    rvamshipulijala@gmail.com
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/rv23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/raghuvamshi_23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">+91 918-200-2269</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-[#2C2C2E] border border-[#3A3A3C] text-white placeholder-gray-400 focus:outline-none focus:border-[#007AFF]"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#005BB5] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#3A3A3C] text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Raghu Vamshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:projectId" element={<ProjectDetailsWrapper />} />
        <Route path="/research/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route path="/research/user-personas/:projectId" element={<UserPersonas />} />
        <Route path="/research/empathize" element={<Empathize />} />
        <Route path="/research/empathy-maps" element={<EmpathyMap />} />
        <Route path="/research/ideation" element={<Ideation />} />
        <Route path="/research/prototype" element={<Prototype />} />
        <Route path="/research/define" element={<Define />} />
        <Route path="/research/market-analysis" element={<MarketAnalysis />} />
        <Route path="/research/silent-hustlers-define" element={<SilentHustlersDefine />} />
        <Route path="/research/stakeholder-questioning" element={<StakeholderQuestioning />} />
        <Route path="/research/industry-analysis" element={<IndustryAnalysis />} />
        <Route path="/research/strategy" element={<Strategy />} />
        <Route path="/research/design-discovery" element={<DesignDiscoveryTalks />} />
        <Route path="/research/user-feelings" element={<UserFeelings />} />
        <Route path="/research/core-components" element={<CoreComponents />} />
        <Route path="/research/specification" element={<Specification />} />
        <Route path="/research/demand-analysis" element={<DemandAnalysis />} />
        <Route path="/research/interpretation" element={<Interpretation />} />
        <Route path="/research/organizing" element={<Organizing />} />
        <Route path="/research/blueprint" element={<Blueprint />} />
        <Route path="/research/end-user-discussion" element={<EndUserDiscussion />} />
        <Route path="/research/customer-feelings-map" element={<CustomerFeelingsMap />} />
      </Routes>
    </Router>
  );
}

export default App;