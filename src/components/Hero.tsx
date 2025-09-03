import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Lightbulb, Users, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Sets JetLearn Apart
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering future-ready education through innovation, technology, and impact.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Innovation Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cutting-edge educational technology and methodologies that transform learning experiences.
              </p>
            </div>
          </motion.div>

          {/* Community Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Diverse talent from around the world, fostering collaboration and cultural exchange.
              </p>
            </div>
          </motion.div>

          {/* Impact Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Measurable Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world results and transformative outcomes that drive positive change.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button 
            onClick={() => {
              const element = document.getElementById('departments');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu border-0"
            style={{ 
              backgroundColor: '#fede00', 
              color: '#000'
            }}
          >
            Explore Careers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
