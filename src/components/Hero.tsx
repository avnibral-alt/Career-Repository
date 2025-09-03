import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="hero py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration - matching Impact section */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50" />
        
        {/* Abstract accent shapes with brand yellow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-200 rounded-full blur-2xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-20" />
        
        {/* Additional brand yellow accents */}
        <div className="absolute top-40 left-40 w-24 h-24 bg-yellow-200 rounded-full blur-lg opacity-25" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-yellow-300 rounded-full blur-md opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section - matching Impact section structure */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Discover yourself and find your team.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At JetLearn, your voice is respected, your accomplishments are celebrated, and your curiosity is nurtured as you work with global teams to solve complex challenges.
              </motion.p>
              
              {/* Call-to-Action Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
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
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Team collaboration and innovation at JetLearn"
                  className="w-full h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
