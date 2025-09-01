import React from 'react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain, Bot, Sparkles, MapPin, Users, Star, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface DepartmentsProps {
  onDepartmentClick: (department: string) => void;
}

export function Departments({ onDepartmentClick }: DepartmentsProps) {
  const departments = [
    {
      id: 'management',
      title: 'Global Teachers',
      subtitle: 'International Teaching Roles',
      description: 'Teach the future. Inspire the next generation of innovators across the globe.',
      icon: Brain,
      isInternational: true
    },
    {
      id: 'teachers',
      title: 'JetLearn Career',
      subtitle: 'India-Based Development Roles',
      description: 'Build the engine that powers the future. Code, create, and innovate from the heart of India.',
      icon: Bot,
      isInternational: false
    },
    {
      id: 'strategic',
      title: 'Management Trainees',
      subtitle: 'India-Based Leadership Roles',
      description: 'Lead the charge. Develop strategies that will change how the world learns.',
      icon: Star,
      isInternational: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleCardClick = (deptId: string) => {
    // Prevent default touch behavior
    if ('ontouchstart' in window) {
      // Small delay for mobile to ensure touch is properly handled
      setTimeout(() => {
        onDepartmentClick(deptId);
      }, 50);
    } else {
      onDepartmentClick(deptId);
    }
  };

  return (
    <section id="departments" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Global background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,30 Q30,25 40,30 T60,30 T80,30" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <path d="M15,50 Q25,45 35,50 T55,50 T75,50" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <path d="M25,70 Q35,65 45,70 T65,70 T85,70" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <circle cx="30" cy="40" r="1" fill="currentColor"/>
            <circle cx="60" cy="60" r="1" fill="currentColor"/>
            <circle cx="70" cy="35" r="1" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* International badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6"
            style={{ backgroundColor: '#ffcf00', color: '#000', borderColor: '#e5b800' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Three Departments, One Mission</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Why Choose JetLearn
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to join the revolution? Pick your battlefield and let's build the future of education together.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            
            return (
              <motion.div
                key={dept.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card 
                  className="group cursor-pointer overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full touch-manipulation"
                  onClick={() => handleCardClick(dept.id)}
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="p-6 md:p-8">
                    {/* Icon header */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                        dept.isInternational 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-br from-gray-500 to-gray-600'
                      }`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* International badge */}
                      {dept.isInternational && (
                        <motion.div 
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3"
                          style={{ backgroundColor: '#ffcf00', color: '#000' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Globe className="w-3 h-3" />
                          <span>International Role</span>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors leading-tight">
                        {dept.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-4">
                        {dept.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {dept.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                        View Opportunities
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl blur-xl ${
                      dept.isInternational 
                        ? 'bg-gradient-to-r from-blue-200/20 to-indigo-400/20' 
                        : 'bg-gradient-to-r from-gray-200/20 to-gray-400/20'
                    }`} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            <strong style={{ color: '#ffcf00' }}>Global Teachers</strong> is our international role, while other positions offer local impact with global reach.
          </p>
        </motion.div>
      </div>
    </section>
  );
}