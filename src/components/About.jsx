import React from 'react';
import stackImage from '../assets/about/sridhar.jpg';

const pythonIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.93 2.02c-2.7 0-4.52.22-5.46.6-.94.39-1.57.94-1.9 1.66-.33.72-.5 1.76-.5 3.12h4c0-.98.11-1.63.34-1.95.23-.32.61-.48 1.15-.48h4.74c.54 0 .93.16 1.16.48.23.32.34.97.34 1.95v1.22H11.2c-1.37 0-2.4.17-3.1.52-.7.35-1.19.89-1.48 1.62-.29.73-.44 1.76-.44 3.09v1.94c0 1.33.15 2.37.44 3.1.29.73.78 1.27 1.48 1.62.7.35 1.73.52 3.1.52h1.61c1.37 0 2.4-.17 3.1-.52.7-.35 1.19-.89 1.48-1.62.29-.73.44-1.77.44-3.1v-1.22h-4c0 .98-.11 1.63-.34 1.95-.23.32-.62.48-1.16.48h-4.74c-.54 0-.92-.16-1.15-.48-.23-.32-.35-.97-.35-1.95v-.61h6.63c1.37 0 2.4-.17 3.1-.52.7-.35 1.19-.89 1.48-1.62.29-.73.44-1.76.44-3.09V9.38c0-1.33-.15-2.37-.44-3.1-.29-.73-.78-1.27-1.48-1.62-.7-.35-1.73-.52-3.1-.52H11.93zM9.5 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
  </svg>
);

const cIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.71 0 6.96-2.02 8.7-5.02l-2.48-1.43C16.92 17.3 14.62 18.5 12 18.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5c2.62 0 4.92 1.2 6.22 3.45l2.48-1.43C18.96 4.52 15.71 2.5 12 2.5z"/>
  </svg>
);

const sqlIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

const pandasIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Ears */}
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" />
    <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" />
    {/* Head outline */}
    <path d="M12 21a8 8 0 0 0 8-8c0-4.42-3.58-8-8-8s-8 3.58-8 8a8 8 0 0 0 8 8z" />
    {/* Eye patches */}
    <ellipse cx="9" cy="12" rx="1.5" ry="2.5" fill="currentColor" transform="rotate(-15 9 12)" />
    <ellipse cx="15" cy="12" rx="1.5" ry="2.5" fill="currentColor" transform="rotate(15 15 12)" />
    {/* Nose */}
    <path d="M12 15a1 1 0 0 0-1-1h2a1 1 0 0 0-1 1z" fill="currentColor" />
  </svg>
);

const numpyIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Number 1 */}
    <path d="M4 8V4.5L2.5 6" />
    {/* Number 2 */}
    <path d="M12 4.5a1.5 1.5 0 0 1 3 0c0 1-2 2.5-3 3.5h3" />
    {/* Number 3 */}
    <path d="M4 15.5h3l-2.5 3c1.5 0 2.5.5 2.5 2s-1 1.5-2 1.5" />
    {/* Number 4 */}
    <path d="M12 15.5v3.5h3M14.5 15.5v7" />
    {/* Divider lines representing a matrix/grid */}
    <line x1="9" y1="2" x2="9" y2="22" strokeDasharray="2 2" strokeWidth="1" opacity="0.3" />
    <line x1="2" y1="11" x2="22" y2="11" strokeDasharray="2 2" strokeWidth="1" opacity="0.3" />
  </svg>
);

const preprocessIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
  </svg>
);

const analysisIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const featureIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const deployIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2s-5 4.5-5 10c0 3 2.5 5 5 5s5-2 5-5c0-5.5-5-10-5-10z"/>
    <path d="M9 17v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4"/>
    <path d="M7 10h10"/>
  </svg>
);

const javaIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <path d="M6 1v3M10 1v3M14 1v3"/>
  </svg>
);

const htmlIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const cssIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const jsIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 17v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4M15 11v3.5a1.5 1.5 0 0 0 3 0V11"/>
  </svg>
);

const phpIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const aiIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m9.9 9.9l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
  </svg>
);

const mlIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const dsIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);

const blockchainIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="6" height="10" rx="1"/>
    <rect x="16" y="7" width="6" height="10" rx="1"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const fullstackIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const About = () => {
  const skillCategories = [
    {
      title: "Machine Learning & Data Science",
      items: [
        { name: 'Python', color: 'hover:border-yellow-400/50 hover:shadow-[0_15px_30px_rgba(234,179,8,0.25)] text-yellow-400', icon: pythonIcon },
        { name: 'Pandas', color: 'hover:border-indigo-400/50 hover:shadow-[0_15px_30px_rgba(99,102,241,0.25)] text-indigo-400', icon: pandasIcon },
        { name: 'NumPy', color: 'hover:border-teal-400/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.25)] text-teal-400', icon: numpyIcon },
        { name: 'SQL', color: 'hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)] text-cyan-400', icon: sqlIcon },
        { name: 'Data Preprocessing', color: 'hover:border-amber-400/50 hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)] text-amber-400', icon: preprocessIcon },
        { name: 'Data Analysis', color: 'hover:border-emerald-400/50 hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)] text-emerald-400', icon: analysisIcon },
        { name: 'Feature Engineering', color: 'hover:border-rose-400/50 hover:shadow-[0_15px_30px_rgba(244,63,94,0.25)] text-rose-400', icon: featureIcon },
        { name: 'Model Deployment', color: 'hover:border-violet-400/50 hover:shadow-[0_15px_30px_rgba(139,92,246,0.25)] text-violet-400', icon: deployIcon }
      ]
    },
    {
      title: "Programming Languages",
      items: [
        { name: 'Python', color: 'hover:border-yellow-400/50 hover:shadow-[0_15px_30px_rgba(234,179,8,0.25)] text-yellow-400', icon: pythonIcon },
        { name: 'Java', color: 'hover:border-orange-400/50 hover:shadow-[0_15px_30px_rgba(249,115,22,0.25)] text-orange-400', icon: javaIcon },
        { name: 'C', color: 'hover:border-sky-400/50 hover:shadow-[0_15px_30px_rgba(14,165,233,0.25)] text-sky-400', icon: cIcon }
      ]
    },
    {
      title: "Web Development",
      items: [
        { name: 'HTML', color: 'hover:border-orange-500/50 hover:shadow-[0_15px_30px_rgba(249,115,22,0.25)] text-orange-500', icon: htmlIcon },
        { name: 'CSS', color: 'hover:border-blue-500/50 hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] text-blue-500', icon: cssIcon },
        { name: 'JavaScript', color: 'hover:border-yellow-300/50 hover:shadow-[0_15px_30px_rgba(253,224,71,0.25)] text-yellow-300', icon: jsIcon },
        { name: 'PHP', color: 'hover:border-indigo-400/50 hover:shadow-[0_15px_30px_rgba(129,140,248,0.25)] text-indigo-400', icon: phpIcon },
        { name: 'MySQL', color: 'hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)] text-cyan-400', icon: sqlIcon }
      ]
    },
    {
      title: "Areas of Interest",
      items: [
        { name: 'Generative AI', color: 'hover:border-rose-400/50 hover:shadow-[0_15px_30px_rgba(244,63,94,0.25)] text-rose-400', icon: aiIcon },
        { name: 'Machine Learning', color: 'hover:border-violet-400/50 hover:shadow-[0_15px_30px_rgba(167,139,250,0.25)] text-violet-400', icon: mlIcon },
        { name: 'Data Science', color: 'hover:border-emerald-400/50 hover:shadow-[0_15px_30px_rgba(52,211,153,0.25)] text-emerald-400', icon: dsIcon },
        { name: 'Blockchain', color: 'hover:border-amber-400/50 hover:shadow-[0_15px_30px_rgba(251,191,36,0.25)] text-amber-400', icon: blockchainIcon },
        { name: 'Full-Stack Development', color: 'hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)] text-cyan-400', icon: fullstackIcon }
      ]
    }
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
         {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Sridhar S" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <div className="text-lg font-bold leading-relaxed max-w-3xl text-red-50 space-y-6">
            <p>
              Hello, I'm <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Sridhar S</span>, currently pursuing a Bachelor of Technology in Computer Science with a specialization in Data Science at Presidency University. I am passionate about developing intelligent, data-driven solutions and leveraging technology to solve real-world problems.
            </p>
            <p>
              My areas of interest span some of the most transformative technologies of our time, including Generative AI, Machine Learning, and Blockchain. Beyond learning these technologies, I actively build real-world applications that combine innovation, data, and automation to create meaningful impact.
            </p>
            <p>
              I enjoy exploring emerging technologies, solving complex challenges, and continuously expanding my technical expertise through hands-on projects and practical experience. My goal is to develop scalable, intelligent solutions that bridge the gap between cutting-edge research and real-world applications.
            </p>
            <div>
              <p className="mb-2 text-black text-lg font-extrabold uppercase tracking-wide">What I work on:</p>
              <ul className="list-disc pl-5 space-y-2 text-red-50">
                <li><strong className="text-black">Generative AI</strong> — Creating smart AI-powered applications that go beyond theory and solve actual problems.</li>
                <li><strong className="text-black">Machine Learning & Analytics</strong> — Building models that learn from data and deliver actionable, meaningful insights.</li>
                <li><strong className="text-black">Blockchain</strong> — Developing decentralized solutions that are secure, transparent, and built for the future.</li>
              </ul>
            </div>
            <p>
              I am someone who learns fast, builds consistently, and is always looking for the next challenge to tackle. Every project I take on is an opportunity to push my skills further and deliver something that truly matters.
            </p>
            <p>
              Currently open to internships, collaborations, and exciting projects where I can contribute, grow, and make an impact.
            </p>

            <div className="pt-4 pb-2">
              <p className="mb-4 text-black text-lg font-black uppercase tracking-wider">Education:</p>
              <div className="p-6 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.01] hover:border-red-400/30">
                <div className="bg-white p-3 rounded-xl mb-4 flex justify-center items-center overflow-hidden border border-white/10 shadow-inner">
                  <img 
                    src="/presidency_logo.png" 
                    alt="Presidency University Bengaluru" 
                    className="max-h-14 object-contain" 
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-lg md:text-xl font-black tracking-tight mb-1">
                    PRESIDENCY UNIVERSITY
                  </h3>
                  <p className="text-red-200 text-xs md:text-sm font-black tracking-widest uppercase mb-2">
                    BENGALURU
                  </p>
                  <p className="text-white/70 text-xs md:text-sm font-bold leading-relaxed">
                    Bachelor of Technology in Computer Science with a specialization in Data Science
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-6">
              <p className="mb-2 text-black text-lg font-black uppercase tracking-wider">Skills & Technologies:</p>
              {skillCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h4 className="text-white text-xs font-black uppercase tracking-widest bg-black/20 px-3.5 py-1.5 rounded-lg inline-block border border-black/10">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 p-3 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.03] cursor-pointer ${skill.color}`}
                      >
                        <div className="flex items-center justify-center p-2 rounded-xl bg-white/5 shrink-0">
                          {skill.icon}
                        </div>
                        <span className="text-white text-xs font-black tracking-wide leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-black text-xl font-black tracking-wide uppercase pt-4">
              Let's build something amazing together. 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

