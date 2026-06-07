import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-48 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Content - Rendered as static block at the top to prevent overlapping */}
        <div data-aos="fade-up" className="mb-20 max-w-3xl">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Engineering intelligent, data-driven systems
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            I follow a structured, scientific, and highly technical approach to turn complex datasets and ideas into secure, production-ready systems.
          </p>
        </div>

        {/* Roadmap Relative Container */}
        <div className="relative w-full md:h-[2100px]">

          {/* Desktop SVG Animated Dashed Line */}
          <svg 
            className="hidden md:block absolute top-0 left-0 w-full h-[2100px] pointer-events-none z-0" 
            viewBox="0 0 1000 2100" 
            preserveAspectRatio="none"
          >
            {/* Faint background path */}
            <path 
              d="M 650,50 C 400,150 200,250 300,500 C 400,700 750,650 700,800 C 650,1000 400,1000 300,1100 C 200,1200 400,1300 700,1400 C 800,1500 500,1600 300,1700 C 200,1800 400,1900 600,2000" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeDasharray="8 10" 
            />

            {/* Mask to reveal the dashed path based on scroll */}
            <mask id="path-mask">
              <motion.path 
                d="M 650,50 C 400,150 200,250 300,500 C 400,700 750,650 700,800 C 650,1000 400,1000 300,1100 C 200,1200 400,1300 700,1400 C 800,1500 500,1600 300,1700 C 200,1800 400,1900 600,2000" 
                fill="none" 
                stroke="white" 
                strokeWidth="20" 
                style={{ pathLength }}
              />
            </mask>

            {/* The actual dashed line that gets revealed */}
            <path 
              d="M 650,50 C 400,150 200,250 300,500 C 400,700 750,650 700,800 C 650,1000 400,1000 300,1100 C 200,1200 400,1300 700,1400 C 800,1500 500,1600 300,1700 C 200,1800 400,1900 600,2000" 
              fill="none" 
              stroke="black" 
              strokeWidth="2" 
              strokeDasharray="8 10" 
              mask="url(#path-mask)"
              className="drop-shadow-sm"
            />
          </svg>

          {/* Mobile Animated Vertical Dashed Line */}
          <svg 
            className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
            viewBox="0 0 4 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="4" 
              strokeDasharray="4 6" 
              vectorEffect="non-scaling-stroke"
            />
            <mask id="path-mask-mobile">
              <motion.path 
                d="M 2,0 L 2,100" 
                fill="none" 
                stroke="white" 
                strokeWidth="4" 
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
            <path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="black" 
              strokeWidth="4" 
              strokeDasharray="4 6" 
              mask="url(#path-mask-mobile)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cards Container */}
          <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
            
            <TagCard 
              number="01"
              title="Analyze"
              text="Exploratory Data Analysis (EDA) and data quality assessment using Python, Jupyter, and visual libraries to uncover hidden risk patterns and data insights."
              className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
              aosType="fade-left"
              aosDelay="100"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="02"
              title="Model"
              text="Designing predictive modeling logic, GenAI agentic workflows, and automated systems backed by ethical AI principles and real-world use cases."
              className="md:absolute md:top-[300px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
              aosType="fade-right"
              aosDelay="200"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="03"
              title="Generate"
              text="Building Generative AI solutions using large language models, prompt engineering, and RAG pipelines to create intelligent, context-aware applications."
              className="md:absolute md:top-[600px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
              aosType="fade-left"
              aosDelay="300"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="04"
              title="Evaluate"
              text="Assessing model performance, validating data pipelines, and ensuring accuracy, fairness, and reliability across every solution built."
              className="md:absolute md:top-[900px] md:left-[10%] lg:left-[15%] -rotate-1 md:-rotate-3"
              aosType="fade-right"
              aosDelay="400"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="05"
              title="Visualize"
              text="Transforming complex data into clear, compelling dashboards and visual stories using Power BI, Matplotlib, Seaborn, and Plotly."
              className="md:absolute md:top-[1200px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
              aosType="fade-left"
              aosDelay="500"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="06"
              title="Deploy"
              text="Integrating models into full-stack web platforms and REST APIs with seamless deployment to cloud hosts like Render and Hugging Face Spaces."
              className="md:absolute md:top-[1500px] md:left-[5%] lg:left-[12%] -rotate-2 md:-rotate-4"
              aosType="fade-right"
              aosDelay="600"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            <TagCard 
              number="07"
              title="Innovate"
              text="Continuously exploring emerging technologies, research papers, and open-source projects to stay ahead and bring fresh thinking to every challenge."
              className="md:absolute md:top-[1800px] md:right-[10%] lg:right-[20%] rotate-1 md:rotate-3"
              aosType="fade-left"
              aosDelay="700"
              pathLength={pathLength}
              containerRef={containerRef}
            />

            {/* Hand-drawn end text */}
            <div 
              data-aos="fade-in" 
              data-aos-delay="800"
              className="hidden md:block absolute top-[2020px] left-[20%] lg:left-[30%] font-['Caveat',cursive] text-3xl text-gray-600 -rotate-6"
            >
              Ready to innovate!
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
