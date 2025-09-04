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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 border-none">
            Our <span style={{ color: '#fede00' }}>CARDIO</span> Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto border-none">
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
            {/* Playing Cards Stack */}
            <div className="flex gap-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative"
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    transform: `translateY(${index * 3}px) rotate(${index * 1}deg)`,
                    zIndex: values.length - index
                  }}
                >
                  {/* Playing Card with Brand Colors */}
                  <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Card Corner - Top Left */}
                    <div className="absolute top-2 left-2 text-sm font-bold text-white">
                      {value.letter}
                    </div>
                    
                    {/* Card Corner - Bottom Right */}
                    <div className="absolute bottom-2 right-2 text-sm font-bold text-white transform rotate-180">
                      {value.letter}
                    </div>
                    
                    {/* Center Letter */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
                      {value.letter}
                    </div>
                    
                    {/* Card Suit/Pattern */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4 text-white text-xl">
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
              {/* Value Card with Brand Colors */}
              <div 
                className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 p-6 sm:p-8 h-full group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  borderColor: '#f59e0b'
                }}
              >
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
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
