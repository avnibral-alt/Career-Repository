import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, Target, Zap, Globe } from 'lucide-react';

export function CardioValues() {
  const values = [
    {
      letter: 'C',
      title: 'Collaboration',
      description: 'We believe in the power of working together to achieve extraordinary results.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900'
    },
    {
      letter: 'A',
      title: 'Adaptability',
      description: 'Embracing change and innovation to stay ahead in the dynamic world of education.',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900'
    },
    {
      letter: 'R',
      title: 'Resilience',
      description: 'Building strength and determination to overcome challenges and grow stronger.',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900'
    },
    {
      letter: 'D',
      title: 'Dedication',
      description: 'Committed to excellence and passionate about making a meaningful impact.',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900'
    },
    {
      letter: 'I',
      title: 'Innovation',
      description: 'Pioneering new approaches and creative solutions in education technology.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-900'
    },
    {
      letter: 'O',
      title: 'Opportunity',
      description: 'Creating pathways for growth and success for students and educators worldwide.',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-900'
    }
  ];

  return (
    <section id="cardio-values" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span style={{ color: '#fede00' }}>CARDIO</span> Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The core principles that drive everything we do at JetLearn
          </p>
        </motion.div>

        {/* Hands and Cards Container */}
        <div className="relative">
          {/* Hands Illustration */}
          <motion.div 
            className="flex justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Hand holding cards - SVG illustration */}
              <svg 
                width="120" 
                height="80" 
                viewBox="0 0 120 80" 
                className="text-gray-300"
                fill="currentColor"
              >
                {/* Left hand */}
                <path d="M20 60 Q15 55 20 50 Q25 45 30 50 Q35 55 30 60 Q25 65 20 60 Z" />
                <path d="M25 50 Q20 45 25 40 Q30 35 35 40 Q40 45 35 50 Q30 55 25 50 Z" />
                <path d="M30 40 Q25 35 30 30 Q35 25 40 30 Q45 35 40 40 Q35 45 30 40 Z" />
                <path d="M35 30 Q30 25 35 20 Q40 15 45 20 Q50 25 45 30 Q40 35 35 30 Z" />
                
                {/* Right hand */}
                <path d="M100 60 Q95 55 100 50 Q105 45 110 50 Q115 55 110 60 Q105 65 100 60 Z" />
                <path d="M95 50 Q90 45 95 40 Q100 35 105 40 Q110 45 105 50 Q100 55 95 50 Z" />
                <path d="M90 40 Q85 35 90 30 Q95 25 100 30 Q105 35 100 40 Q95 45 90 40 Z" />
                <path d="M85 30 Q80 25 85 20 Q90 15 95 20 Q100 25 95 30 Q90 35 85 30 Z" />
                
                {/* Cards being held */}
                <rect x="45" y="25" width="30" height="20" rx="2" fill="#fede00" opacity="0.3" />
                <rect x="50" y="20" width="30" height="20" rx="2" fill="#fede00" opacity="0.5" />
                <rect x="55" y="15" width="30" height="20" rx="2" fill="#fede00" opacity="0.7" />
              </svg>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.letter}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <div className={`
                    relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                    border border-gray-200 hover:border-gray-300 p-6 sm:p-8 h-full
                    group-hover:scale-105 group-hover:-translate-y-2
                    ${value.bgColor}
                  `}>
                    {/* Card Letter */}
                    <div className={`
                      absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center
                      text-2xl font-bold text-white shadow-lg
                      bg-gradient-to-r ${value.color}
                    `}>
                      {value.letter}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        bg-gradient-to-r ${value.color} text-white
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className={`
                        text-xl sm:text-2xl font-bold mb-3 sm:mb-4
                        ${value.textColor}
                      `}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <div className={`
                        w-8 h-8 rounded-full
                        bg-gradient-to-r ${value.color}
                      `} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
