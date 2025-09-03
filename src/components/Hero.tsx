import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="hero relative w-full h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team collaboration and innovation at JetLearn"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div 
          className="max-w-4xl space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white text-left tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover yourself and find your team.
          </motion.h1>
          
          {/* Supporting Paragraph */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl text-left font-normal opacity-95"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            At JetLearn, your voice is respected, your accomplishments are celebrated, and your curiosity is nurtured as you work with global teams to solve complex challenges.
          </motion.p>
          
          {/* Call-to-Action Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              onClick={() => {
                const element = document.getElementById('departments');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu border-0"
              style={{ 
                backgroundColor: '#FEDE00', 
                color: '#000'
              }}
            >
              Explore Careers
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-20 blur-sm bg-gradient-to-r from-yellow-400 to-orange-400 z-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-20 h-20 rounded-full opacity-15 blur-sm bg-gradient-to-r from-blue-400 to-indigo-400 z-10"
        animate={{ 
          y: [0, 15, 0],
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
