import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Departments } from './components/Departments';
import { JobListings } from './components/JobListings';
import { ApplicationForm } from './components/ApplicationForm';
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
    
    // Optimize mobile scrolling
    if ('ontouchstart' in window) {
      document.body.style.webkitOverflowScrolling = 'touch';
      document.documentElement.style.overflowX = 'hidden';
    }
    
    return () => window.removeEventListener('resize', checkMobile);
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
        
        <Departments onDepartmentClick={handleDepartmentClick} />
        
        {selectedDepartment && (
          <JobListings 
            selectedDepartment={selectedDepartment} 
            onApplyClick={handleApplyClick}
          />
        )}
        
        <ApplicationForm selectedJob={selectedJob} />
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