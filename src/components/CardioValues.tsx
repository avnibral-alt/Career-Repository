import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

export function CardioValues() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ transformStyle: 'preserve-3d' }}>
        {/* Floating 3D orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"
          style={{
            transform: `translateZ(${mousePosition.x * 50}px) translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl"
          style={{
            transform: `translateZ(${mousePosition.y * 50}px) translateX(${-mousePosition.x * 20}px) translateY(${-mousePosition.y * 20}px)`,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: [360, 0],
            rotateX: [360, 180, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"
          style={{
            transform: `translateZ(${(mousePosition.x + mousePosition.y) * 30}px) translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px)`,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional 3D floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-200 rounded-full blur-xl"
          style={{
            transform: `translateZ(${mousePosition.x * 40}px) translateX(${-mousePosition.x * 25}px) translateY(${mousePosition.y * 25}px)`,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: [0, 180, 360],
            rotateX: [0, 90, 180, 270, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" 
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `translateZ(${mousePosition.y * 20}px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
        }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20, rotateX: -30, translateZ: -100 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600 inline-block">
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
                    textShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
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

        {/* 3D Cards Row Display */}
        <div className="w-full">
          {/* All Screen Sizes: Individual 3D Cards in a single row */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-4 overflow-x-auto" style={{ transformStyle: 'preserve-3d' }}>
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative group cursor-pointer"
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    rotateX: -60, 
                    translateZ: -200,
                    scale: 0.8
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0, 
                    translateZ: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15, 
                    type: "spring", 
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${hoveredCard === index ? 50 : 0}px) rotateX(${hoveredCard === index ? 15 : 0}deg) rotateY(${hoveredCard === index ? 10 : 0}deg) scale(${hoveredCard === index ? 1.1 : 1})`
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateX: 15,
                    rotateY: 10,
                    translateZ: 50,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                  animate={{
                    rotateY: [0, 2, -2, 0],
                    translateZ: [0, 5, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                >
                  {/* 3D Card Container */}
                  <motion.div
                    className="relative w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 lg:w-44 lg:h-52 xl:w-48 xl:h-64 flex-shrink-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Front */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center"
                      style={{
                        transform: 'translateZ(20px)',
                        transformStyle: 'preserve-3d',
                        boxShadow: hoveredCard === index 
                          ? '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.8)' 
                          : '0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                      }}
                      animate={{
                        rotateY: hoveredCard === index ? [0, 1, -1, 0] : 0,
                        scale: hoveredCard === index ? [1, 1.02, 1] : 1
                      }}
                      transition={{ duration: 3, repeat: hoveredCard === index ? Infinity : 0 }}
                    >
                      {/* Letter Badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl shadow-lg"
                        style={{ transform: 'translateZ(30px)' }}
                        animate={{
                          rotateY: [0, 360],
                          scale: hoveredCard === index ? [1, 1.2, 1] : [1, 1.05, 1]
                        }}
                        transition={{
                          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        {value.letter}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className="mb-2 sm:mb-3 lg:mb-4 relative"
                        whileHover={{
                          rotateY: 360,
                          rotateX: 180,
                          scale: 1.5,
                          transition: { duration: 1, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.span 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block relative" 
                          role="img" 
                          aria-label={value.title}
                          style={{ transformStyle: 'preserve-3d' }}
                          animate={{
                            rotateY: [0, 15, -15, 0],
                            rotateX: [0, 8, -8, 0],
                            translateZ: [0, 15, 0],
                            scale: hoveredCard === index ? [1, 1.15, 1] : [1, 1.08, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {value.icon}
                        </motion.span>
                        
                        {/* Icon glow effect */}
                        <motion.div
                          className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-0 blur-md"
                          animate={{
                            opacity: hoveredCard === index ? [0, 0.8, 0] : 0,
                            scale: hoveredCard === index ? [1, 1.3, 1] : 1
                          }}
                          transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                        >
                          {value.icon}
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3 leading-tight"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.05,
                          translateZ: 8,
                          textShadow: "0 0 15px rgba(0, 0, 0, 0.3)"
                        }}
                        animate={{
                          textShadow: hoveredCard === index 
                            ? ["0 0 8px rgba(0, 0, 0, 0.2)", "0 0 15px rgba(0, 0, 0, 0.4)", "0 0 8px rgba(0, 0, 0, 0.2)"]
                            : "0 0 4px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 2.5, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-xs sm:text-xs md:text-sm text-gray-700 leading-relaxed"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.03,
                          translateZ: 5
                        }}
                        animate={{
                          opacity: hoveredCard === index ? [0.8, 1, 0.8] : 0.8
                        }}
                        transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.description}
                      </motion.p>
                    </motion.div>

                    {/* Card Back/Shadow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl"
                      style={{
                        transform: 'translateZ(-10px) translateY(8px)',
                        transformStyle: 'preserve-3d',
                        filter: 'blur(8px)'
                      }}
                      animate={{
                        scale: hoveredCard === index ? [1, 1.05, 1] : 1,
                        opacity: hoveredCard === index ? [0.3, 0.5, 0.3] : 0.3
                      }}
                      transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet: 3D Cards in 2 columns */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 px-4" style={{ transformStyle: 'preserve-3d' }}>
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative group cursor-pointer"
                  initial={{ 
                    opacity: 0, 
                    y: 40, 
                    rotateX: -45, 
                    translateZ: -150,
                    scale: 0.9
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0, 
                    translateZ: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 120
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${hoveredCard === index ? 40 : 0}px) rotateX(${hoveredCard === index ? 12 : 0}deg) rotateY(${hoveredCard === index ? 8 : 0}deg) scale(${hoveredCard === index ? 1.08 : 1})`
                  }}
                  whileHover={{
                    scale: 1.12,
                    rotateX: 12,
                    rotateY: 8,
                    translateZ: 40,
                    transition: { duration: 0.3, type: "spring", stiffness: 250 }
                  }}
                  animate={{
                    rotateY: [0, 1.5, -1.5, 0],
                    translateZ: [0, 3, 0],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }
                  }}
                >
                  {/* 3D Card Container */}
                  <motion.div
                    className="relative w-full h-56"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Front */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/30 p-5 flex flex-col items-center justify-center text-center"
                      style={{
                        transform: 'translateZ(15px)',
                        transformStyle: 'preserve-3d',
                        boxShadow: hoveredCard === index 
                          ? '0 25px 50px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)' 
                          : '0 12px 25px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                      }}
                      animate={{
                        rotateY: hoveredCard === index ? [0, 0.8, -0.8, 0] : 0,
                        scale: hoveredCard === index ? [1, 1.015, 1] : 1
                      }}
                      transition={{ duration: 2.5, repeat: hoveredCard === index ? Infinity : 0 }}
                    >
                      {/* Letter Badge */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ transform: 'translateZ(25px)' }}
                        animate={{
                          rotateY: [0, 360],
                          scale: hoveredCard === index ? [1, 1.15, 1] : [1, 1.03, 1]
                        }}
                        transition={{
                          rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                          scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        {value.letter}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className="mb-3 relative"
                        whileHover={{
                          rotateY: 360,
                          rotateX: 180,
                          scale: 1.4,
                          transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.span 
                          className="text-4xl inline-block relative" 
                          role="img" 
                          aria-label={value.title}
                          style={{ transformStyle: 'preserve-3d' }}
                          animate={{
                            rotateY: [0, 12, -12, 0],
                            rotateX: [0, 6, -6, 0],
                            translateZ: [0, 12, 0],
                            scale: hoveredCard === index ? [1, 1.12, 1] : [1, 1.06, 1]
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {value.icon}
                        </motion.span>
                        
                        {/* Icon glow effect */}
                        <motion.div
                          className="absolute inset-0 text-4xl opacity-0 blur-sm"
                          animate={{
                            opacity: hoveredCard === index ? [0, 0.7, 0] : 0,
                            scale: hoveredCard === index ? [1, 1.25, 1] : 1
                          }}
                          transition={{ duration: 1.8, repeat: hoveredCard === index ? Infinity : 0 }}
                        >
                          {value.icon}
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-base font-bold text-white mb-2 leading-tight"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.04,
                          translateZ: 6,
                          textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)"
                        }}
                        animate={{
                          textShadow: hoveredCard === index 
                            ? ["0 0 12px rgba(255, 255, 255, 0.35)", "0 0 20px rgba(255, 255, 255, 0.6)", "0 0 12px rgba(255, 255, 255, 0.35)"]
                            : "0 0 6px rgba(255, 255, 255, 0.25)"
                        }}
                        transition={{ duration: 2.2, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-xs text-white/90 leading-relaxed"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.02,
                          translateZ: 4
                        }}
                        animate={{
                          opacity: hoveredCard === index ? [0.9, 1, 0.9] : 0.9
                        }}
                        transition={{ duration: 1.8, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.description}
                      </motion.p>
                    </motion.div>

                    {/* Card Back/Shadow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl"
                      style={{
                        transform: 'translateZ(-8px) translateY(6px)',
                        transformStyle: 'preserve-3d',
                        filter: 'blur(6px)'
                      }}
                      animate={{
                        scale: hoveredCard === index ? [1, 1.04, 1] : 1,
                        opacity: hoveredCard === index ? [0.3, 0.45, 0.3] : 0.3
                      }}
                      transition={{ duration: 1.8, repeat: hoveredCard === index ? Infinity : 0 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: 3D Cards in vertical stack */}
          <div className="md:hidden">
            <div className="space-y-6 px-4" style={{ transformStyle: 'preserve-3d' }}>
              {values.map((value, index) => (
                <motion.div
                  key={value.letter}
                  className="relative group cursor-pointer"
                  initial={{ 
                    opacity: 0, 
                    y: 30, 
                    rotateX: -30, 
                    translateZ: -100,
                    scale: 0.95
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0, 
                    translateZ: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08, 
                    type: "spring", 
                    stiffness: 140
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(${hoveredCard === index ? 30 : 0}px) rotateX(${hoveredCard === index ? 8 : 0}deg) rotateY(${hoveredCard === index ? 5 : 0}deg) scale(${hoveredCard === index ? 1.05 : 1})`
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: 8,
                    rotateY: 5,
                    translateZ: 30,
                    transition: { duration: 0.25, type: "spring", stiffness: 300 }
                  }}
                  animate={{
                    rotateY: [0, 1, -1, 0],
                    translateZ: [0, 2, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {/* 3D Card Container */}
                  <motion.div
                    className="relative w-full h-48"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Front */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/30 p-4 flex flex-col items-center justify-center text-center"
                      style={{
                        transform: 'translateZ(12px)',
                        transformStyle: 'preserve-3d',
                        boxShadow: hoveredCard === index 
                          ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                          : '0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                      animate={{
                        rotateY: hoveredCard === index ? [0, 0.5, -0.5, 0] : 0,
                        scale: hoveredCard === index ? [1, 1.01, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                    >
                      {/* Letter Badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        style={{ transform: 'translateZ(20px)' }}
                        animate={{
                          rotateY: [0, 360],
                          scale: hoveredCard === index ? [1, 1.1, 1] : [1, 1.02, 1]
                        }}
                        transition={{
                          rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        {value.letter}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className="mb-3 relative"
                        whileHover={{
                          rotateY: 360,
                          rotateX: 180,
                          scale: 1.3,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <motion.span 
                          className="text-3xl inline-block relative" 
                          role="img" 
                          aria-label={value.title}
                          style={{ transformStyle: 'preserve-3d' }}
                          animate={{
                            rotateY: [0, 8, -8, 0],
                            rotateX: [0, 4, -4, 0],
                            translateZ: [0, 8, 0],
                            scale: hoveredCard === index ? [1, 1.08, 1] : [1, 1.04, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {value.icon}
                        </motion.span>
                        
                        {/* Icon glow effect */}
                        <motion.div
                          className="absolute inset-0 text-3xl opacity-0 blur-sm"
                          animate={{
                            opacity: hoveredCard === index ? [0, 0.6, 0] : 0,
                            scale: hoveredCard === index ? [1, 1.2, 1] : 1
                          }}
                          transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0 }}
                        >
                          {value.icon}
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-base font-bold text-white mb-2 leading-tight"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.03,
                          translateZ: 4,
                          textShadow: "0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.3)"
                        }}
                        animate={{
                          textShadow: hoveredCard === index 
                            ? ["0 0 8px rgba(255, 255, 255, 0.3)", "0 0 15px rgba(255, 255, 255, 0.5)", "0 0 8px rgba(255, 255, 255, 0.3)"]
                            : "0 0 4px rgba(255, 255, 255, 0.2)"
                        }}
                        transition={{ duration: 1.8, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-xs text-white/90 leading-relaxed"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{
                          scale: 1.01,
                          translateZ: 3
                        }}
                        animate={{
                          opacity: hoveredCard === index ? [0.9, 1, 0.9] : 0.9
                        }}
                        transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {value.description}
                      </motion.p>
                    </motion.div>

                    {/* Card Back/Shadow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl"
                      style={{
                        transform: 'translateZ(-6px) translateY(4px)',
                        transformStyle: 'preserve-3d',
                        filter: 'blur(4px)'
                      }}
                      animate={{
                        scale: hoveredCard === index ? [1, 1.03, 1] : 1,
                        opacity: hoveredCard === index ? [0.3, 0.4, 0.3] : 0.3
                      }}
                      transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0 }}
                    />
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