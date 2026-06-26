import React from 'react';

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
      title: "Python Programming",
      issuer: "Certification",
      date: "Recent",
      credentialUrl: "/certificates/python.png",
      icon: (
        <svg className="w-10 h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

      </div>
    </section>
  );
};

export default Certifications;
