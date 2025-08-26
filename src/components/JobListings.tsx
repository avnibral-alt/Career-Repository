import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  benefits: string[];
}

interface JobListingsProps {
  selectedDepartment: string | null;
  onApplyClick: (jobTitle: string) => void;
}

export function JobListings({ selectedDepartment, onApplyClick }: JobListingsProps) {
  const jobs: Record<string, Job[]> = {
    management: [
      {
        id: 'mt-1',
        title: 'Management Trainee - AI Product Development',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        salary: '$60,000 - $80,000',
        shortDescription: 'Join our AI-driven product team and help build the future of Web3 & AI-powered education for kids.',
        fullDescription: 'As a Management Trainee in our AI Product team, you will work closely with senior leadership to develop innovative educational products that introduce children to Web3 and AI concepts. You will gain hands-on experience in AI product management, user research, and agile development methodologies in a global remote environment.',
        requirements: [
          'Bachelor\'s degree in Business, Technology, AI, or related field',
          'Strong analytical and problem-solving skills',
          'Interest in AI, education technology and Web3',
          'Excellent communication skills across global teams',
          'Previous internship or project experience in tech preferred'
        ],
        benefits: [
          'Comprehensive health insurance',
          'Professional development budget',
          'Flexible working arrangements (global remote)',
          'Stock options',
          'AI/Tech mentorship program'
        ]
      },
      {
        id: 'mt-2',
        title: 'Management Trainee - Global Operations',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        salary: '$55,000 - $75,000',
        shortDescription: 'Drive operational excellence and help scale our innovative AI-powered education platform worldwide.',
        fullDescription: 'Our Global Operations Management Trainee will work across multiple international departments to optimize processes, improve efficiency, and support our rapid global growth. You\'ll gain exposure to international business, AI operations, and strategic planning while making meaningful contributions to our mission.',
        requirements: [
          'Bachelor\'s degree in Business Administration or related field',
          'Strong organizational and project management skills',
          'Data analysis capabilities',
          'Experience working in global/remote teams',
          'Passion for AI, education and technology'
        ],
        benefits: [
          'Health, dental, and vision insurance',
          'Professional development opportunities',
          'Flexible PTO policy',
          'Global remote work flexibility',
          'Career advancement path in AI education'
        ]
      }
    ],
    teachers: [
      {
        id: 'teacher-1',
        title: 'AI & Robotics Curriculum Developer',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        salary: '$70,000 - $90,000',
        shortDescription: 'Create engaging AI, robotics, and coding curriculum that makes complex concepts accessible to young learners worldwide.',
        fullDescription: 'We\'re looking for an innovative educator to develop age-appropriate AI, robotics, and coding curriculum for children aged 8-16. You\'ll create interactive lessons, assessments, and projects that introduce artificial intelligence, robotics, blockchain, and programming concepts in fun and engaging ways for a global audience.',
        requirements: [
          'Teaching degree or equivalent experience in STEM',
          'Knowledge of AI, robotics, coding, or Web3 technologies',
          'Curriculum development experience',
          'Understanding of child development and learning psychology',
          'Creative and innovative teaching methods'
        ],
        benefits: [
          'Competitive salary and benefits',
          'Professional development in AI and emerging tech',
          'Creative freedom in curriculum design',
          'Work with cutting-edge AI technology',
          'Global impact on next generation'
        ]
      },
      {
        id: 'teacher-2',
        title: 'Online AI Learning Facilitator',
        location: 'Remote – Global Applicants Welcome',
        type: 'Part-time / Full-time',
        salary: '$40,000 - $65,000',
        shortDescription: 'Facilitate live online AI, coding, and robotics classes for students worldwide in our virtual environment.',
        fullDescription: 'Join our team of dedicated educators delivering live online AI, coding, and robotics education to students worldwide. You\'ll facilitate interactive classes, provide individual support, and help create a positive learning community in our virtual classrooms across different time zones.',
        requirements: [
          'Teaching experience (online preferred)',
          'Strong communication and presentation skills',
          'Comfortable with technology and virtual platforms',
          'Basic understanding of AI, coding, or robotics',
          'Available for flexible international scheduling'
        ],
        benefits: [
          'Flexible scheduling options across time zones',
          'Training in AI, coding, and robotics concepts',
          'Professional development opportunities',
          'Supportive global teaching community',
          'Health benefits (full-time)'
        ]
      }
    ],
    strategic: [
      {
        id: 'strategic-1',
        title: 'Head of Global Partnerships',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        salary: '$120,000 - $150,000',
        shortDescription: 'Build strategic partnerships worldwide that expand our reach in the AI-powered Web3 education space.',
        fullDescription: 'Lead our global partnership strategy by identifying, negotiating, and managing relationships with AI companies, Web3 platforms, educational institutions, and technology partners worldwide. You\'ll play a crucial role in expanding JetLearn\'s international market presence and creating new opportunities for growth in the AI education sector.',
        requirements: [
          '5+ years in business development or partnerships',
          'Experience in AI, Web3, blockchain, or fintech',
          'Strong negotiation and relationship-building skills',
          'Understanding of global education technology markets',
          'Track record of successful international partnerships'
        ],
        benefits: [
          'Competitive salary and equity',
          'Comprehensive benefits package',
          'International travel opportunities',
          'Leadership development in AI education',
          'Impact on global company growth'
        ]
      },
      {
        id: 'strategic-2',
        title: 'Global Business Strategy Analyst',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        salary: '$80,000 - $100,000',
        shortDescription: 'Analyze global market trends and provide strategic insights to drive worldwide business growth in AI education.',
        fullDescription: 'Support strategic decision-making by analyzing global market data, competitive landscape, and business performance across international markets. You\'ll work directly with leadership to identify growth opportunities and optimize our business model in the evolving global AI and Web3 education market.',
        requirements: [
          'MBA or equivalent analytical background',
          'Experience with data analysis and business modeling',
          'Understanding of global education and/or AI markets',
          'Strong presentation and communication skills',
          'Strategic thinking and problem-solving abilities'
        ],
        benefits: [
          'Competitive compensation',
          'Professional development budget',
          'Access to senior leadership',
          'Equity participation',
          'Global remote work flexibility'
        ]
      }
    ]
  };

  if (!selectedDepartment || !jobs[selectedDepartment]) {
    return null;
  }

  const departmentJobs = jobs[selectedDepartment];
  const departmentTitles = {
    management: 'Management Trainee Positions',
    teachers: 'AI Education Opportunities',
    strategic: 'Strategic Global Roles'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const jobVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="open-roles" 
      className="py-14 md:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Highlighted section indicator */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#fede00', color: '#000' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className="text-sm font-medium">🔥 Open Positions</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            {departmentTitles[selectedDepartment as keyof typeof departmentTitles]}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JetLearn is AI-first and global-first. Our roles are remote-friendly and open to international applicants unless specified.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {departmentJobs.map((job, index) => (
            <motion.div key={job.id} variants={jobVariants}>
              <Card className="group p-5 md:p-6 lg:p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-yellow-200 rounded-3xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-5 md:space-y-6 relative">
                  {/* Job header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4 group-hover:text-gray-800 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {job.title}
                      </motion.h3>
                      <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                          <span className="font-medium text-sm md:text-base">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                          <span className="font-medium text-sm md:text-base">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                          <span className="font-medium text-sm md:text-base">{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => onApplyClick(job.title)}
                        className="w-full sm:w-auto px-7 md:px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg group touch-manipulation"
                        style={{ backgroundColor: '#fede00', color: '#000', touchAction: 'manipulation' }}
                      >
                        <span className="flex items-center gap-2">
                          Apply Now
                          <motion.svg 
                            className="w-4 h-4 md:w-5 md:h-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </span>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Short description */}
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {job.shortDescription}
                  </p>

                  {/* Expandable full description */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={job.id} className="border-0">
                      <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4 text-base md:text-lg">
                        <motion.span 
                          className="font-medium flex items-center gap-2" 
                          style={{ color: '#fede00' }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          View Full Job Description
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-6 space-y-8">
                        <div>
                          <h4 className="font-medium text-black mb-3 text-lg">About the Role</h4>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            {job.fullDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-black mb-3 text-lg">Requirements</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-sm md:text-base">{req}</li>
                              ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-black mb-3 text-lg">Benefits</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm md:text-base">{benefit}</li>
                              ))}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}