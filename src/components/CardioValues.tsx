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
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500"
    >
      {/* Simple Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600 inline-block">
              {['C', 'A', 'R', 'D', 'I', 'O'].map((letter, index) => (
                <motion.span
                  key={letter}
                  className="inline-block"
                  initial={{ 
                    opacity: 0, 
                    y: -20
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -5
                  }}
                  style={{
                    display: 'inline-block',
                    marginRight: '4px'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span> Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">
            The principles that drive everything we do.
          </p>
        </motion.div>

        {/* Animated Cards Row Display */}
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 px-4"
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of cards */}
            {values.map((value, index) => (
              <motion.div
                key={`first-${value.letter}`}
                className="relative group cursor-pointer flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Card */}
                <div className="w-48 h-64 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 flex flex-col items-center justify-center text-center shadow-lg">
                  {/* Letter Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: hoveredCard === index ? [1, 1.2, 1] : [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {value.letter}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="mb-4 relative"
                    whileHover={{
                      scale: 1.3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.span 
                      className="text-5xl inline-block" 
                      role="img" 
                      aria-label={value.title}
                      animate={{
                        y: [0, -5, 0],
                        scale: hoveredCard === index ? [1, 1.1, 1] : [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {value.icon}
                    </motion.span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-3 leading-tight"
                    whileHover={{
                      scale: 1.05
                    }}
                  >
                    {value.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-700 leading-relaxed"
                    whileHover={{
                      scale: 1.02
                    }}
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}

            {/* Second set of cards for seamless loop */}
            {values.map((value, index) => (
              <motion.div
                key={`second-${value.letter}`}
                className="relative group cursor-pointer flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index + 6)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Card */}
                <div className="w-48 h-64 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 flex flex-col items-center justify-center text-center shadow-lg">
                  {/* Letter Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: hoveredCard === index + 6 ? [1, 1.2, 1] : [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {value.letter}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="mb-4 relative"
                    whileHover={{
                      scale: 1.3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.span 
                      className="text-5xl inline-block" 
                      role="img" 
                      aria-label={value.title}
                      animate={{
                        y: [0, -5, 0],
                        scale: hoveredCard === index + 6 ? [1, 1.1, 1] : [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {value.icon}
                    </motion.span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-3 leading-tight"
                    whileHover={{
                      scale: 1.05
                    }}
                  >
                    {value.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-700 leading-relaxed"
                    whileHover={{
                      scale: 1.02
                    }}
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}