import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-black z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* Simple, clean text animation */}
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <h1 className="text-3xl md:text-5xl font-black tracking-[0.25em] text-white uppercase select-none">
              SRIDHAR S
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#06b6d4] dark:via-[#ff2a2a] to-transparent rounded-full"
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
