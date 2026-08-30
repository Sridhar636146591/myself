import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-white dark:bg-[#ff2a2a] py-4 shadow-xl border-b border-slate-200/50 dark:border-transparent'
          : isScrolled 
            ? 'bg-white/80 border-b border-slate-200/50 backdrop-blur-md shadow-sm dark:bg-black/80 dark:border-neutral-900/50 py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <Link to="/" className="text-[#0f172a] dark:text-white text-2xl font-black tracking-tight">
            Sridhar S
          </Link>
        </div>

        {/* Center: Desktop Menu Links */}
        {isHome && (
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                className="text-slate-600 dark:text-white/80 hover:text-slate-900 dark:hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                {/* Smooth hover underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] dark:bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        )}

        {/* Right Side: CTA Button & Back to Home & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m9.9 9.9l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
              </svg>
            )}
          </button>

          {!isHome && (
            <button 
              onClick={() => navigate(-1)} 
              className="px-6 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 dark:bg-[#ff2a2a]/10 dark:border-[#ff2a2a]/40 dark:text-[#ff2a2a] dark:hover:bg-[#ff2a2a] dark:hover:text-white font-bold transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          )}
          <a 
            href={isHome ? "#contact" : "/#contact"}
            className="px-6 py-2.5 rounded-full bg-[#0f172a] text-white border border-[#0f172a] hover:bg-slate-800 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 font-semibold transition-all duration-300 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        {isHome && (
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0f172a] dark:text-white focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Slide-Down Menu */}
      {isHome && (
        <div 
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 py-4 opacity-100 bg-white border-b border-slate-200/50 dark:border-transparent dark:bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-[#06b6d4] border-b border-slate-100 dark:text-white dark:hover:text-black dark:border-white/20 pb-2 transition-colors font-bold text-lg"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
               <button 
                 onClick={() => {
                   setIsOpen(false);
                   setIsDark(!isDark);
                 }}
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-800 dark:bg-neutral-900 dark:border-neutral-800 dark:text-yellow-400 font-bold transition-all duration-300 w-full shadow-sm cursor-pointer"
               >
                 {isDark ? (
                   <>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m9.9 9.9l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                     </svg>
                     Light Mode
                   </>
                 ) : (
                   <>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
                     </svg>
                     Dark Mode
                   </>
                 )}
               </button>

               <a 
                 href={isHome ? "#contact" : "/#contact"}
                 onClick={() => setIsOpen(false)} 
                 className="inline-block px-6 py-3 rounded-full bg-[#0f172a] text-white font-bold hover:bg-slate-800 dark:bg-white dark:text-[#ff2a2a] dark:font-black dark:hover:bg-black dark:hover:text-white transition-colors w-full text-center shadow-lg"
               >
                 Hire Me
               </a>
                {!isHome && (
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      navigate(-1);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-800 dark:bg-[#ff2a2a]/10 dark:border-[#ff2a2a]/40 dark:text-[#ff2a2a] dark:hover:bg-[#ff2a2a] dark:hover:text-white transition-all duration-300 w-full shadow-sm cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                  </button>
                )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
