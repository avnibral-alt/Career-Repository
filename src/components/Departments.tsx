import React from 'react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Code, Users, Globe, ArrowRight } from 'lucide-react';
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
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdGVhY2hlcnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU2MTE4NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isInternational: true
    },
    {
      id: 'teachers',
      title: 'JetLearn Career',
      subtitle: 'India-Based Development Roles',
      description: 'Build the engine that powers the future. Code, create, and innovate from the heart of India.',
      icon: Code,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTYxMTg3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isInternational: false
    },
    {
      id: 'strategic',
      title: 'Management Trainees',
      subtitle: 'India-Based Leadership Roles',
      description: 'Lead the charge. Develop strategies that will change how the world learns.',
      icon: Users,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50JTIwdGVhbSUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NTYxMTg3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
                  {/* Image header */}
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-3xl">
                    <ImageWithFallback
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* International badge */}
                    {dept.isInternational && (
                      <motion.div 
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                        style={{ backgroundColor: '#ffcf00', color: '#000' }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Globe className="w-3 h-3 inline mr-1" />
                        International
                      </motion.div>
                    )}
                    
                    {/* Department icon overlay */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors leading-tight">
                        {dept.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-2">
                        {dept.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-2">
                        {dept.description}
                      </p>
                    </div>
                    
                    {/* CTA - positioned at bottom */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span 
                        className="text-sm font-medium transition-colors"
                        style={{ color: '#ffcf00' }}
                      >
                        View Opportunities
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 transition-colors" 
                        style={{ color: '#ffcf00' }}
                      />
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


      </div>
    </section>
  );
}