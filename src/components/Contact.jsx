import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
  // Apply a smooth spring transition to eliminate scroll scroll jitter/glitching
  const y = useSpring(yRaw, { stiffness: 80, damping: 25, restDelta: 0.001 });

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sridharreddyrudra@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields: First Name, Email, and Message.");
      return;
    }

    if (!formData.permission) {
      alert("Please consent to the permission box to submit the form.");
      return;
    }

    setStatus('sending');

    try {
      // FormSubmit AJAX endpoint mapping directly to your email
      const response = await fetch("https://formsubmit.co/ajax/sridharreddyrudra@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.firstName} ${formData.lastName}`
        })
      });

      const result = await response.json();
      
      if (response.ok && (result.success === "true" || result.success === true || result.message)) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          permission: false
        });
        
        alert("Success! Your message has been sent. \n\n(Note: If this is the first submission, FormSubmit will send a confirmation link to sridharreddyrudra@gmail.com. Click it to activate the form!)");
        setStatus('idle');
      } else {
        setStatus('error');
        alert("Submission failed. Opening your email client instead!");
        triggerMailtoFallback();
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("An error occurred. Opening your email app instead!");
      triggerMailtoFallback();
      setStatus('idle');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-slate-50 dark:bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-slate-200 dark:border-gray-900 transition-colors duration-300">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-slate-200/60 dark:text-neutral-900 uppercase tracking-tighter select-none scale-y-[1.6] origin-top transition-colors duration-300"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-white border border-slate-200 shadow-[0_20px_50px_rgba(14,165,233,0.08)] text-slate-800 dark:bg-[#ff2a2a] dark:border-transparent dark:shadow-none dark:text-white w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 flex flex-col justify-between rounded-t-[2.5rem] md:rounded-tl-[3.5rem] md:rounded-tr-none transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-12 md:mb-16 border-b border-slate-200 dark:border-white/20 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 dark:text-white/90">
                Reach Us
              </span>
              <div className="flex flex-row flex-wrap gap-2.5">
                <a 
                  href="/Sridhar_S_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-extrabold text-[10px] tracking-wider uppercase hover:bg-slate-900 hover:text-white hover:border-transparent dark:hover:bg-white dark:hover:text-[#ff2a2a] dark:hover:border-transparent transition-all duration-300 transform hover:scale-[1.03] shadow-md flex items-center gap-1.5 cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume (PDF)
                </a>
                <a 
                  href="/Sridhar_S_Resume_Updated.docx" 
                  download
                  className="px-4 py-2.5 rounded-full bg-slate-900 border border-transparent text-white font-extrabold text-[10px] tracking-wider uppercase hover:bg-slate-800 hover:border-slate-300 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] shadow-md flex items-center gap-1.5 cursor-pointer group"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume (Word)
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Gmail Icon Button */}
              <a 
                href="mailto:sridharreddyrudra@gmail.com" 
                title="Gmail"
                className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-[#06b6d4] hover:text-white hover:border-transparent dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#ff2a2a] hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Instagram Icon Button */}
              <a 
                href="https://instagram.com/ravan_sridharreddy.s" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram"
                className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-[#06b6d4] hover:text-white hover:border-transparent dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#ff2a2a] hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-[#06b6d4] hover:text-white hover:border-transparent dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#ff2a2a] hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-[#06b6d4] hover:text-white hover:border-transparent dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#ff2a2a] hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-slate-300 dark:border-white/40 pb-3 text-lg focus:outline-none focus:border-slate-800 dark:focus:border-white transition-colors placeholder-slate-400 dark:placeholder-white font-medium rounded-none text-slate-800 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-slate-300 dark:border-white/40 pb-3 text-lg focus:outline-none focus:border-slate-800 dark:focus:border-white transition-colors placeholder-slate-400 dark:placeholder-white font-medium rounded-none text-slate-800 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="w-full bg-transparent border-b border-slate-300 dark:border-white/40 pb-3 text-lg focus:outline-none focus:border-slate-800 dark:focus:border-white transition-colors placeholder-slate-400 dark:placeholder-white font-medium rounded-none text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-slate-300 dark:border-white/40 pb-3 text-lg focus:outline-none focus:border-slate-800 dark:focus:border-white transition-colors placeholder-slate-400 dark:placeholder-white font-medium resize-none rounded-none text-slate-800 dark:text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <label htmlFor="permission" className="flex-1 flex items-start gap-4 text-sm font-medium text-slate-600 dark:text-white/90 cursor-pointer select-none">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    checked={formData.permission}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[#06b6d4] dark:peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white dark:peer-focus-visible:ring-offset-[#ff2a2a] ${
                    formData.permission 
                      ? 'bg-[#06b6d4] border-[#06b6d4] dark:bg-white dark:border-white' 
                      : 'border-slate-300 bg-transparent hover:border-slate-500 dark:border-white/40 dark:hover:border-white'
                  }`}>
                    {formData.permission && (
                      <svg className="w-3 h-3 text-white dark:text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </span>
              </label>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-slate-500 dark:text-white/77 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-[#06b6d4] dark:hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-[#06b6d4] dark:hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-[#06b6d4] dark:hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="px-9 py-3.5 rounded-full bg-[#0f172a] text-white font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-[#06b6d4] hover:shadow-[0_10px_30px_rgba(6,182,212,0.4)] dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:scale-[1.05] active:scale-95 group whitespace-nowrap self-start sm:self-auto cursor-pointer disabled:opacity-50 shadow-lg"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send'}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
