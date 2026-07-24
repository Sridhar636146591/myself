import React from 'react';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const certifications = [
    {
      title: "IBM Database Management Systems",
      issuer: "IBM",
      date: "Recent",
      credentialUrl: "/certificates/IBM%20DBMS.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Cyber Security",
      issuer: "TATA",
      date: "Recent",
      credentialUrl: "/certificates/cyber.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "TATA Certification",
      issuer: "TATA",
      date: "Recent",
      credentialUrl: "/certificates/TATA.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "AWS",
      date: "Recent",
      credentialUrl: "/certificates/AWS prompt Engineering.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Data Analytics Virtual Experience",
      issuer: "Deloitte",
      date: "Recent",
      credentialUrl: "/certificates/Data Analytics Job Simulation from deloitte.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "What Is Generative AI",
      issuer: "LinkedIn",
      date: "Recent",
      credentialUrl: "/certificates/CertificateOfCompletion_What Is Generative AI.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      title: "DATA SCIENCE & DATA ANALYTICS Training Program",
      issuer: "Sridhar S",
      date: "2026",
      credentialUrl: "/certificates/SRIDHAR. S Program Completion Certificate.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    {
      title: "Google Hack2Skill Certification",
      issuer: "Google Hack2Skill",
      date: "2026",
      credentialUrl: "/certificates/hack2skill.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "Internship Certificate InAmigos Foundation (Web Development)",
      issuer: "InAmigos Foundation",
      date: "Recent",
      credentialUrl: "/certificates/inAF",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Biz Tech Pitchathon (Innovatex 4.0)",
      issuer: "Innovatex 4.0",
      date: "2026",
      credentialUrl: "/certificates/biztech.pdf",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="bg-neutral-950 py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 max-w-2xl">
          <div className="inline-block border border-[#ff2a2a]/40 rounded-full px-5 py-1.5 text-xs text-[#ff2a2a] font-black uppercase tracking-widest mb-6 bg-[#ff2a2a]/5 shadow-[0_0_15px_rgba(255,42,42,0.1)]">
            Continuous Learning
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none text-white">
            Certifications & Training
          </h2>
          <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            A track record of expanding my expertise across cloud computing, machine learning, and modern software engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
              className="group relative bg-neutral-900/50 rounded-[2rem] p-8 border border-neutral-800 hover:border-[#ff2a2a]/50 shadow-md hover:shadow-[0_15px_40px_rgba(255,42,42,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-black/40 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-500 border border-neutral-800">
                  {cert.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-white/50 font-medium mb-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-neutral-800 flex justify-between items-center">
                <span className="text-sm font-bold text-white/40">
                  {cert.date}
                </span>
                
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-[#ff2a2a] transition-colors"
                >
                  View Credential
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certifications Button */}
        <div className="mt-20 flex justify-end">
          <Link
            to="/certifications"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-full font-bold overflow-hidden transition-all duration-500 hover:border-[#ff2a2a] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff2a2a] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            <span className="relative z-10">View All Certifications</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
