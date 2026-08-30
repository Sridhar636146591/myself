import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-black z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle background red glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter z-10"
          >
            {/* Background text (empty state - solid red outline) */}
            <div 
              className="text-transparent select-none"
              style={{ WebkitTextStroke: '1.5px #ff2a2a' }}
            >
              𝗦𝗥𝗜𝗗𝗛𝗔𝗥 𝗦
            </div>

            {/* Foreground text (water fill state - solid red text) */}
            <motion.div 
              className="absolute top-0 left-0 text-[#ff2a2a] overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              𝗦𝗥𝗜𝗗𝗛𝗔𝗥 𝗦
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
