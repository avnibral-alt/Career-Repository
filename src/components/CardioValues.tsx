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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Our <span className="text-yellow-500 dark:text-yellow-400">CARDIO</span> Values
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer transform hover:-translate-y-2"
                  style={{
                    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === index 
                      ? '0 10px 25px rgba(0,0,0,0.15)' 
                      : '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Icon */}
                  <div className="text-center mb-3">
                    <span className="text-2xl" role="img" aria-label={value.title}>
                      {value.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tablet: 2 cards per row */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer transform hover:-translate-y-2"
                    style={{
                      transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredCard === index 
                        ? '0 10px 25px rgba(0,0,0,0.15)' 
                        : '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Icon */}
                    <div className="text-center mb-3">
                      <span className="text-2xl" role="img" aria-label={value.title}>
                        {value.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
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
                  style={{ scrollSnapAlign: 'start' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="bg-[#f7e2a0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 h-full cursor-pointer transform hover:-translate-y-2"
                    style={{
                      transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredCard === index 
                        ? '0 10px 25px rgba(0,0,0,0.15)' 
                        : '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Icon */}
                    <div className="text-center mb-3">
                      <span className="text-2xl" role="img" aria-label={value.title}>
                        {value.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2 leading-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}