import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CardioValues() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'Work together to achieve extraordinary results.',
      icon: '🤝',
      whyItMatters: 'Great things happen when diverse minds unite with a shared vision.'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast. Turn ideas into reality.',
      icon: '⚡',
      whyItMatters: 'Speed beats perfection. Progress over analysis paralysis.'
    },
    {
      letter: 'R',
      title: 'Own & Deliver Results',
      description: 'Own outcomes. Deliver on commitments.',
      icon: '🎯',
      whyItMatters: 'Accountability drives excellence. Your word is your bond.'
    },
    {
      letter: 'D',
      title: 'Be Data Driven',
      description: 'Decide with evidence, not guesswork.',
      icon: '📊',
      whyItMatters: 'Data reveals truth. Let numbers guide your decisions.'
    },
    {
      letter: 'I',
      title: 'Iterate & Learn',
      description: 'Experiment. Improve. Grow.',
      icon: '🔄',
      whyItMatters: 'Every failure is a lesson. Continuous improvement is the path to mastery.'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put learners first. Always.',
      icon: '🎓',
      whyItMatters: 'When learners succeed, we all succeed. Their success is our mission.'
    }
  ];

  // Mobile carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  // Auto-scroll for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  interface Value {
    letter: string;
    title: string;
    description: string;
    icon: string;
    whyItMatters: string;
  }

  const CardComponent = ({ value, index, isMobile = false }: { value: Value, index: number, isMobile?: boolean }) => (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onFocus={() => setHoveredCard(index)}
      onBlur={() => setHoveredCard(null)}
    >
      {/* Value Card with Brand Colors */}
      <div 
        className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 p-6 h-full group-hover:scale-105 group-hover:-translate-y-2 focus-within:ring-4 focus-within:ring-yellow-300 focus-within:ring-opacity-50"
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderColor: '#f59e0b'
        }}
        tabIndex={0}
        role="button"
        aria-label={`${value.title}: ${value.description}`}
      >
        {/* Icon */}
        <div className="text-center mb-4">
          <span className="text-4xl" role="img" aria-label={value.title}>
            {value.icon}
          </span>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
            {value.title}
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed font-medium mb-3">
            {value.description}
          </p>
          
          {/* Why it matters tooltip */}
          <AnimatePresence>
            {hoveredCard === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 rounded-lg p-3 shadow-lg border border-yellow-200"
              >
                <p className="text-xs text-gray-700 font-medium italic">
                  {value.whyItMatters}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="cardio-values" 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-yellow-500 dark:text-yellow-400">CARDIO</span> Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that drive everything we do.
          </p>
        </motion.div>

        {/* Desktop: Asymmetric 2-row mosaic grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-6">
            {/* Top row: 3 cards */}
            {values.slice(0, 3).map((value, index) => (
              <div key={value.letter} className="col-span-2">
                <CardComponent value={value} index={index} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-6 mt-6">
            {/* Bottom row: 3 cards */}
            {values.slice(3, 6).map((value, index) => (
              <div key={value.letter} className="col-span-2">
                <CardComponent value={value} index={index + 3} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 3-column grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={value.letter}>
                <CardComponent value={value} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal carousel with peeking cards */}
        <div className="md:hidden">
          <div className="relative">
            {/* Carousel container */}
            <div 
              ref={carouselRef}
              className="flex overflow-hidden rounded-2xl"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {values.map((value, index) => (
                <div
                  key={value.letter}
                  className="flex-shrink-0 w-4/5 px-2"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <motion.div
                    animate={{ 
                      scale: currentSlide === index ? 1 : 0.9,
                      opacity: currentSlide === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardComponent value={value} index={index} isMobile={true} />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
              aria-label="Previous card"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
              aria-label="Next card"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-yellow-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}