import React from 'react';
import { motion } from 'motion/react';

export function CardioValues() {
  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'We believe in the power of working together to achieve extraordinary results.'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Taking initiative and moving quickly to turn ideas into reality.'
    },
    {
      letter: 'R',
      title: 'Own and Deliver Results',
      description: 'Taking full ownership of outcomes and consistently delivering on commitments.'
    },
    {
      letter: 'D',
      title: 'Be Data Driven',
      description: 'Making informed decisions based on data, metrics, and evidence.'
    },
    {
      letter: 'I',
      title: 'Iterate and Learn',
      description: 'Continuously improving through rapid experimentation and learning from feedback.'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Putting learners at the center of everything we do, always striving to improve their experience.'
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

        {/* Hands Carrying Playing Cards */}
        <div className="relative flex justify-center items-center mb-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Hands SVG */}
            <svg 
              width="400" 
              height="200" 
              viewBox="0 0 400 200" 
              className="text-gray-400"
              fill="currentColor"
            >
              {/* Left Hand */}
              <path d="M80 160 Q70 150 80 140 Q90 130 100 140 Q110 150 100 160 Q90 170 80 160 Z" />
              <path d="M90 140 Q80 130 90 120 Q100 110 110 120 Q120 130 110 140 Q100 150 90 140 Z" />
              <path d="M100 120 Q90 110 100 100 Q110 90 120 100 Q130 110 120 120 Q110 130 100 120 Z" />
              <path d="M110 100 Q100 90 110 80 Q120 70 130 80 Q140 90 130 100 Q120 110 110 100 Z" />
              
              {/* Right Hand */}
              <path d="M320 160 Q310 150 320 140 Q330 130 340 140 Q350 150 340 160 Q330 170 320 160 Z" />
              <path d="M310 140 Q300 130 310 120 Q320 110 330 120 Q340 130 330 140 Q320 150 310 140 Z" />
              <path d="M300 120 Q290 110 300 100 Q310 90 320 100 Q330 110 320 120 Q310 130 300 120 Z" />
              <path d="M290 100 Q280 90 290 80 Q300 70 310 80 Q320 90 310 100 Q300 110 290 100 Z" />
            </svg>

            {/* Playing Cards Stack */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex">
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    transform: `translateX(${index * 8}px) translateY(${index * 2}px) rotate(${index * 2}deg)`,
                    zIndex: values.length - index
                  }}
                >
                  {/* Playing Card */}
                  <div className="w-20 h-28 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Card Corner - Top Left */}
                    <div className="absolute top-1 left-1 text-xs font-bold text-gray-800">
                      {value.letter}
                    </div>
                    
                    {/* Card Corner - Bottom Right */}
                    <div className="absolute bottom-1 right-1 text-xs font-bold text-gray-800 transform rotate-180">
                      {value.letter}
                    </div>
                    
                    {/* Center Letter */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800">
                      {value.letter}
                    </div>
                    
                    {/* Card Suit/Pattern */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-2 text-yellow-500 text-lg">
                      ♠
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Description Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.letter}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Value Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-300 p-6 sm:p-8 h-full group-hover:scale-105 group-hover:-translate-y-2">
                {/* Card Letter Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg border-2 border-white bg-gradient-to-r from-yellow-500 to-yellow-600">
                  {value.letter}
                </div>

                {/* Content */}
                <div className="text-center pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
