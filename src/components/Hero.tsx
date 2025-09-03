import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="hero relative w-full h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
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
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 text-left tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover yourself and find your team.
          </motion.h1>
          
          {/* Supporting Paragraph */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl text-left font-normal"
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

      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-200 rounded-full blur-xl" />
      </div>
    </section>
  );
}
