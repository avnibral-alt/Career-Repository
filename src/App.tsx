import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyWorkWithUs } from './components/WhyWorkWithUs';
import { Departments } from './components/Departments';
import { JobListings } from './components/JobListings';
import { ApplicationForm } from './components/ApplicationForm';
import { CardioValues } from './components/CardioValues';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Optimize mobile scrolling and ensure scrolling is enabled
    if ('ontouchstart' in window) {
      document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
    }
    
    // Always ensure scrolling is enabled for normal page viewing
    const enableScrolling = () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.overscrollBehavior = 'auto';
    };
    
    // Enable scrolling immediately
    enableScrolling();
    
    // Also enable scrolling after a short delay to override any iframe restrictions
    const timeoutId = setTimeout(enableScrolling, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  // Force enable scrolling for mobile devices
  useEffect(() => {
    const forceEnableScrolling = () => {
      // Force enable scrolling on all elements
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.overscrollBehavior = 'auto';
      
      // Also ensure all sections can scroll
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (section instanceof HTMLElement) {
          section.style.overflow = 'visible';
          section.style.position = 'relative';
        }
      });
    };

    // Enable scrolling immediately
    forceEnableScrolling();
    
    // Also enable scrolling after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', forceEnableScrolling);
    } else {
      forceEnableScrolling();
    }
    
    // Enable scrolling after a delay to override any iframe restrictions
    const timeoutId = setTimeout(forceEnableScrolling, 200);
    
    return () => {
      document.removeEventListener('DOMContentLoaded', forceEnableScrolling);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced scroll function with mobile optimization
  const smoothScrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Calculate position with offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    // Use different scrolling methods based on device
    if (isMobile) {
      // For mobile, use a more reliable scrolling method
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // For desktop, use the enhanced scroll
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
    
    // Add a longer delay for mobile to ensure DOM is updated
    const delay = isMobile ? 300 : 100;
    setTimeout(() => {
      smoothScrollToElement('open-roles', 100);
    }, delay);
  };

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    
    // Add a longer delay for mobile to ensure DOM is updated
    const delay = isMobile ? 300 : 100;
    setTimeout(() => {
      smoothScrollToElement('application-form', 100);
    }, delay);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="scroll-container">
        <Hero />
        
        <WhyWorkWithUs />
        
        <Departments onDepartmentClick={handleDepartmentClick} />
        
        {selectedDepartment && (
          <JobListings 
            selectedDepartment={selectedDepartment} 
            onApplyClick={handleApplyClick}
          />
        )}
        
        <ApplicationForm selectedJob={selectedJob} />
        
        <CardioValues />
      </main>
      
      <Footer />
      
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#fede00',
            color: '#000',
            border: 'none',
          },
        }}
      />
    </div>
  );
}