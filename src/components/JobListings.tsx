import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MapPin, Clock, DollarSign, Globe, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  isInternational?: boolean;
  locations?: string[];
  stats?: Record<string, string>;
}

interface JobListingsProps {
  selectedDepartment: string | null;
  onApplyClick: (jobTitle: string) => void;
}

export function JobListings({ selectedDepartment, onApplyClick }: JobListingsProps) {
  const singleJob: Job = {
    id: 'apm-founders-office',
    title: 'Assistant Program Manager – Founder\'s Office',
    location: 'Delhi NCR',
    type: 'Full-time',
    shortDescription: 'Drive founder-led, cross-functional sales enablement programs, automation, and lead-generation initiatives.',
    fullDescription:
      'We are looking for a high-potential Assistant Program Manager to join the Founder\'s Office and support the sales in implementing high-impact initiatives, driving lead generation through cross-functional collaboration, and operationalising new strategic projects. This is not a conventional sales role. It\'s a systems and enablement role for someone who thrives on building scalable processes, aligning teams, and unlocking new opportunities through internal innovation.',
    requirements: [
      '1–2 years in high-growth startup/consulting/sales ops or enablement',
      'Strong pedigree (Tier-1/2 or equivalent exposure preferred)',
      'Highly analytical, process-oriented; eager to build systems from scratch',
      'Excellent communication and stakeholder management',
      'Entrepreneurial mindset; work closely with founders/senior leaders',
      'Passion for EdTech and scalable impact'
    ],
    isInternational: false,
    locations: ['Delhi NCR'],
    stats: { team: 'Core Team', growth: 'High Impact' }
  };

  const jobs: Record<string, Job[]> = {
    management: [
      {
        id: 'international-maths-tutor',
        title: 'International Teacher – Maths Tutor',
        location: 'Amsterdam, Netherlands (Remote/Online compatible)',
        type: 'Part-time',
        shortDescription:
          'Join our European EdTech startup as a Maths Tutor, teaching students aged 6–16 in a supportive, international environment.',
        fullDescription:
          'About the Job: This is an opportunity to work directly with a European EdTech startup based in Amsterdam, Netherlands. The company provides after-school math classes to students aged 6–16 years. The heart of our business is a core team of amazing and excellent teachers. We hire only the top performers—so if you believe you are one of the top teachers and want to be part of the esteemed group of global educators, do apply! We look forward to speaking with you soon!\n\nResponsibilities:\n• Teach mathematics in a fun, engaging, and interactive way to school students via online classes\n• Instill problem-solving skills and logical reasoning in young learners\n• Assess students\' progress, evaluate assignments, and provide constructive feedback\n• Conduct regular feedback sessions with parents/guardians\n• Customize lessons to meet individual learning needs\n\nSkills Required:\n• A degree in Mathematics, Education, or a related field\n• Exceptional oral and written communication skills\n• Passion for teaching students\n• A curious mind and ability to simplify mathematical concepts for young learners\n• Prior experience of 1 year in the online EdTech industry is a plus\n• A laptop with a camera & microphone and a good internet connection\n\nPlatform/Knowledge:\n• Experience teaching topics like Algebra, Geometry, Calculus, and Statistics\n• Strong understanding of Math curriculum across various boards (e.g., IGCSE, IB, CBSE)\n• Experience with gamified teaching platforms is a plus\n\nTime Requirement:\n• Most classes are scheduled in the evenings on weekdays & throughout the day on weekends\n• Between 4 PM UKT–10 PM UKT - Weekdays\n• Between 9 AM UKT–10 PM UKT on weekends (Mandatory working on weekends)\n• Weekly off on weekdays only\n\nWhat You Get:\n• Opportunity to work with an excellent team on a mission to empower kids with math skills for the future\n• Experience working with an international company\n• A very innovative and entrepreneurial environment in one of the rising EdTech companies in Europe',
        requirements: [
          'A degree in Mathematics, Education, or a related field',
          'Exceptional oral and written communication skills',
          'Passion for teaching students',
          'A curious mind and ability to simplify mathematical concepts for young learners',
          'Prior experience of 1 year in the online EdTech industry is a plus',
          'A laptop with a camera & microphone and a good internet connection',
          'Experience teaching topics like Algebra, Geometry, Calculus, and Statistics',
          'Strong understanding of Math curriculum across various boards (e.g., IGCSE, IB, CBSE)',
          'Experience with gamified teaching platforms is a plus'
        ],
        isInternational: true,
        locations: ['Amsterdam', 'London', 'New York', 'Remote'],
        stats: { countries: '15+', students: '10K+' }
      }
    ],
    teachers: [
      singleJob,
      {
        id: 'eir-founders-office',
        title: 'Founder\'s Office – EIR (Entrepreneur in Residence)',
        location: 'Delhi (Nehru Place office)',
        type: 'Full-time',
        shortDescription:
          'Work with the Founding team to drive growth initiatives and global expansion through data-driven, high-impact projects.',
        fullDescription:
          'About JetLearn: JetLearn is a European EdTech startup headquartered in Amsterdam, Netherlands. We specialize in delivering innovative, after-school coding and robotics classes for children aged 6–16 through live, one-on-one Zoom sessions. We\'re on a mission to empower children with personalized technology education, shaping a future where they thrive in a tech-driven world. With a rapidly growing presence across Europe (UK, Netherlands, and beyond), we\'re seeking ambitious, data-driven, and results-oriented professionals to join our dynamic team. If you\'re passionate about scaling businesses, embracing innovation, and making a difference—this is your opportunity.\n\nAbout the Role: You\'d be working with the Founding team and focused on Growth initiatives. As EIR, you\'ll drive our growth initiatives and lead our global expansion efforts. As a core member of the team, you\'ll own high-impact projects, develop scalable strategies, and execute them with precision to achieve measurable results.',
        requirements: [
          'Proven success driving measurable business growth with clear revenue impact',
          'Strong data skills: KPI definition, analysis, and insight-driven decisions',
          'Engineering degree with 2–4 years in growth/marketing/business development (startup preferred)',
          'Excellent project management; can manage complex, cross-functional initiatives',
          'Creative problem solver with a growth mindset and experimentation bias',
          'Strong marketing instinct: personas, journeys, and effective lead-gen strategies',
          'Experience in fast-paced startup or high-growth environments (preferred)',
          'Knowledge of E-commerce, B2B/B2C marketing, and growth strategies (preferred)',
          'Solid understanding of marketing automation tools and workflows (preferred)'
        ],
        isInternational: false,
        locations: ['Delhi NCR'],
        stats: { team: 'Core Team', impact: 'High' }
      },
      {
        id: 'intern-sales-operations',
        title: 'Sales Operations Intern',
        location: 'Remote/India',
        type: 'Internship',
        shortDescription:
          'Join our dynamic sales team and build strong relationships with parents while driving trial bookings for our global AI-coding programs.',
        fullDescription:
          'Role Overview\n\nWe are seeking dynamic and driven individuals to join our team as Associate – Sales. This role offers a clear and exciting career trajectory, enabling rapid growth in a global, fast-paced environment with huge earning opportunities.\n\nKey Responsibilities\n\nAssociate (Sales)\n\n• Build strong relationships with parents, introducing them to JetLearn\'s global AI-coding programs.\n• Actively engage in outbound calls, generating interest and enthusiasm for our courses.\n• Successfully schedule calibration classes through effective communication and persuasion skills.\n• Address parent inquiries, tailoring course recommendations to align with their child\'s learning goals.\n• Work with a structured approach to meet daily and weekly targets.\n• Make 100+ outbound calls daily to prospective leads and drive a targeted number of trial bookings.\n\nGrowth Path: Your performance as an Associate will determine your promotion to the role of Academic Counselor (Consultant).\n\nCareer Growth Trajectory\n\nIntern (Sales) ➝ Academic Counselor (Consultant) ➝ Sr. Academic Counselor (Sr. Consultant) ➝ Team Lead ➝ Associate Director\n\nWho You Are\n\n• Eligibility: pursuing Graduation\n• Strong communicator with exceptional interpersonal skills.\n• Self-motivated, proactive, and comfortable working in a target-driven environment.\n• Organized and capable of handling multiple tasks efficiently.\n• Excited to learn, adapt, and grow within a global team.\n\nWhat We Offer\n\n• Structured Career Growth Plan: Clear milestones leading to senior leadership roles.\n• Comprehensive Training: Personalized mentoring programs to help you excel.\n• The opportunity to work in a global, innovative environment shaping the future of education.\n• Competitive Salary: 12k with attractive performance-based incentives.\n• A chance to be part of a transformative journey, empowering children worldwide with future-ready skills.',
        requirements: [
          'Eligibility: pursuing Graduation',
          'Strong communicator with exceptional interpersonal skills',
          'Self-motivated, proactive, and comfortable working in a target-driven environment',
          'Organized and capable of handling multiple tasks efficiently',
          'Excited to learn, adapt, and grow within a global team'
        ],
        isInternational: false,
        locations: ['Remote', 'India'],
        stats: { team: 'Sales Team', growth: 'Fast Track' }
      }
    ],
    strategic: [
      {
        id: 'strategic-1',
        title: 'Head of Global Partnerships',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        shortDescription: 'Build strategic partnerships worldwide that expand our reach in the AI-powered Web3 education space.',
        fullDescription: 'Lead our global partnership strategy by identifying, negotiating, and managing relationships with AI companies, Web3 platforms, educational institutions, and technology partners worldwide. You\'ll play a crucial role in expanding JetLearn\'s international market presence and creating new opportunities for growth in the AI education sector.',
        requirements: [
          '5+ years in business development or partnerships',
          'Experience in AI, Web3, blockchain, or fintech',
          'Strong negotiation and relationship-building skills',
          'Understanding of global education technology markets',
          'Track record of successful international partnerships'
        ],
        isInternational: false,
        locations: ['Remote'],
        stats: { team: 'Strategy Team', impact: 'Global' }
      },
      {
        id: 'strategic-2',
        title: 'Global Business Strategy Analyst',
        location: 'Remote – Global Applicants Welcome',
        type: 'Full-time',
        shortDescription: 'Analyze global market trends and provide strategic insights to drive worldwide business growth in AI education.',
        fullDescription: 'Support strategic decision-making by analyzing global market data, competitive landscape, and business performance across international markets. You\'ll work directly with leadership to identify growth opportunities and optimize our business model in the evolving global AI and Web3 education market.',
        requirements: [
          'MBA or equivalent analytical background',
          'Experience with data analysis and business modeling',
          'Understanding of global education and/or AI markets',
          'Strong presentation and communication skills',
          'Strategic thinking and problem-solving abilities'
        ],
        isInternational: false,
        locations: ['Remote'],
        stats: { team: 'Strategy Team', impact: 'Analytical' }
      }
    ]
  };

  if (!selectedDepartment || !jobs[selectedDepartment]) {
    return null;
  }

  const departmentJobs = jobs[selectedDepartment];
  const departmentTitles = {
    management: 'Global Teachers',
    teachers: 'JetLearn Career',
    strategic: 'Management Trainees'
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
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
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className="text-sm font-medium">🌍 Open Positions</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {departmentTitles[selectedDepartment as keyof typeof departmentTitles]}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {selectedDepartment === 'management' 
              ? 'Join our international teaching team and inspire the next generation of innovators.'
              : 'Ready to make your mark? These roles are your ticket to the revolution.'
            }
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
              <Card className={`group p-5 md:p-6 lg:p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/80 backdrop-blur-sm relative overflow-hidden ${
                job.isInternational 
                  ? 'border-blue-200 hover:border-blue-300' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}>
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  job.isInternational 
                    ? 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50' 
                    : 'bg-gradient-to-br from-gray-50/50 to-transparent'
                }`} />
                
                <div className="space-y-5 md:space-y-6 relative">
                  {/* Job header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6">
                    <div className="flex-1">
                      {/* International badge */}
                      {job.isInternational && (
                        <motion.div 
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                          style={{ backgroundColor: '#ffcf00', color: '#000' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Globe className="w-3 h-3" />
                          <span>International Role</span>
                        </motion.div>
                      )}
                      
                      <motion.h3 
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-gray-800 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {job.title}
                      </motion.h3>
                      
                      <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                          <span className="font-medium text-sm md:text-base">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
                          <span className="font-medium text-sm md:text-base">{job.type}</span>
                        </div>
                      </div>

                      {/* Stats for international roles */}
                      {job.isInternational && job.stats && (
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-600">{job.stats.countries} Countries</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm text-gray-600">{job.stats.students} Students</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => onApplyClick(job.title)}
                        className="w-full sm:w-auto px-7 md:px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg group touch-manipulation"
                        style={{ 
                          backgroundColor: job.isInternational ? '#ffcf00' : '#6b7280', 
                          color: job.isInternational ? '#000' : '#fff' 
                        }}
                      >
                        <span className="flex items-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
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
                          style={{ color: job.isInternational ? '#3b82f6' : '#6b7280' }}
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
                          <h4 className="font-medium text-gray-900 mb-3 text-lg">About the Role</h4>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            {job.fullDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3 text-lg">Requirements</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-sm md:text-base">{req}</li>
                              ))}
                          </ul>
                        </div>

                        {job.id === 'international-maths-tutor' && (
                          <>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Skills Required</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">A degree in Mathematics, Education, or a related field</li>
                                <li className="text-sm md:text-base">Exceptional oral and written communication skills</li>
                                <li className="text-sm md:text-base">Passion for teaching students</li>
                                <li className="text-sm md:text-base">A curious mind and ability to simplify mathematical concepts for young learners</li>
                                <li className="text-sm md:text-base">Prior experience of 1 year in the online EdTech industry is a plus</li>
                                <li className="text-sm md:text-base">A laptop with a camera & microphone and a good internet connection</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Platform/Knowledge</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Experience teaching topics like Algebra, Geometry, Calculus, and Statistics</li>
                                <li className="text-sm md:text-base">Strong understanding of Math curriculum across various boards (e.g., IGCSE, IB, CBSE)</li>
                                <li className="text-sm md:text-base">Experience with gamified teaching platforms is a plus</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Time Requirement</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Most classes are scheduled in the evenings on weekdays & throughout the day on weekends</li>
                                <li className="text-sm md:text-base">Between 4 PM UKT–10 PM UKT - Weekdays</li>
                                <li className="text-sm md:text-base">Between 9 AM UKT–10 PM UKT on weekends (Mandatory working on weekends)</li>
                                <li className="text-sm md:text-base">Weekly off on weekdays only</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">What You Get</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Opportunity to work with an excellent team on a mission to empower kids with math skills for the future</li>
                                <li className="text-sm md:text-base">Experience working with an international company</li>
                                <li className="text-sm md:text-base">A very innovative and entrepreneurial environment in one of the rising EdTech companies in Europe</li>
                              </ul>
                            </div>
                          </>
                        )}

                        {job.id === 'eir-founders-office' && (
                          <>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Responsibilities</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Drive Revenue Growth: Own and deliver on key business targets</li>
                                <li className="text-sm md:text-base">Deep Business Understanding: Build a comprehensive understanding of JetLearn's brand, customer behavior, competitive landscape, and growth opportunities</li>
                                <li className="text-sm md:text-base">Strategic Growth Initiatives: Identify, test, and scale marketing and partnership opportunities to drive customer acquisition and retention</li>
                                <li className="text-sm md:text-base">Data-Driven Execution: Define success metrics, track performance, and optimize initiatives based on KPIs and insights</li>
                                <li className="text-sm md:text-base">Cross-Functional Collaboration: Work with creative, product, and operational teams to align on high-impact activities and ensure seamless execution</li>
                                <li className="text-sm md:text-base">Marketing Automation: Design and optimize cross-platform workflows for efficient lead generation and nurturing</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">What We're Looking For</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Proven Growth Experience: Demonstrated success in driving measurable business growth, with clear revenue impact</li>
                                <li className="text-sm md:text-base">Data-Driven & Results-Oriented: Expertise in analyzing data, defining KPIs, and making strategic decisions based on insights</li>
                                <li className="text-sm md:text-base">Educational Background: Engineering degree with 2–4 years of experience in growth, marketing, or business development roles (startup experience preferred)</li>
                                <li className="text-sm md:text-base">Project Management Skills: Exceptional organizational skills to manage complex projects and ensure timely delivery</li>
                                <li className="text-sm md:text-base">Creative Problem Solver: A growth mindset and willingness to experiment with new ideas and channels</li>
                                <li className="text-sm md:text-base">Marketing Instinct: Strong understanding of customer personas, decision-making journeys, and strategies for effective lead generation</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Preferred Qualifications</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Experience in a fast-paced startup environment or high-growth company</li>
                                <li className="text-sm md:text-base">Expertise in E-commerce, B2B/B2C marketing, and growth strategies</li>
                                <li className="text-sm md:text-base">Solid understanding of marketing automation tools and workflows</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Why Join Us?</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Work with a high-performing, international team on a meaningful mission</li>
                                <li className="text-sm md:text-base">Take a front-row seat in scaling one of Europe's fastest-growing EdTech companies</li>
                                <li className="text-sm md:text-base">Enjoy the freedom to experiment, innovate, and drive real impact</li>
                                <li className="text-sm md:text-base">Competitive salary and ample opportunities for career growth</li>
                              </ul>
                            </div>
                          </>
                        )}

                        {job.id === 'apm-founders-office' && (
                          <>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Responsibilities</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Sales Program Execution: Drive strategic programs focused on lead generation, sales efficiency, and customer acquisition in partnership with the sales leadership</li>
                                <li className="text-sm md:text-base">Cross-Functional Collaboration: Act as the bridge between Sales, Marketing, Curriculum, and Tech teams to launch initiatives that bring in qualified leads from multiple internal and external sources</li>
                                <li className="text-sm md:text-base">Automation & Tools Ownership: Identify and implement automation tools (e.g., HubSpot, Google Sheets, Zapier, etc.) to streamline lead flows, CRM operations, and reporting</li>
                                <li className="text-sm md:text-base">Process Implementation: Translate founder-led initiatives into structured programs with measurable outcomes. Build and document repeatable sales playbooks and lead generation workflows</li>
                                <li className="text-sm md:text-base">Lead Generation Strategy: Collaborate on designing creative lead funnels by leveraging student projects, parent testimonials, events, and educator networks</li>
                                <li className="text-sm md:text-base">Data-Driven Insights: Support in building dashboards and reports to track project performance, team productivity, and lead pipeline health</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">What We're Looking For</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Experience: 1–2 years of experience in a high-growth startup, consulting firm, or sales ops/enablement role</li>
                                <li className="text-sm md:text-base">Strong pedigree (Tier-1/2 college or equivalent work exposure preferred)</li>
                                <li className="text-sm md:text-base">Highly analytical, process-oriented, and curious to build systems from scratch</li>
                                <li className="text-sm md:text-base">Excellent communication and stakeholder management skills</li>
                                <li className="text-sm md:text-base">Entrepreneurial mindset and ability to work closely with founders and senior leaders</li>
                                <li className="text-sm md:text-base">Passion for EdTech and creating impact through scalable innovation</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-900 mb-3 text-lg">Why Join Us?</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li className="text-sm md:text-base">Work with a high-performing international team on a meaningful mission</li>
                                <li className="text-sm md:text-base">Take charge of creating an industry-first sales automation engine in EdTech</li>
                                <li className="text-sm md:text-base">Influence how tens of thousands of parents choose tech education for their kids</li>
                                <li className="text-sm md:text-base">Competitive salary, creative freedom, and career advancement opportunities</li>
                                <li className="text-sm md:text-base">Based in our Delhi office with global exposure</li>
                              </ul>
                            </div>
                          </>
                        )}


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