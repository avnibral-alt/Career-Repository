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
  Sparkles,
  TrendingUp,
  Lightbulb,
  Award,
  Rocket,
  Star,
  Brain,
  Code,
  Palette,
  Globe,
  CheckCircle
} from 'lucide-react';

export function WhyWorkWithUs() {
  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'Where brilliant minds unite across borders to create magic.',
      emoji: '🤝',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/30',
      borderColor: 'border-blue-200/40',
      letterColor: 'text-blue-200/20'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast, break things (responsibly), and ship like there\'s no tomorrow.',
      emoji: '⚡',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50/30',
      borderColor: 'border-orange-200/40',
      letterColor: 'text-orange-200/20'
    },
    {
      letter: 'R',
      title: 'Own & Deliver Results',
      description: 'Take the wheel, own the outcome, and make it happen.',
      emoji: '🎯',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50/30',
      borderColor: 'border-green-200/40',
      letterColor: 'text-green-200/20'
    },
    {
      letter: 'D',
      title: 'Be Data-Driven',
      description: 'Let the numbers tell the story, not just your gut feeling.',
      emoji: '📊',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/30',
      borderColor: 'border-purple-200/40',
      letterColor: 'text-purple-200/20'
    },
    {
      letter: 'I',
      title: 'Iterate & Learn',
      description: 'Fail fast, learn faster, and keep the innovation engine running.',
      emoji: '🔄',
      icon: RefreshCw,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50/30',
      borderColor: 'border-indigo-200/40',
      letterColor: 'text-indigo-200/20'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put students first, because they\'re the future we\'re building.',
      emoji: '❤️',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50/30',
      borderColor: 'border-red-200/40',
      letterColor: 'text-red-200/20'
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

  const itemVariants = {
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
    <section id="why-work-with-us" className="py-16 lg:py-20 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-50/30 to-pink-100/20" />
        
        {/* Abstract accent shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-200 rounded-full blur-2xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* CARDIO Header - Main Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main CARDIO Heading */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-pink-600 to-pink-400 bg-clip-text text-transparent">
              CARDIO
            </span>
          </motion.h2>
          
          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our DNA: What drives JetLearn forward.
          </motion.p>
        </motion.div>

        {/* Values Grid - Premium 3x2 Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            return (
              <motion.div
                key={value.letter}
                variants={itemVariants}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(255, 207, 240, 0.25)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`relative p-8 rounded-2xl bg-white border ${value.borderColor} shadow-lg transition-all duration-500 h-full overflow-hidden`}>
                  {/* Letter watermark */}
                  <div className={`absolute top-6 right-6 text-8xl font-black ${value.letterColor} select-none pointer-events-none z-0`}>
                    {value.letter}
                  </div>
                  
                  {/* Background accent */}
                  <div className={`absolute inset-0 rounded-2xl ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon section */}
                    <div className="mb-6">
                      <motion.div 
                        className="w-16 h-16 flex items-center justify-center text-4xl mb-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {value.emoji}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed font-normal">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action - Centered Below Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #ffcf00 0%, #ff9500 100%)',
              color: '#000'
            }}
            whileHover={{ 
              y: -4,
              boxShadow: "0 25px 50px -12px rgba(255, 207, 0, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => {
              const element = document.getElementById('departments');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <span className="relative z-10 tracking-wide">Choose Your Team</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

