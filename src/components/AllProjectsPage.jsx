import React from 'react';
import { Link } from 'react-router-dom';

const AllProjectsPage = () => {
  // We can eventually pull this from a separate data file, but for now we'll define it here.
  const projectList = [
    {
      title: "Real-Time MEV Attack Detection Dashboard",
      category: "Ethereum / DeFi Security",
      date: "2025 – 2026",
      award: "🏆 1st Prize — BIZTECH PITCHATHON (Innovatex 4.0)",
      description: "Engineered a real-time dashboard to detect Maximal Extractable Value (MEV) attacks on Ethereum, targeting front-running and sandwich attack patterns in DeFi transactions. Implemented AI-based threat modeling and real-time transaction monitoring pipelines.",
      techStack: ["Python", "Ethereum Web3", "AI/ML Detection", "Data Pipelines"],
      linkText: "BizTech Winner 2026",
      link: "https://www.linkedin.com/posts/sridhar-s-2b9670350_presidencyuniversity-web3-blockchain-activity-7453059626570514432-94bD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFepwK0BzInejhLiWDBGEvk4EfaNt6fOHMQ",
      featured: true
    },
    {
      title: "BioSync — AI Health Tracker",
      category: "AI Health Tech / Full-Stack",
      date: "2025 – 2026",
      award: null,
      description: "Built and deployed a full-stack AI-powered health tracking web application featuring intelligent health metric analysis and personalized collections strategy. Deployed live with an insights engine that surfaces patterns and risk indicators.",
      techStack: ["Python", "REST APIs", "AI/ML Integration", "Render Cloud"],
      linkText: "Live Application",
      link: "https://biosync-health-app-1.onrender.com",
      featured: false
    },
    {
      title: "AI Fraud Sentinel",
      category: "AI / Security",
      date: "2026",
      award: null,
      description: "An AI-powered fraud detection and security command portal for welfare schemes verification. Leverages real-time anomaly models, device tracking, network forensics, and document validation to ensure secure access.",
      techStack: ["Python", "Machine Learning", "Render Cloud", "Forensics"],
      linkText: "Live Application",
      link: "https://froud-detection-ej1p.onrender.com",
      featured: true
    },
    {
      title: "Campus Community Hub (Class Connect)",
      category: "Full-Stack Web App",
      date: "2025",
      award: null,
      description: "An all-in-one digital campus platform designed to help students connect, collaborate, and grow with their peers. Features community forums, event tracking, and resource sharing.",
      techStack: ["Web Technologies", "Community Platform", "Render Cloud"],
      linkText: "Live Portal",
      link: "https://class-connect-z8nb.onrender.com/",
      featured: false
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-28 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation / Header */}
        <div className="mb-16 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none text-white">
            All Projects & Innovations
          </h1>
          <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            A comprehensive showcase of my work spanning AI, blockchain security, full-stack applications, and data-driven systems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-[2rem] p-8 md:p-10 border transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px] ${
                project.featured 
                  ? 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-[#ff2a2a]/30 hover:border-[#ff2a2a]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)]' 
                  : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Top corner gradient glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff2a2a]/5 rounded-full blur-2xl group-hover:bg-[#ff2a2a]/15 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a]">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {project.date}
                  </span>
                </div>

                {/* Award Badge if exists */}
                {project.award && (
                  <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold leading-tight">
                    {project.award}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-white group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
              </div>

              {/* Bottom Row: Tech Stack & Link */}
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white/75 text-[11px] font-semibold border border-neutral-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="border-t border-neutral-800/60 pt-6 flex justify-between items-center">
                  <a 
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="group-hover:text-[#ff2a2a] transition-colors">{project.linkText}</span>
                    <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllProjectsPage;
