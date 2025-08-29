import React, { useEffect } from 'react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

interface ApplicationFormProps {
  selectedJob?: string;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

export function ApplicationForm({ selectedJob }: ApplicationFormProps) {
  useEffect(() => {
    // Load HubSpot script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/shell.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "9115764",
            formId: "ef0d6f32-c1b6-47c4-88dd-6fea43ae4b6b",
            target: '#hubspot-form-container'
          });
        }
      };
      document.head.appendChild(script);
    } else {
      // If script is already loaded, just create the form
      window.hbspt.forms.create({
        region: "na1",
        portalId: "9115764",
        formId: "ef0d6f32-c1b6-47c4-88dd-6fea43ae4b6b",
        target: '#hubspot-form-container'
      });
    }
  }, []);

  return (
    <section id="application-form" className="py-14 md:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#ffcf00', color: '#000' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium">✨ Join Our Team</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Apply Now
          </h2>
          
          {selectedJob && (
            <motion.p 
              className="text-base md:text-xl font-medium mb-4 px-5 md:px-6 py-2.5 md:py-3 rounded-2xl inline-block" 
              style={{ backgroundColor: '#ffcf00', color: '#000' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              Applying for: {selectedJob}
            </motion.p>
          )}
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            No matter where you live, you can shape the future of AI-powered education with JetLearn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="p-5 md:p-8 lg:p-12 border-2 border-gray-100 shadow-2xl rounded-3xl bg-white/90 backdrop-blur-sm relative overflow-hidden group">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-12 h-12 opacity-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <pattern id="form-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#form-grid)" />
              </svg>
            </div>
            
            <motion.div 
              id="hubspot-form-container" 
              className="hubspot-form-wrapper relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* HubSpot form will be injected here */}
            </motion.div>
          </Card>
        </motion.div>
      </div>
      
      <style jsx>{`
        .hubspot-form-wrapper .hs-form fieldset {
          max-width: none !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-form-field {
          margin-bottom: 2rem !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-form-field label {
          color: #000 !important;
          font-weight: 600 !important;
          margin-bottom: 0.75rem !important;
          display: block !important;
          font-size: 1rem !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-input {
          width: 100% !important;
          padding: 1rem !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 1rem !important;
          font-size: 1rem !important;
          background-color: #fff !important;
          transition: all 0.3s ease !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-input:focus {
          outline: none !important;
          border-color: #fede00 !important;
          box-shadow: 0 0 0 4px rgba(254, 222, 0, 0.1) !important;
          transform: translateY(-2px) !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-button {
          background: linear-gradient(135deg, #fede00 0%, #f59e0b 100%) !important;
          color: #000 !important;
          border: none !important;
          padding: 1rem 3rem !important;
          border-radius: 1rem !important;
          font-weight: 600 !important;
          font-size: 1.1rem !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          position: relative !important;
          overflow: hidden !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-button:hover {
          transform: translateY(-3px) scale(1.05) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
          background: linear-gradient(135deg, #f59e0b 0%, #fede00 100%) !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-button:active {
          transform: translateY(-1px) scale(1.02) !important;
        }
        
        .hubspot-form-wrapper .hs-form textarea {
          min-height: 120px !important;
          resize: vertical !important;
          font-family: inherit !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-error-msgs {
          color: #dc2626 !important;
          font-size: 0.875rem !important;
          margin-top: 0.5rem !important;
          font-weight: 500 !important;
        }
        
        .hubspot-form-wrapper .hs-form select {
          padding: 1rem !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 1rem !important;
          font-size: 1rem !important;
          background-color: #fff !important;
          transition: all 0.3s ease !important;
        }
        
        .hubspot-form-wrapper .hs-form select:focus {
          border-color: #fede00 !important;
          box-shadow: 0 0 0 4px rgba(254, 222, 0, 0.1) !important;
        }
      `}</style>
    </section>
  );
}