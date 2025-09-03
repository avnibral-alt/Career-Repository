import React from 'react';
import { motion } from 'motion/react';
import { 
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


        {/* Impact at JetLearn Section */}
        <motion.div 
          className="mb-16 lg:mb-20 bg-yellow-400 py-16 px-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <motion.h3 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Impact at JetLearn
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl text-lg"
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

        {/* Leadership Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Our <span className="text-yellow-500">Leadership Team</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The visionaries driving JetLearn's mission to transform education worldwide through innovation and technology.
            </p>
          </motion.div>

          {/* Leadership Cards Grid - Clean centered layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Abhishek Bahl - Founder & CEO */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="bg-yellow-400 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-yellow-500 h-full flex flex-col items-center">
                  {/* Profile Image Container - Smaller size */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src="/images/abhishek.jpg"
                        alt="Abhishek Bahl - Founder & CEO"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80";
                        }}
                      />
                    </div>
                    {/* LinkedIn Icon - Always visible */}
                    <div className="absolute -bottom-1 -right-1">
                      <a 
                        href="https://www.linkedin.com/in/abhishekbahl/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all duration-300 group-hover:scale-110"
                      >
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.493V9h3.493v1.464h.046c.455-.865 1.562-1.78 3.214-1.78 3.448 0 4.082 2.225 4.082 5.111v6.767zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content - Better readable text */}
                  <div className="flex-1 flex flex-col items-center">
                    {/* Name */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Abhishek Bahl
                    </h4>
                    
                    {/* Designation */}
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Founder & CEO
                    </p>
                    
                    {/* Short Intro */}
                    <p className="text-sm text-gray-700 leading-relaxed text-center px-2">
                      Leading JetLearn's mission to revolutionize education through innovative technology and personalized learning experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Jatin Luthra - Co-Founder */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4, 
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="bg-yellow-400 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-yellow-500 h-full flex flex-col items-center">
                  {/* Profile Image Container - Smaller size */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src="/images/jatin.jpg"
                        alt="Jatin Luthra - Co-Founder"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80";
                        }}
                      />
                    </div>
                    {/* LinkedIn Icon - Always visible */}
                    <div className="absolute -bottom-1 -right-1">
                      <a 
                        href="https://www.linkedin.com/in/luthra/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all duration-300 group-hover:scale-110"
                      >
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.493V9h3.493v1.464h.046c.455-.865 1.562-1.78 3.214-1.78 3.448 0 4.082 2.225 4.082 5.111v6.767zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Content - Better readable text */}
                  <div className="flex-1 flex flex-col items-center">
                    {/* Name */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Jatin Luthra
                    </h4>
                    
                    {/* Designation */}
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Co-Founder
                    </p>
                    
                    {/* Short Intro */}
                    <p className="text-sm text-gray-700 leading-relaxed text-center px-2">
                      Driving innovation and strategic growth to expand JetLearn's global reach and educational impact.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Kapil Bahl - COO */}
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="bg-yellow-400 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-yellow-500 h-full flex flex-col items-center">
                  {/* Profile Image Container - Smaller size */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src="/images/kapil.jpg"
                        alt="Kapil Bahl - COO"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80";
                        }}
                      />
                    </div>
                    {/* LinkedIn Icon - Always visible */}
                    <div className="absolute -bottom-1 -right-1">
                      <a 
                        href="https://www.linkedin.com/in/kapil-b-4297a43/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all duration-300 group-hover:scale-110"
                      >
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.493V9h3.493v1.464h.046c.455-.865 1.562-1.78 3.214-1.78 3.448 0 4.082 2.225 4.082 5.111v6.767zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content - Better readable text */}
                  <div className="flex-1 flex flex-col items-center">
                    {/* Name */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Kapil Bahl
                    </h4>
                    
                    {/* Designation */}
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      COO
                    </p>
                    
                    {/* Short Intro */}
                    <p className="text-sm text-gray-700 leading-relaxed text-center px-2">
                      Optimizing operations and scaling JetLearn's infrastructure to support our growing global community of learners.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

