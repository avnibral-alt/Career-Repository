import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-[60vh] flex items-center overflow-hidden pt-28 pb-12 px-8 md:px-12 lg:px-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team collaboration and innovation at JetLearn"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability - 40% opacity */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay - Left Aligned like BCG */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div 
          className="max-w-4xl space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title - "Namaste, we are JetLearn!" as H1 */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-left tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-yellow-400">Namaste</span>, we are JetLearn!
          </motion.h1>
          
          {/* Subheading - Medium size with comfortable line height */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl text-left font-normal opacity-95"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            JetLearn in India is a powerhouse of educational innovation, shaping individuals who go on to tackle impactful and demanding projects, lead renowned global organizations, and spearhead India's and the world's future in AI-powered education.
          </motion.p>
          
          {/* Search Button - Left Aligned with proper styling */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              onClick={() => {
                const element = document.getElementById('why-work-with-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 text-lg font-bold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu border-0"
              style={{ 
                backgroundColor: '#fede00', 
                color: '#000'
              }}
            >
              Search Jobs
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements - positioned to not interfere with content */}
      <motion.div 
        className="absolute top-16 right-16 w-12 h-12 rounded-full opacity-20 blur-sm bg-gradient-to-r from-yellow-400 to-orange-400 z-10 hidden lg:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-16 right-20 w-16 h-16 rounded-full opacity-15 blur-sm bg-gradient-to-r from-blue-400 to-indigo-400 z-10 hidden lg:block"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -90, -180]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}