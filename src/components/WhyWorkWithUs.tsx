import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Award,
  Rocket,
  Star,
  Brain,
  Code,
  Palette,
  Globe,
  CheckCircle
} from 'lucide-react';

export function WhyWorkWithUs() {
  // CSS Custom Properties for brand colors
  const brandColors = {
    yellow: '#F8C642',
    blue: '#0A66C2'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const leadershipData = [
    {
      id: 1,
      name: 'Abhishek Bahl',
      role: 'Founder & CEO',
      bio: 'Leading JetLearn\'s mission to revolutionize education through innovative technology and personalized learning experiences.',
      linkedin: 'https://www.linkedin.com/in/abhishekbahl/',
      image: '/images/abhishek.jpg',
      variant: 'neutral' // neutral, soft, or brand
    },
    {
      id: 2,
      name: 'Jatin Luthra',
      role: 'Co-Founder',
      bio: 'Driving innovation and strategic growth to expand JetLearn\'s global reach and educational impact.',
      linkedin: 'https://www.linkedin.com/in/luthra/',
      image: '/images/jatin.jpg',
      variant: 'soft'
    },
    {
      id: 3,
      name: 'Kapil Bahl',
      role: 'COO',
      bio: 'Optimizing operations and scaling JetLearn\'s infrastructure to support our growing global community of learners.',
      linkedin: 'https://www.linkedin.com/in/kapil-b-4297a43/',
      image: '/images/kapil.jpg',
      variant: 'brand'
    }
  ];

  const getCardStyles = (variant: string) => {
    switch (variant) {
      case 'soft':
        return {
          background: 'bg-gradient-to-br from-gray-50 to-yellow-50',
          border: 'border-l-2 border-l-[#F8C642]',
          shadow: 'shadow-md hover:shadow-lg'
        };
      case 'brand':
        return {
          background: 'bg-yellow-50/80',
          border: 'border-l-2 border-l-[#F8C642]',
          shadow: 'shadow-md hover:shadow-lg'
        };
      default: // neutral
        return {
          background: 'bg-white dark:bg-slate-900',
          border: 'border-l-2 border-l-[#F8C642]',
          shadow: 'shadow-md hover:shadow-lg'
        };
    }
  };

  return (
    <section id="why-work-with-us" className="py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-slate-900 dark:to-slate-800/50" />
        
        {/* Abstract accent shapes with brand yellow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-100/30 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-200/30 dark:bg-yellow-800/20 rounded-full blur-2xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300/20 dark:bg-yellow-700/20 rounded-full blur-xl opacity-20" />
        
        {/* Additional brand yellow accents */}
        <div className="absolute top-40 left-40 w-24 h-24 bg-yellow-200/25 dark:bg-yellow-800/25 rounded-full blur-lg opacity-25" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-yellow-300/20 dark:bg-yellow-700/20 rounded-full blur-md opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Impact at JetLearn Section */}
        <motion.div 
          className="mb-16 lg:mb-20 bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <motion.h3 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Impact at JetLearn
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl text-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Working at JetLearn means being part of something bigger than yourself. Every day, you'll contribute to creating meaningful global impact through innovative education that inspires the next generation of innovators. Our mission empowers learners worldwide with future-ready skills, transforming how children engage with technology and unlocking their potential to shape tomorrow's world.
              </motion.p>
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

        {/* Leadership Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Meet Our <span className="text-[#F8C642]">Leadership Team</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The visionaries driving JetLearn's mission to transform education worldwide through innovation and technology.
            </p>
          </motion.div>

          {/* Leadership Cards Grid - Refactored Modern Design */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipData.map((leader, index) => {
                const cardStyles = getCardStyles(leader.variant);
                
                return (
                  <motion.div
                    key={leader.id}
                    className="group"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -2,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }
                    }}
                  >
                    <div 
                      className={`relative rounded-2xl transition-all duration-500 p-8 text-center h-full flex flex-col items-center overflow-hidden ${cardStyles.background} ${cardStyles.border} ${cardStyles.shadow} hover:shadow-xl`}
                      style={{
                        '--tw-shadow-color': 'rgba(248, 198, 66, 0.25)',
                        '--tw-shadow': '0 0 0 3px var(--tw-shadow-color)'
                      } as React.CSSProperties}
                    >
                      {/* Hover accent border glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                           style={{
                             boxShadow: '0 0 0 3px rgba(248, 198, 66, 0.25)'
                           }} />
                      
                      {/* Profile Image Container */}
                      <div className="relative mb-6 z-10">
                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-102 border-2 border-white dark:border-slate-700">
                          <img 
                            src={leader.image}
                            alt={`${leader.name} - ${leader.role}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              // Fallback images for each leader
                              const fallbacks = [
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                              ];
                              target.src = fallbacks[index] || fallbacks[0];
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col items-center w-full space-y-4 z-10">
                        {/* Name */}
                        <h4 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                          {leader.name}
                        </h4>
                        
                        {/* Role Chip with Yellow Accent Dot */}
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full">
                          <div className="w-2 h-2 rounded-full bg-[#F8C642] flex-shrink-0"></div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {leader.role}
                          </p>
                        </div>
                        
                        {/* Bio */}
                        <p className="text-sm md:text-[15px] leading-6 text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-[60ch]">
                          {leader.bio}
                        </p>
                      </div>

                      {/* LinkedIn Button - Fixed Position in Footer */}
                      <div className="mt-6 z-10 self-end">
                        <a 
                          href={leader.linkedin}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                          aria-label={`Connect with ${leader.name} on LinkedIn`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.493V9h3.493v1.464h.046c.455-.865 1.562-1.78 3.214-1.78 3.448 0 4.082 2.225 4.082 5.111v6.767zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

