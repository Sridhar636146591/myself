import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-transparent py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-black tracking-tight">
            Sridhar S<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Center: Desktop Menu Links */}
        {isHome && (
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                {/* Smooth hover underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        )}

        {/* Right Side: CTA Button & Back to Home */}
        <div className="hidden md:flex items-center gap-4">
          {!isHome && (
            <Link 
              to="/" 
              className="px-6 py-2.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/40 text-[#ff2a2a] font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.15)] flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          )}
          <a 
            href={isHome ? "#contact" : "/#contact"}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        {isHome && (
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
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
            isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
               <a 
                 href={isHome ? "#contact" : "/#contact"}
                 onClick={() => setIsOpen(false)} 
                 className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
               >
                 Hire Me
               </a>
               {!isHome && (
                 <Link 
                   to="/" 
                   onClick={() => setIsOpen(false)}
                   className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/40 text-[#ff2a2a] font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 w-full shadow-[0_0_15px_rgba(255,42,42,0.15)]"
                 >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                   </svg>
                   Back to Home
                 </Link>
               )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
