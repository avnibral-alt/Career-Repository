import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // More reliable mobile scrolling
      const isMobile = window.innerWidth < 768;
      const headerOffset = 80; // Account for sticky header
      
      if (isMobile) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section id="home" className="pt-14 sm:pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Build the Future of AI-Powered Learning with JetLearn 
              <motion.span 
                className="ml-2 inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
              >
                🚀
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We're pioneering the world's first Web3 & AI-powered online academy for kids — and we're hiring the brightest minds globally.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button 
                onClick={() => scrollToSection('departments')}
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu overflow-hidden touch-manipulation"
                style={{ backgroundColor: '#fede00', color: '#000' }}
              >
                {/* Gradient overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Explore Roles
                  <motion.svg 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Ripple effect - reduce on mobile */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping hidden md:block" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676276374429-3902f2666824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBSSUyMGlubm92YXRpb24lMjB0ZWFtd29yayUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTYxMTkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern AI innovation and teamwork"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating decorative elements - reduce motion on mobile */}
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full opacity-20 blur-sm"
              style={{ backgroundColor: '#fede00' }}
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
              className="absolute -bottom-6 -left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full opacity-15 blur-sm"
              style={{ backgroundColor: '#fede00' }}
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
            
            {/* Subtle grid pattern overlay */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}