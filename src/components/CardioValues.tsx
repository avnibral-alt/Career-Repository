import React, { useState } from 'react';
import { motion } from 'motion/react';

export function CardioValues() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'Work together to achieve extraordinary results.',
      icon: '🤝'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast. Turn ideas into reality.',
      icon: '⚡'
    },
    {
      letter: 'R',
      title: 'Own & Deliver Results',
      description: 'Own outcomes. Deliver on commitments.',
      icon: '🎯'
    },
    {
      letter: 'D',
      title: 'Be Data Driven',
      description: 'Decide with evidence, not guesswork.',
      icon: '📊'
    },
    {
      letter: 'I',
      title: 'Iterate & Learn',
      description: 'Experiment. Improve. Grow.',
      icon: '🔄'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put learners first. Always.',
      icon: '🎓'
    }
  ];

  return (
    <section 
      id="cardio-values" 
      className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transformStyle: 'preserve-3d' }}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Our <span className="text-yellow-500 dark:text-yellow-400 inline-block">
              {['C', 'A', 'R', 'D', 'I', 'O'].map((letter, index) => (
                <motion.span
                  key={letter}
                  className="inline-block"
                  initial={{ 
                    opacity: 0, 
                    rotateX: -90, 
                    translateZ: -50 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    rotateX: 0, 
                    translateZ: 0 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotateY: 15,
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(251, 191, 36, 0.5)"
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    display: 'inline-block',
                    marginRight: '2px'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span> Values
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            The principles that drive everything we do.
          </p>
        </motion.div>

        {/* Compact Single Row Layout */}
        <div className="w-full">
          {/* Desktop: Single row with all 6 cards */}
          <div className="hidden lg:flex lg:gap-4 lg:justify-between">
            {values.map((value, index) => (
              <motion.div
                key={value.letter}
                className="flex-1 max-w-[16%] min-w-0"
                initial={{ opacity: 0, y: 20, rotateX: -15, translateZ: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === index 
                      ? 'translateY(-12px) translateZ(20px) rotateX(-5deg) rotateY(5deg)' 
                      : 'translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)',
                    boxShadow: hoveredCard === index 
                      ? '0 20px 40px rgba(0,0,0,0.2), 0 0 30px rgba(251, 191, 36, 0.3)' 
                      : '0 8px 16px rgba(0,0,0,0.1), 0 0 10px rgba(251, 191, 36, 0.1)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="text-center mb-3"
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.span 
                      className="text-2xl inline-block" 
                      role="img" 
                      aria-label={value.title}
                      animate={{
                        rotateY: [0, 5, -5, 0],
                        translateZ: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {value.icon}
                    </motion.span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 10px rgba(0,0,0,0.3)"
                    }}
                  >
                    {value.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-700 text-center leading-relaxed"
                    whileHover={{
                      scale: 1.02
                    }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Tablet: 2 cards per row */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  initial={{ opacity: 0, y: 20, rotateX: -15, translateZ: -100 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredCard === index 
                        ? 'translateY(-12px) translateZ(20px) rotateX(-5deg) rotateY(5deg)' 
                        : 'translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)',
                      boxShadow: hoveredCard === index 
                        ? '0 20px 40px rgba(0,0,0,0.2), 0 0 30px rgba(251, 191, 36, 0.3)' 
                        : '0 8px 16px rgba(0,0,0,0.1), 0 0 10px rgba(251, 191, 36, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="text-center mb-3"
                      whileHover={{
                        rotateY: 360,
                        scale: 1.2,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span 
                        className="text-2xl inline-block" 
                        role="img" 
                        aria-label={value.title}
                        animate={{
                          rotateY: [0, 5, -5, 0],
                          translateZ: [0, 5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {value.icon}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(0,0,0,0.3)"
                      }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-gray-700 text-center leading-relaxed"
                      whileHover={{
                        scale: 1.02
                      }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal scrolling single row */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="flex-shrink-0 w-72"
                  style={{ scrollSnapAlign: 'start', transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, y: 20, rotateX: -15, translateZ: -100 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div 
                    className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: hoveredCard === index 
                        ? 'translateY(-12px) translateZ(20px) rotateX(-5deg) rotateY(5deg)' 
                        : 'translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)',
                      boxShadow: hoveredCard === index 
                        ? '0 20px 40px rgba(0,0,0,0.2), 0 0 30px rgba(251, 191, 36, 0.3)' 
                        : '0 8px 16px rgba(0,0,0,0.1), 0 0 10px rgba(251, 191, 36, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="text-center mb-3"
                      whileHover={{
                        rotateY: 360,
                        scale: 1.2,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span 
                        className="text-2xl inline-block" 
                        role="img" 
                        aria-label={value.title}
                        animate={{
                          rotateY: [0, 5, -5, 0],
                          translateZ: [0, 5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {value.icon}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(0,0,0,0.3)"
                      }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-gray-700 text-center leading-relaxed"
                      whileHover={{
                        scale: 1.02
                      }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}