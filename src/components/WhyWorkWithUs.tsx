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
  console.log('Loading values array with', 6, 'items');
  const values = [
    {
      letter: 'C',
      title: 'Collaborate',
      description: 'Where brilliant minds unite across borders to create magic.',
      icon: Users,
      bgColor: 'bg-blue-600',
      borderColor: 'border-blue-500/20',
      letterColor: 'text-blue-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
    },
    {
      letter: 'A',
      title: 'Bias for Action',
      description: 'Move fast, break things (responsibly), and ship like there\'s no tomorrow.',
      icon: Zap,
      bgColor: 'bg-orange-500',
      borderColor: 'border-orange-400/20',
      letterColor: 'text-orange-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
    },
    {
      letter: 'R',
      title: 'Own & Deliver Results',
      description: 'Take the wheel, own the outcome, and make it happen.',
      icon: Target,
      bgColor: 'bg-green-600',
      borderColor: 'border-green-500/20',
      letterColor: 'text-green-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
    },
    {
      letter: 'D',
      title: 'Be Data-Driven',
      description: 'Let the numbers tell the story, not just your gut feeling.',
      icon: BarChart3,
      bgColor: 'bg-purple-600',
      borderColor: 'border-purple-500/20',
      letterColor: 'text-purple-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
    },
    {
      letter: 'I',
      title: 'Iterate & Learn',
      description: 'Fail fast, learn faster, and keep the innovation engine running.',
      icon: RefreshCw,
      bgColor: 'bg-indigo-600',
      borderColor: 'border-indigo-500/20',
      letterColor: 'text-indigo-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
    },
    {
      letter: 'O',
      title: 'Learner Obsession',
      description: 'Put students first, because they\'re the future we\'re building.',
      icon: Heart,
      bgColor: 'bg-red-600',
      borderColor: 'border-red-500/20',
      letterColor: 'text-red-200/80',
      iconColor: 'text-white',
      iconBgColor: 'bg-white/20'
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
        
        {/* Additional brand yellow accents */}
        <div className="absolute top-40 left-40 w-24 h-24 bg-yellow-200 rounded-full blur-lg opacity-25" />
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-yellow-300 rounded-full blur-md opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - What Sets JetLearn Apart */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Sets JetLearn Apart
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Core Values (CARDIO) — the DNA that drives JetLearn forward.
          </motion.p>
        </motion.div>

        {/* Values Carousel - Horizontal Scrolling */}
        <motion.div 
          className="mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          onAnimationStart={() => console.log('Carousel animation started')}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden bg-gray-100 p-4">
            {/* Debug Info */}
            <div className="text-center mb-4 p-2 bg-red-500 text-white rounded">
              🚨 CAROUSEL DEBUG: {values.length} values loaded, Carousel should be scrolling!
            </div>
            {/* Infinite Scroll Container */}
            <div className="flex animate-scroll-carousel gap-6 md:gap-8" style={{ border: '2px solid red' }}>
              {/* First set of cards */}
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={`first-${value.letter}`}
                    className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
                    style={{ border: '2px solid green', backgroundColor: 'white' }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    onHoverStart={() => {
                      // Pause animation on hover
                      const carousel = document.querySelector('.animate-scroll-carousel') as HTMLElement;
                      if (carousel) carousel.style.animationPlayState = 'paused';
                    }}
                    onHoverEnd={() => {
                      // Resume animation
                      const carousel = document.querySelector('.animate-scroll-carousel') as HTMLElement;
                      if (carousel) carousel.style.animationPlayState = 'running';
                    }}
                  >
                    <div className={`relative p-8 rounded-3xl ${value.bgColor} border ${value.borderColor} shadow-xl transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl`}>
                      {/* Letter watermark - top-right with glow effect */}
                      <div className={`absolute top-6 right-6 text-7xl font-black ${value.letterColor} select-none pointer-events-none z-0 transform rotate-12 drop-shadow-lg`}>
                        <div className="relative">
                          {value.letter}
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Icon section with white background */}
                        <div className="mb-6">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl ${value.iconBgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg backdrop-blur-sm`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <IconComponent className={`w-8 h-8 ${value.iconColor} transition-all duration-300`} />
                          </motion.div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                          {value.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Duplicate set for infinite loop effect */}
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={`second-${value.letter}`}
                    className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
                    style={{ border: '2px solid green', backgroundColor: 'white' }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    onHoverStart={() => {
                      const carousel = document.querySelector('.animate-scroll-carousel') as HTMLElement;
                      if (carousel) carousel.style.animationPlayState = 'paused';
                    }}
                    onHoverEnd={() => {
                      const carousel = document.querySelector('.animate-scroll-carousel') as HTMLElement;
                      if (carousel) carousel.style.animationPlayState = 'running';
                    }}
                  >
                    <div className={`relative p-8 rounded-3xl ${value.bgColor} border ${value.borderColor} shadow-xl transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl`}>
                      {/* Letter watermark - top-right with glow effect */}
                      <div className={`absolute top-6 right-6 text-7xl font-black ${value.letterColor} select-none pointer-events-none z-0 transform rotate-12 drop-shadow-lg`}>
                        <div className="relative">
                          {value.letter}
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Icon section with white background */}
                        <div className="mb-6">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl ${value.iconBgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg backdrop-blur-sm`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <IconComponent className={`w-8 h-8 ${value.iconColor} transition-all duration-300`} />
                          </motion.div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                          {value.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile swipe indicator */}
          <div className="md:hidden text-center mt-6">
            <p className="text-sm text-gray-500">Swipe to explore our values</p>
          </div>
        </motion.div>

        {/* Impact at JetLearn Section */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Impact at JetLearn
              </motion.h3>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Working at JetLearn means being part of something bigger than yourself. Every day, you'll contribute to creating meaningful global impact through innovative education that inspires the next generation of innovators. Our mission empowers learners worldwide with future-ready skills, transforming how children engage with technology and unlocking their potential to shape tomorrow's world.
              </motion.p>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Team collaboration and innovation at JetLearn"
                  className="w-full h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-lg"
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <span className="relative z-10">Choose Your Team</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 3 }}
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

