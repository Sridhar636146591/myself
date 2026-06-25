import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>GenAI & Data Science</p>
          <p>Blockchain & DeFi Security</p>
          <p>Full Stack Python Apps</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Presidency University Student</p>
          <a href={isHome ? "#projects" : "/#projects"} className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Kolar, Karnataka, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          sridhar s
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <a href={isHome ? "#contact" : "/#contact"} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
            <a href="/Sridhar_S_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">View Resume (PDF)</a>
            <a href="/Sridhar_S_Resume_Updated.docx" download className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Download Resume (Word)</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Sridhar S | Built with React
          </p>
        </div>
        
        <div className="flex items-center gap-4 md:justify-center">
          {/* Gmail Icon Button */}
          <a 
            href="mailto:sridharreddyrudra@gmail.com" 
            title="Gmail"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#d4d4d4] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>

          {/* Instagram Icon Button */}
          <a 
            href="https://instagram.com/ravan_sridharreddy.s" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Instagram"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#d4d4d4] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn Icon Button */}
          <a 
            href="https://www.linkedin.com/in/sridhar-s-2b9670350/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#d4d4d4] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub Icon Button */}
          <a 
            href="https://github.com/Sridhar636146591" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#d4d4d4] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

