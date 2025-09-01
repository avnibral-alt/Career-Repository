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
      title: 'COLLABORATE',
      description: 'Where brilliant minds unite across borders to create magic.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      tag: 'Global Team',
      accent: 'bg-blue-100'
    },
    {
      letter: 'A',
      title: 'BIAS FOR ACTION',
      description: 'Move fast, break things (responsibly), and ship like there\'s no tomorrow.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      tag: 'Fast Execution',
      accent: 'bg-orange-100'
    },
    {
      letter: 'R',
      title: 'OWN AND DELIVER RESULTS',
      description: 'Take the wheel, own the outcome, and make it happen.',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      tag: 'Excellence',
      accent: 'bg-green-100'
    },
    {
      letter: 'D',
      title: 'BE DATA-DRIVEN',
      description: 'Let the numbers tell the story, not just your gut feeling.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      tag: 'Analytics',
      accent: 'bg-purple-100'
    },
    {
      letter: 'I',
      title: 'ITERATE AND LEARN',
      description: 'Fail fast, learn faster, and keep the innovation engine running.',
      icon: RefreshCw,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      tag: 'Innovation',
      accent: 'bg-indigo-100'
    },
    {
      letter: 'O',
      title: 'LEARNER OBSESSION',
      description: 'Put students first, because they\'re the future we\'re building.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      tag: 'Student First',
      accent: 'bg-red-100'
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
    <section id="why-work-with-us" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Enhanced Premium Design */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Brand badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Our DNA</span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Work With Us
            </span>
            {/* Decorative accent */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We're not just another EdTech company. We're a revolution in the making, and we need rebels with a cause.
          </motion.p>
        </motion.div>

        {/* CARDIO Header - Premium Design */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border-2 border-gray-100 shadow-lg backdrop-blur-sm">
            {['C', 'A', 'R', 'D', 'I', 'O'].map((letter, index) => (
              <motion.span 
                key={letter}
                className="text-2xl md:text-3xl font-black text-gray-900 tracking-wider"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  color: '#ffcf00',
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.div 
              className="ml-4 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-gray-600 block">Our Core Values</span>
              <span className="text-xs text-gray-500">Building Excellence Together</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Grid - Premium Card Design */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`relative p-6 rounded-2xl bg-white border-2 ${value.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}>
                  {/* Background accent with gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-10 rounded-bl-full`} />
                  
                  <div className="relative z-10">
                    {/* Header with enhanced layout */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-lg font-black text-white">{value.letter}</span>
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Title with better typography */}
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-gray-800 transition-colors mb-3 tracking-wide leading-tight">
                      {value.title}
                    </h3>
                    
                    {/* Tag with enhanced design */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${value.accent} mb-4 border border-gray-200`}>
                      <CheckCircle className="w-3 h-3 text-gray-600" />
                      <span className="text-xs font-semibold text-gray-700 tracking-wide">{value.tag}</span>
                    </div>

                    {/* Description with better spacing */}
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} blur-2xl opacity-20`} />
                  </div>
                  
                  {/* Subtle border glow */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} 
                       style={{ padding: '2px', background: `linear-gradient(135deg, transparent, transparent)`, maskComposite: 'exclude' }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action - Enhanced Premium Design */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            whileHover={{ y: -4 }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <span className="relative z-10 tracking-wide">Choose Your Team</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
