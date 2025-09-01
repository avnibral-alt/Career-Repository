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
      icon: Users,
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      borderColor: 'border-blue-200/60',
      letterColor: 'text-blue-400/40',
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-100'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast, break things (responsibly), and ship like there\'s no tomorrow.',
      icon: Zap,
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
      borderColor: 'border-orange-200/60',
      letterColor: 'text-orange-400/40',
      iconColor: 'text-orange-600',
      iconBgColor: 'bg-orange-100'
    },
    {
      letter: 'R',
      title: 'Own & Deliver Results',
      description: 'Take the wheel, own the outcome, and make it happen.',
      icon: Target,
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100/50',
      borderColor: 'border-green-200/60',
      letterColor: 'text-green-400/40',
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100'
    },
    {
      letter: 'D',
      title: 'Be Data-Driven',
      description: 'Let the numbers tell the story, not just your gut feeling.',
      icon: BarChart3,
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      borderColor: 'border-purple-200/60',
      letterColor: 'text-purple-400/40',
      iconColor: 'text-purple-600',
      iconBgColor: 'bg-purple-100'
    },
    {
      letter: 'I',
      title: 'Iterate & Learn',
      description: 'Fail fast, learn faster, and keep the innovation engine running.',
      icon: RefreshCw,
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100/50',
      borderColor: 'border-indigo-200/60',
      letterColor: 'text-indigo-400/40',
      iconColor: 'text-indigo-600',
      iconBgColor: 'bg-indigo-100'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put students first, because they\'re the future we\'re building.',
      icon: Heart,
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100/50',
      borderColor: 'border-red-200/60',
      letterColor: 'text-red-400/40',
      iconColor: 'text-red-600',
      iconBgColor: 'bg-red-100'
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
    <section id="why-work-with-us" className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50" />
        
        {/* Abstract accent shapes with brand yellow */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-200 rounded-full blur-2xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300 rounded-full blur-xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - What Sets JetLearn Apart */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Sets JetLearn Apart
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Core Values (CARDIO) — the DNA that drives JetLearn forward.
          </motion.p>
        </motion.div>

        {/* Values Grid - Premium 3x2 Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto"
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
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(254, 222, 0, 0.3)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`relative p-6 rounded-2xl bg-white border ${value.borderColor} shadow-lg transition-all duration-500 h-full overflow-hidden`}>
                  {/* Letter watermark - bottom-right diagonal with shine effect */}
                  <div className={`absolute bottom-4 right-4 text-8xl font-black ${value.letterColor} select-none pointer-events-none z-0 transform rotate-12 drop-shadow-lg`}>
                    <div className="relative">
                      {value.letter}
                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 transform -skew-x-12" />
                    </div>
                  </div>
                  
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-2xl ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon section */}
                    <div className="mb-5">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl ${value.iconBgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className={`w-6 h-6 ${value.iconColor} transition-all duration-300`} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action - Compact Brand Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-base transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-md"
            style={{ 
              backgroundColor: '#fede00',
              color: '#000'
            }}
            whileHover={{ 
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(254, 222, 0, 0.4)"
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            
            <span className="relative z-10">Choose Your Team</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

