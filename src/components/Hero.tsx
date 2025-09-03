import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { MapPin, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team collaboration and innovation at JetLearn"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline">JOBS AT </span>
            <span className="inline text-yellow-400">JETLEARN</span>
          </motion.h1>
          
          {/* Greeting */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-yellow-400">Namaste</span>, we are JetLearn!
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            JetLearn is a powerhouse of educational innovation, shaping individuals who go on to tackle impactful and demanding projects, lead renowned global organizations, and spearhead India's and the world's future in AI-powered education.
          </motion.p>
          
          {/* Quick Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-4 h-4" />
              <span>Remote</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Briefcase className="w-4 h-4" />
              <span>Full-time</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <span>In Office</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <span>Part Time</span>
            </button>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <Button 
              onClick={() => {
                const element = document.getElementById('why-work-with-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu overflow-hidden border-2 border-yellow-400 bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-gray-900"
            >
              <span className="relative z-10 flex items-center gap-3">
                Search Jobs
                <motion.svg 
                  className="w-5 h-5" 
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