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
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 opacity-15" style={{ transformStyle: 'preserve-3d' }}>
        {/* Floating 3D orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-2xl"
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
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-cyan-400 rounded-full blur-xl"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-300 inline-block">
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
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
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
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            The principles that drive everything we do.
          </p>
        </motion.div>

        {/* Single Row Values Display */}
        <div className="w-full">
          {/* Desktop: Single integrated row */}
          <div className="hidden lg:block">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, y: 30, rotateX: -20, translateZ: -200 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                translateZ: 20,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-between">
                {values.map((value, index) => (
                  <motion.div
                    key={value.letter}
                    className="flex-1 text-center group cursor-pointer relative"
                    initial={{ opacity: 0, y: 20, rotateX: -30, translateZ: -150 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: `translateZ(${hoveredCard === index ? 30 : 0}px) rotateX(${hoveredCard === index ? 10 : 0}deg) rotateY(${hoveredCard === index ? 5 : 0}deg)`
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateX: 10,
                      rotateY: 5,
                      translateZ: 30,
                      transition: { duration: 0.3, type: "spring", stiffness: 200 }
                    }}
                  >
                    {/* 3D Card Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl border border-white/30"
                      style={{
                        transform: 'translateZ(-10px)',
                        transformStyle: 'preserve-3d',
                        boxShadow: hoveredCard === index 
                          ? '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                          : '0 10px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                      animate={{
                        rotateY: hoveredCard === index ? [0, 2, -2, 0] : 0,
                        scale: hoveredCard === index ? [1, 1.02, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                    />
                    {/* Icon */}
                    <motion.div 
                      className="mb-4 relative z-10"
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
                          rotateY: [0, 10, -10, 0],
                          rotateX: [0, 5, -5, 0],
                          translateZ: [0, 10, 0],
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
                      
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 text-4xl opacity-0 blur-sm"
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
                      className="text-lg font-bold text-white mb-2 leading-tight relative z-10"
                      style={{ transformStyle: 'preserve-3d' }}
                      whileHover={{
                        scale: 1.05,
                        translateZ: 5,
                        textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)"
                      }}
                      animate={{
                        textShadow: hoveredCard === index 
                          ? ["0 0 10px rgba(255, 255, 255, 0.3)", "0 0 20px rgba(255, 255, 255, 0.6)", "0 0 10px rgba(255, 255, 255, 0.3)"]
                          : "0 0 5px rgba(255, 255, 255, 0.2)"
                      }}
                      transition={{ duration: 2, repeat: hoveredCard === index ? Infinity : 0 }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-white/80 leading-relaxed px-2 relative z-10"
                      style={{ transformStyle: 'preserve-3d' }}
                      whileHover={{
                        scale: 1.02,
                        translateZ: 3
                      }}
                      animate={{
                        opacity: hoveredCard === index ? [0.8, 1, 0.8] : 0.8
                      }}
                      transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0 }}
                    >
                      {value.description}
                    </motion.p>

                    {/* Separator line (except for last item) */}
                    {index < values.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/20"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden md:block lg:hidden">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.letter}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20, rotateX: -15, translateZ: -100 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{
                        rotateY: 360,
                        scale: 1.3,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span 
                        className="text-3xl inline-block" 
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
                      className="text-lg font-bold text-white mb-2 leading-tight"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-white/80 leading-relaxed"
                      whileHover={{
                        scale: 1.02
                      }}
                    >
                      {value.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="space-y-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.letter}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 20, rotateX: -15, translateZ: -100 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{
                        rotateY: 360,
                        scale: 1.3,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.span 
                        className="text-3xl inline-block" 
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
                      className="text-lg font-bold text-white mb-2 leading-tight"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-white/80 leading-relaxed"
                      whileHover={{
                        scale: 1.02
                      }}
                    >
                      {value.description}
                    </motion.p>

                    {/* Separator line (except for last item) */}
                    {index < values.length - 1 && (
                      <div className="mt-8 w-full h-px bg-white/20"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}