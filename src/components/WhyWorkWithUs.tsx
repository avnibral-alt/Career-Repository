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
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/80',
      borderColor: 'border-blue-200/60',
      tag: 'Global Team',
      accent: 'bg-blue-100/60',
      letterColor: 'text-blue-600'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast, break things (responsibly), and ship like there\'s no tomorrow.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50/80',
      borderColor: 'border-orange-200/60',
      tag: 'Fast Execution',
      accent: 'bg-orange-100/60',
      letterColor: 'text-orange-600'
    },
    {
      letter: 'R',
      title: 'Own and Deliver Results',
      description: 'Take the wheel, own the outcome, and make it happen.',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50/80',
      borderColor: 'border-green-200/60',
      tag: 'Excellence',
      accent: 'bg-green-100/60',
      letterColor: 'text-green-600'
    },
    {
      letter: 'D',
      title: 'Be Data-Driven',
      description: 'Let the numbers tell the story, not just your gut feeling.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/80',
      borderColor: 'border-purple-200/60',
      tag: 'Analytics',
      accent: 'bg-purple-100/60',
      letterColor: 'text-purple-600'
    },
    {
      letter: 'I',
      title: 'Iterate and Learn',
      description: 'Fail fast, learn faster, and keep the innovation engine running.',
      icon: RefreshCw,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50/80',
      borderColor: 'border-indigo-200/60',
      tag: 'Innovation',
      accent: 'bg-indigo-100/60',
      letterColor: 'text-indigo-600'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put students first, because they\'re the future we\'re building.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50/80',
      borderColor: 'border-red-200/60',
      tag: 'Student First',
      accent: 'bg-red-100/60',
      letterColor: 'text-red-600'
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
    <section id="why-work-with-us" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/50 relative overflow-hidden">
      {/* Enhanced background decoration with grid pattern */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10" />
        
        {/* Abstract brand accent shapes */}
        <div className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-10 rounded-full blur-2xl" />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-r from-blue-300 to-blue-400 opacity-10 rounded-full blur-xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
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

        {/* CARDIO Header - Enhanced Premium Design */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-6 px-10 py-6 rounded-3xl bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-xl relative overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-yellow-50/50 to-purple-50/50 rounded-3xl" />
            
            {/* CARDIO Letters with individual colors */}
            {[
              { letter: 'C', color: 'text-blue-600', hoverColor: '#3b82f6' },
              { letter: 'A', color: 'text-orange-600', hoverColor: '#ea580c' },
              { letter: 'R', color: 'text-green-600', hoverColor: '#16a34a' },
              { letter: 'D', color: 'text-purple-600', hoverColor: '#9333ea' },
              { letter: 'I', color: 'text-indigo-600', hoverColor: '#4f46e5' },
              { letter: 'O', color: 'text-red-600', hoverColor: '#dc2626' }
            ].map((item, index) => (
              <motion.span 
                key={item.letter}
                className={`text-3xl md:text-4xl font-black ${item.color} tracking-wider relative z-10`}
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.3, 
                  color: item.hoverColor,
                  y: -5,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
              >
                {item.letter}
              </motion.span>
            ))}
            
            {/* Divider */}
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-gray-300 to-gray-400 mx-2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            />
            
            <motion.div 
              className="text-left relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <span className="text-base font-bold text-gray-800 block leading-tight">Our Core Values</span>
              <span className="text-sm text-gray-600 font-medium">Building Excellence Together</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Grid - 3x2 Layout for Better Spacing */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
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
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`relative p-7 rounded-3xl bg-white/90 backdrop-blur-sm border ${value.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}>
                  {/* Letter watermark */}
                  <div className={`absolute top-4 right-4 text-6xl font-black ${value.letterColor} opacity-5 select-none pointer-events-none z-0`}>
                    {value.letter}
                  </div>
                  
                  {/* Background accent with gradient */}
                  <div className={`absolute inset-0 rounded-3xl ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-8 rounded-bl-full`} />
                  
                  <div className="relative z-10">
                    {/* Icon and title section */}
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div 
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 12 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                          {value.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Tag with enhanced design */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${value.accent} mb-4 border border-gray-200/60`}>
                      <CheckCircle className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-xs font-semibold text-gray-700 tracking-wide">{value.tag}</span>
                    </div>

                    {/* Description with better spacing */}
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-medium">
                      {value.description}
                    </p>
                  </div>

                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} blur-2xl opacity-15`} />
                  </div>
                  
                  {/* Accent border on hover */}
                  <div className={`absolute inset-0 rounded-3xl border-2 ${value.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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

