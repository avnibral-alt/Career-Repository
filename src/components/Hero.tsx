import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
    <section id="home" className="pt-14 sm:pt-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="block">INNOVATORS WANTED:</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Join the JetLearn Revolution ⚡
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Shape the future of AI-powered education. We're building the world's most innovative learning platform and need exceptional talent to join our mission.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={() => scrollToSection('why-work-with-us')}
                className="group relative px-8 py-5 text-lg rounded-2xl font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu overflow-hidden touch-manipulation"
                style={{ backgroundColor: '#ffcf00', color: '#000' }}
              >
                {/* Gradient overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Why JetLearn
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
              
              <Button 
                variant="outline"
                className="px-8 py-5 text-lg rounded-2xl font-medium transition-all duration-500 hover:bg-gray-50 border-2 border-gray-200 text-gray-700"
              >
                View Open Roles
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Professional globally appealing image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdGVhbSUyMHdvcmtpbmclMjBjb2xsYWJvcmF0aW9uJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjExOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional international team collaboration in modern workspace"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Subtle decorative elements */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full opacity-20 blur-sm bg-gradient-to-r from-blue-400 to-indigo-400"
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
              className="absolute -bottom-6 -left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full opacity-15 blur-sm bg-gradient-to-r from-purple-400 to-pink-400"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}