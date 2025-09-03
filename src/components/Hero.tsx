import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const element = document.getElementById('why-work-with-us');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team collaboration and innovation at JetLearn"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay - Left Aligned like BCG */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-3xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title - Left Aligned */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Jobs at JetLearn
          </motion.h1>
          
          {/* Greeting - Left Aligned */}
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-white text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-yellow-400">Namaste</span>, we are JetLearn!
          </motion.div>
          
          {/* Description - Left Aligned */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            JetLearn in India is a powerhouse of educational innovation, shaping individuals who go on to tackle impactful and demanding projects, lead renowned global organizations, and spearhead India's and the world's future in AI-powered education.
          </motion.p>
          
          {/* Search Section - Left Aligned */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              {/* Job Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Jobs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-4 pr-4 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300"
                />
              </div>
              
              {/* Search Button */}
              <Button 
                onClick={handleSearch}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu whitespace-nowrap"
              >
                Search
              </Button>
            </div>
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