import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPhoto from '../assets/about/sridhar_hero.png';

const Hero = () => {
  const canvasRef = useRef(null);
  const audioObjRef = useRef(null);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    return () => {
      if (audioObjRef.current) {
        audioObjRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle setup
    const particles = [];
    const particleCount = Math.min(65, Math.floor((canvas.width * canvas.height) / 24000));
    const maxDistance = 140;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      });
    }

    let mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 42, 42, 0.45)';
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x && mouse.y) {
          const mDx = p.x - mouse.x;
          const mDy = p.y - mouse.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
          if (mDist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mAlpha = (1 - mDist / 180) * 0.22;
            ctx.strokeStyle = `rgba(255, 42, 42, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleVoice = (e) => {
    e.stopPropagation();
    if (!audioObjRef.current) return;

    if (isPlayingVoice) {
      audioObjRef.current.pause();
      audioObjRef.current.currentTime = 0; // Reset to the beginning
      setIsPlayingVoice(false);
    } else {
      audioObjRef.current.play().then(() => {
        setIsPlayingVoice(true);
      }).catch(err => {
        console.error("Audio play error:", err);
        alert("Unable to play audio. Error: " + err.message + "\n\nPlease ensure 'intro.mp4' exists in your 'public/' directory.");
      });
    }
  };

  const scrollToProjects = (e) => {
    e.stopPropagation();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
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
          0% { height: 4px; }
          100% { height: 22px; }
        }
      `}</style>

      {/* Background Portrait Photo Loop (Ken Burns Motion) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <img 
          src={heroPhoto} 
          alt="Sridhar S Portrait" 
          className="w-full h-full object-cover object-center opacity-40 ken-burns-bg"
        />
      </div>

      {/* Background Interactive Neural Network Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full pointer-events-none">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full pointer-events-auto">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I’m <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:1.5px_white]">Sridhar S</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            I build GenAI-driven applications, full-stack web applications, data analytics platforms, and secure blockchain solutions using Python, SQL, Web technologies, and Web3.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <button 
              onClick={scrollToProjects}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
            >
              View My Work
            </button>
            
            {/* Secondary Button - Glassmorphism style */}
            <button 
              onClick={scrollToContact}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Interactive voice introduction player */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto pointer-events-auto"
          onClick={toggleVoice}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {isPlayingVoice ? (
              // Audio Waveform Animation when playing
              <div className="flex items-end gap-1 h-6">
                <span className="w-1 bg-white rounded-full waveform-bar" style={{ height: '10px' }}></span>
                <span className="w-1 bg-white rounded-full waveform-bar" style={{ height: '22px' }}></span>
                <span className="w-1 bg-white rounded-full waveform-bar" style={{ height: '14px' }}></span>
                <span className="w-1 bg-white rounded-full waveform-bar" style={{ height: '6px' }}></span>
              </div>
            ) : (
              // Play/Speaker Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {isPlayingVoice ? "Playing Intro" : "Listen to Intro"}
          </span>
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
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Hidden offscreen Video player to stream intro.mp4 audio track */}
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
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};

export default Hero;
