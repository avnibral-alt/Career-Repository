import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyWorkWithUs } from './components/WhyWorkWithUs';
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
      document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
      document.documentElement.style.overflowX = 'hidden';
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // When embedded in an iframe, post dynamic height to parent and disable internal scrollbars
  useEffect(() => {
    const isEmbedded = window.self !== window.top;
    if (!isEmbedded) return;

    const setNoScroll = () => {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
    };

    const postHeight = () => {
      const doc = document;
      const height = Math.max(
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight,
        doc.body.offsetHeight,
        doc.documentElement.offsetHeight,
        doc.body.clientHeight,
        doc.documentElement.clientHeight
      );
      window.parent.postMessage({ type: 'JETLEARN_IFRAME_HEIGHT', height, href: window.location.href }, '*');
    };

    setNoScroll();
    postHeight();

    // Observe DOM size changes for dynamic updates (with fallback)
    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => {
        // Use rAF to coalesce multiple changes
        requestAnimationFrame(postHeight);
      });
      resizeObserver.observe(document.body);
    } else {
      mutationObserver = new MutationObserver(() => {
        requestAnimationFrame(postHeight);
      });
      mutationObserver.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    // Also listen to window resizes and font loading
    window.addEventListener('resize', postHeight);
    window.addEventListener('load', postHeight);
    if ((document as any).fonts) {
      const fonts: any = (document as any).fonts;
      if (typeof fonts.addEventListener === 'function') {
        fonts.addEventListener('loadingdone', postHeight as EventListener);
      } else if ('onloadingdone' in fonts) {
        fonts.onloadingdone = postHeight as any;
      }
    }

    // Periodic safety ping in case some changes are not observed
    const intervalId = window.setInterval(postHeight, 1000);

    return () => {
      resizeObserver && resizeObserver.disconnect();
      mutationObserver && mutationObserver.disconnect();
      window.removeEventListener('resize', postHeight);
      window.removeEventListener('load', postHeight);
      if ((document as any).fonts) {
        const fonts: any = (document as any).fonts;
        if (typeof fonts.removeEventListener === 'function') {
          fonts.removeEventListener('loadingdone', postHeight as EventListener);
        } else if ('onloadingdone' in fonts) {
          fonts.onloadingdone = null;
        }
      }
      window.clearInterval(intervalId);
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