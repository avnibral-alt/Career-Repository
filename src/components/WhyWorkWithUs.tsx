import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  RefreshCw, 
  Heart,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function WhyWorkWithUs() {
  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'Work together across borders and cultures to achieve extraordinary results.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      letter: 'B',
      title: 'Bias for Action',
      description: 'Move fast, take calculated risks, and turn ideas into reality quickly.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      letter: 'R',
      title: 'Own and Deliver Results',
      description: 'Take full ownership of your work and consistently deliver exceptional outcomes.',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      letter: 'D',
      title: 'Be Data-Driven',
      description: 'Make informed decisions based on data, metrics, and measurable insights.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      letter: 'I',
      title: 'Iterate and Learn',
      description: 'Embrace continuous improvement and learn from every experience.',
      icon: RefreshCw,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put our students first and create exceptional learning experiences.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    }
  ];

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

  const cardVariants = {
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

  return (
    <section id="why-work-with-us" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Brand badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Core Values</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Work With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a team that values collaboration, innovation, and making a real impact in global education.
          </p>
        </motion.div>

        {/* Values Grid - Compact Design */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <motion.div
                key={value.letter}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative"
              >
                <div className="relative p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    {/* Letter badge */}
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-lg font-bold text-white">{value.letter}</span>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      {/* Icon and title row */}
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {value.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} blur-xl opacity-10`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => {
              const element = document.getElementById('departments');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Choose the Team You Want to Make an Impact With</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
