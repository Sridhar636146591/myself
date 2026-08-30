import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPhoto from '../assets/about/sridhar_hero.png';
import revealPhoto from '../assets/about/clone  t shirt.png';

// ─── Spotlight radius ────────────────────────────────────────────────────────
const SPOTLIGHT_R = 280;

// ─── RevealLayer ─────────────────────────────────────────────────────────────
// Exposes a draw(x, y) function via ref so the parent rAF loop can call it
// directly — zero React state updates, zero re-renders.
const RevealLayer = ({ drawRef, isActive }) => {
  const maskCanvasRef = useRef(null);
  const containerRef  = useRef(null);

  useEffect(() => {
    const canvas    = maskCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Keep canvas sized to the viewport
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Expose draw function to parent so it can be called from rAF
    drawRef.current = (x, y) => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      grad.addColorStop(0,    'rgba(255,255,255,1)');
      grad.addColorStop(0.45, 'rgba(255,255,255,1)');
      grad.addColorStop(0.65, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.80, 'rgba(255,255,255,0.35)');
      grad.addColorStop(0.92, 'rgba(255,255,255,0.08)');
      grad.addColorStop(1,    'rgba(255,255,255,0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL();
      container.style.maskImage        = `url(${dataUrl})`;
      container.style.webkitMaskImage  = `url(${dataUrl})`;
      container.style.maskSize         = '100% 100%';
      container.style.webkitMaskSize   = '100% 100%';
      container.style.maskRepeat       = 'no-repeat';
      container.style.webkitMaskRepeat = 'no-repeat';
    };

    return () => {
      window.removeEventListener('resize', resize);
      drawRef.current = null;
    };
  }, [drawRef]);

  return (
    <>
      <canvas ref={maskCanvasRef} style={{ display: 'none' }} />
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full z-[5] pointer-events-none transition-opacity duration-700 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'mask-image' }}
      >
        <img
          src={revealPhoto}
          alt="Reveal"
          className="w-full h-full object-cover object-center"
          style={{ animation: 'heroZoom 25s infinite alternate ease-in-out' }}
        />
      </div>
    </>
  );
};

// ─── Main Hero Component ─────────────────────────────────────────────────────
const Hero = () => {
  const audioObjRef     = useRef(null);
  const mouseRef        = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const smoothRef       = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef          = useRef(null);
  const spotlightDrawRef = useRef(null); // RevealLayer exposes its draw fn here

  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [isMagicActive, setIsMagicActive]   = useState(false);

  // ── AOS + audio cleanup ──────────────────────────────────────────────────
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
    return () => { if (audioObjRef.current) audioObjRef.current.pause(); };
  }, []);

  // ── Single unified rAF loop: spotlight ───────────────────────
  useEffect(() => {
    // Track raw mouse
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── Unified loop ─────────────────────────────────────────────────────
    const tick = () => {
      // 1) Lerp spotlight: factor 0.22 → fast & smooth
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.22;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.22;

      // 2) Draw spotlight directly — NO setState, NO re-render
      if (spotlightDrawRef.current) {
        spotlightDrawRef.current(smoothRef.current.x, smoothRef.current.y);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Voice toggle ──────────────────────────────────────────────────────────
  const toggleVoice = (e) => {
    e.stopPropagation();
    if (!audioObjRef.current) return;
    if (isPlayingVoice) {
      audioObjRef.current.pause();
      audioObjRef.current.currentTime = 0;
      setIsPlayingVoice(false);
    } else {
      audioObjRef.current.play()
        .then(() => setIsPlayingVoice(true))
        .catch((err) => {
          console.error('Audio play error:', err);
          alert("Unable to play audio. Error: " + err.message + "\n\nPlease ensure 'intro.mp4' exists in your 'public/' directory.");
        });
    }
  };

  const scrollToProjects = (e) => {
    e.stopPropagation();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes heroZoom {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes heroReveal {
          0%   { opacity: 0; filter: blur(12px); }
          100% { opacity: 1; filter: blur(0px); }
        }
        @keyframes heroFadeUp {
          0%   { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ken-burns-bg {
          animation: kenburns 25s infinite alternate ease-in-out;
        }
        .waveform-bar {
          animation: bounce 0.8s infinite alternate;
        }
        .waveform-bar:nth-child(2) { animation-delay: 0.15s; }
        .waveform-bar:nth-child(3) { animation-delay: 0.3s; }
        .waveform-bar:nth-child(4) { animation-delay: 0.45s; }
        @keyframes bounce {
          0%   { height: 4px; }
          100% { height: 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ken-burns-bg, .waveform-bar { animation: none; }
        }
      `}</style>

      {/* Layer 0: Base background portrait (Ken Burns) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#f8fafc] dark:bg-black">
        <img
          src={heroPhoto}
          alt="Sridhar S Portrait"
          className="w-full h-full object-cover object-center opacity-100 dark:opacity-50 ken-burns-bg"
        />
        {/* Lighter, narrow gradient overlay to ensure text readability on the left without covering the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/70 via-[#f8fafc]/25 to-transparent md:bg-gradient-to-r md:from-[#f8fafc]/65 md:via-transparent md:to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent pointer-events-none transition-all duration-300" />
      </div>

      {/* Layer 1: Spotlight reveal image — drawn by rAF, controlled by isActive */}
      <RevealLayer drawRef={spotlightDrawRef} isActive={isMagicActive} />



      {/* Layer 3: Main content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full pointer-events-none">

        {/* Left: Text + Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full pointer-events-auto">
          <h1
            data-aos="fade-up"
            className="text-[#0f172a] dark:text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#0f172a] dark:[-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:1.5px_#0f172a] dark:md:[-webkit-text-stroke:1.5px_white]">
              Sridhar S
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#334155] dark:text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-sm"
          >
            I build GenAI-driven applications, full-stack web applications, data analytics platforms,
            and secure blockchain solutions using Python, SQL, Web technologies, and Web3.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <button
              onClick={scrollToProjects}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-[#0f172a] text-white font-semibold hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 dark:bg-black/40 dark:border-white dark:text-white dark:hover:bg-black/60 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Controls (Listen to Intro + Magic Button) */}
        <div className="mt-8 md:mt-0 flex flex-col items-center gap-6 self-start md:self-auto pointer-events-auto min-w-[140px]">
          {/* Voice intro player */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group"
            onClick={toggleVoice}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-slate-300 bg-slate-200/50 text-slate-800 hover:bg-[#06b6d4] hover:text-white dark:border-white/30 dark:bg-black/20 dark:text-white dark:hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] dark:hover:shadow-[0_0_40px_rgba(255,42,42,0.6)] flex items-center justify-center">
              {isPlayingVoice ? (
                <div className="flex items-end gap-1 h-6">
                  <span className="w-1 bg-slate-700 group-hover:bg-white dark:bg-white rounded-full waveform-bar" style={{ height: '10px' }} />
                  <span className="w-1 bg-slate-700 group-hover:bg-white dark:bg-white rounded-full waveform-bar" style={{ height: '22px' }} />
                  <span className="w-1 bg-slate-700 group-hover:bg-white dark:bg-white rounded-full waveform-bar" style={{ height: '14px' }} />
                  <span className="w-1 bg-slate-700 group-hover:bg-white dark:bg-white rounded-full waveform-bar" style={{ height: '6px' }} />
                </div>
              ) : (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-slate-700 group-hover:text-white dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
              )}
            </div>
            <span className="text-slate-600 dark:text-white/70 group-hover:text-[#06b6d4] dark:group-hover:text-white text-[10px] md:text-xs font-bold tracking-widest uppercase transition-opacity text-center">
              {isPlayingVoice ? 'Playing Intro' : 'Listen to Intro'}
            </span>
          </div>

          {/* Magic Bulb Button */}
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group"
            onClick={() => setIsMagicActive(!isMagicActive)}
          >
            <div className={`relative w-10 h-10 md:w-14 md:h-14 rounded-full border flex justify-center items-center transition-all duration-500 hover:scale-110 ${
              isMagicActive
                ? 'border-yellow-400 shadow-[0_0_35px_rgba(250,204,21,0.5)]'
                : 'bg-slate-200/50 border-slate-300 dark:bg-black/20 dark:border-white/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.05)] group-hover:border-yellow-400/50'
            }`}>
              {/* Rotating neon background lights */}
              {isMagicActive && (
                <>
                  <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-[#ff007f] via-[#7f00ff] via-[#00f0ff] to-[#ff007f] opacity-80 blur-[8px] animate-spin pointer-events-none" style={{ animationDuration: '4s', zIndex: -2 }} />
                  <div className="absolute inset-[1px] rounded-full bg-white dark:bg-black pointer-events-none" style={{ zIndex: -1 }} />
                </>
              )}
              <svg 
                className={`relative z-10 w-4 h-4 md:w-6 md:h-6 transition-all duration-500 ${
                  isMagicActive ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]' : 'text-slate-700 dark:text-white/60 group-hover:text-yellow-400/70'
                }`}
                fill={isMagicActive ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="1.8" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8M12 3a7 7 0 00-7 7c0 2.764 1.6 5.12 3.93 6.22L10 18h4l1.07-1.78A6.978 6.978 0 0019 10a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-500 text-center ${
              isMagicActive ? 'text-yellow-400 font-extrabold' : 'text-slate-600 dark:text-white/70 group-hover:text-[#06b6d4] dark:group-hover:text-white'
            }`}>
              {isMagicActive ? 'Turn Off Light' : 'Turn On Light'}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Hidden audio/video for intro */}
      <video
        ref={audioObjRef}
        src="/intro.mp4"
        onEnded={() => setIsPlayingVoice(false)}
        playsInline
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0.01,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default Hero;
