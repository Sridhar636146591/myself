import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      title: "Real-Time MEV Attack Detection Dashboard",
      category: "Ethereum / DeFi Security",
      date: "2025 – 2026",
      award: <>🏆 1st Prize — BIZTECH PITCHATHON (<span className="text-[#3b82f6] font-black">Innovatex 4.0</span>)</>,
      description: "Engineered a real-time dashboard to detect Maximal Extractable Value (MEV) attacks on Ethereum, targeting front-running and sandwich attack patterns in DeFi transactions. Implemented AI-based threat modeling and real-time transaction monitoring pipelines.",
      techStack: ["Python", "Ethereum Web3", "AI/ML Detection", "Data Pipelines"],
      linkText: "BizTech Winner 2026",
      link: "https://www.linkedin.com/posts/sridhar-s-2b9670350_presidencyuniversity-web3-blockchain-activity-7453059626570514432-94bD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFepwK0BzInejhLiWDBGEvk4EfaNt6fOHMQ",
      certificateLink: "/certificates/biztech.pdf",
      certificateLinkText: "View Certificate",
      featured: true
    },
    {
      title: "AI MENTOR+",
      category: "Generative AI / Education",
      date: "2026",
      award: <>🚀 Developed for PSAIAC AI GPU Summer Internship Program (<span className="text-[#10b981] font-black">NVIDIA</span> Accelerated) — July 2026</>,
      description: <>Engineered an advanced educational assistant developed during the AI GPU Summer Internship Program at the Presidency School of Artificial Intelligence and Advanced Computing (PSAIAC), accelerated by <span className="text-[#10b981] font-bold">NVIDIA</span>.</>,
      techStack: ["React", "Tailwind CSS", "Vite", "Generative AI", "NVIDIA Accelerated"],
      linkText: "Live Application",
      link: "https://success-ai-frontend.onrender.com/",
      featured: true
    },
    {
      title: "AI-Driven Supply Chain Tracker",
      category: <><span className="text-white font-bold">Google Hack2Skill</span> / Logistics</>,
      date: "2026",
      award: <>Developed for <span className="text-white font-bold">Google Hack2Skill</span></>,
      description: <>Built an AI-powered supply chain management and tracking system for the <span className="text-white font-semibold">Google Hack2Skill</span> hackathon. Implemented predictive delay modeling, real-time logistics analytics, and inventory optimization pipelines to streamline operations.</>,
      techStack: ["Python", "Google Cloud AI", "Logistics Analytics", "Render Cloud"],
      linkText: "Live Application",
      link: "https://supply-chain-zbfw.onrender.com/",
      certificateLink: "/certificates/hack2skill.pdf",
      certificateLinkText: "View Certificate",
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
      certificateLink: "/certificates/fusion x .PDF",
      certificateLinkText: "View Certificate",
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
      certificateLink: "/certificates/web.pdf",
      certificateLinkText: "View Certificate",
      featured: false
    }
  ];

  return (
    <section id="projects" className="bg-slate-50 dark:bg-black py-28 px-6 md:px-12 w-full text-slate-800 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 dark:bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/10 dark:bg-red-950/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 max-w-2xl">
          <div className="inline-block border border-slate-200 dark:border-[#ff2a2a]/40 rounded-full px-5 py-1.5 text-xs text-slate-600 dark:text-[#ff2a2a] font-black uppercase tracking-widest mb-6 bg-white dark:bg-[#ff2a2a]/5 shadow-sm dark:shadow-[0_0_15px_rgba(255,42,42,0.1)]">
            My Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none text-[#0f172a] dark:text-white">
            Innovations & Built Solutions
          </h2>
          <p className="text-slate-500 dark:text-white/60 text-base md:text-lg font-medium leading-relaxed">
            Applying machine learning models, decentralized ledger analytics, and cloud orchestration to solve complex real-world challenges.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-10">
          {projectList.map((project, idx) => (
            <div 
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={100 * (idx + 1)}
              className={`group relative rounded-[2rem] p-8 md:p-10 border transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[460px] ${
                project.featured 
                  ? 'bg-white border-slate-200 hover:border-[#38bdf8]/50 shadow-[0_15px_40px_rgba(14,165,233,0.08)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 dark:border-[#ff2a2a]/30 dark:hover:border-[#ff2a2a]/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)]' 
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-[0_10px_30px_rgba(14,165,233,0.04)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.08)] dark:bg-neutral-950/80 dark:border-neutral-800 dark:hover:border-neutral-700 dark:shadow-md dark:hover:shadow-lg'
              }`}
            >
              {/* Top corner gradient glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38bdf8]/5 group-hover:bg-[#38bdf8]/15 dark:bg-[#ff2a2a]/5 dark:group-hover:bg-[#ff2a2a]/15 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#06b6d4] dark:text-[#ff2a2a]">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-white/40 font-mono">
                    {project.date}
                  </span>
                </div>

                {/* Award Badge if exists */}
                {project.award && (
                  <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold leading-tight">
                    {project.award}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-[#0f172a] dark:text-white group-hover:text-[#06b6d4] dark:group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-white/60 text-sm md:text-base leading-relaxed mb-8 font-medium">
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
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-white/75 text-[11px] font-semibold border border-slate-200 dark:border-neutral-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="border-t border-slate-100 dark:border-neutral-800/60 pt-6 flex items-center justify-between gap-6">
                  <a 
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-800 dark:text-white font-bold text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="group-hover:text-[#06b6d4] dark:group-hover:text-[#ff2a2a] transition-colors">{project.linkText}</span>
                    <svg className="w-4 h-4 text-[#06b6d4] dark:text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {project.certificateLink && (
                    <a 
                      href={project.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-[#06b6d4] dark:text-white/60 dark:hover:text-[#ff2a2a] font-bold text-sm transition-colors duration-300 ml-auto"
                    >
                      <span>{project.certificateLinkText}</span>
                      <svg className="w-4 h-4 text-[#06b6d4] dark:text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More Button */}
        <div data-aos="fade-up" className="mt-20 flex justify-end">
          <Link 
            to="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-300 dark:border-neutral-700 text-slate-800 dark:text-white rounded-full font-bold overflow-hidden transition-all duration-500 hover:border-[#06b6d4] dark:hover:border-[#ff2a2a] hover:shadow-[0_15px_30px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_0_30px_rgba(255,42,42,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] dark:from-[#ff2a2a] dark:to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <span className="relative z-10 group-hover:text-white">View All Projects</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
