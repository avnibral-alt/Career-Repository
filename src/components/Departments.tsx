import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain, Bot, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface DepartmentsProps {
  onDepartmentClick: (department: string) => void;
}

export function Departments({ onDepartmentClick }: DepartmentsProps) {
  const departments = [
    {
      id: 'management',
      title: 'Management Trainees',
      description: 'Learn to lead in an AI-driven education company.',
      icon: Brain,
      image: "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50JTIwYnVzaW5lc3MlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NTYxMTc4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 'teachers',
      title: 'Teachers',
      description: 'Inspire kids by teaching coding, robotics & AI concepts.',
      icon: Bot,
      image: "https://images.unsplash.com/photo-1634912314602-0d01437e3540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90aWNzJTIwY29kaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1NjExODc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 'strategic',
      title: 'Strategic Roles',
      description: 'Help us expand AI-based learning solutions worldwide.',
      icon: Globe,
      image: "https://images.unsplash.com/photo-1594492691731-3d7974140624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHN0cmF0ZWd5JTIwd29ybGR3aWRlfGVufDF8fHx8MTc1NjExODc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    <section id="departments" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            We're hiring worldwide
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From AI educators to strategists shaping the next era of learning, join us wherever you are.
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
                  className="group cursor-pointer overflow-hidden bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-yellow-200 rounded-3xl h-full touch-manipulation"
                  onClick={() => handleCardClick(dept.id)}
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Icon container */}
                    <motion.div 
                      className="absolute bottom-6 left-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div 
                        className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                        style={{ backgroundColor: '#fede00' }}
                      >
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-black" />
                      </div>
                    </motion.div>
                    
                    {/* Hover overlay with pulse effect */}
                    <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-5 md:p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                      {dept.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 md:mb-6 text-base lg:text-lg">
                      {dept.description}
                    </p>
                    
                    <motion.div 
                      className="flex items-center text-sm lg:text-base font-medium" 
                      style={{ color: '#fede00' }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span>View Global Opportunities</span>
                      <motion.svg 
                        className="w-4 h-4 md:w-5 md:h-5 ml-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.div>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-200/20 to-yellow-400/20 blur-xl" />
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