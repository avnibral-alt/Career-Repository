import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="hero relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[95vh] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50" style={{ marginTop: '80px' }}>
      {/* Content Overlay - Left Aligned with proper top positioning */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <motion.div 
          className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 text-left tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover yourself and find your team.
          </motion.h1>
          
          {/* Supporting Paragraph */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl text-left font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            At JetLearn, your voice is respected, your accomplishments are celebrated, and your curiosity is nurtured as you work with global teams to solve complex challenges.
          </motion.p>
          
          {/* Call-to-Action Button */}
          <motion.div
            className="pt-2 sm:pt-4 md:pt-6"
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
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu border-0 w-full sm:w-auto"
              style={{ 
                backgroundColor: '#FEDE00', 
                color: '#000'
              }}
            >
              Search Jobs
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-yellow-100 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-blue-100 rounded-full blur-xl sm:blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-yellow-200 rounded-full blur-lg sm:blur-xl" />
      </div>
    </section>
  );
}
