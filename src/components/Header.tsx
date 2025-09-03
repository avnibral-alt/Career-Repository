import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#fede00' }}>
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 cursor-pointer">
                Jet<span style={{ color: '#fede00' }}>Learn</span>
              </span>
            </div>
            
            {/* Innovation indicator */}
            <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full border-2"
                 style={{ backgroundColor: '#fede00', color: '#000', borderColor: '#e5b800' }}>
              <Sparkles className="w-3 h-3" />
              <span className="text-xs font-semibold">Innovation</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {[
              { name: 'Global Careers', id: 'departments' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-base"
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-2.5 rounded-xl"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* Mobile nav panel */}
        {isMenuOpen && (
          <motion.nav 
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden pb-4 bg-white border-t border-gray-200"
          >
            <div className="mt-2 grid gap-2 pt-3">
              <Button 
                variant="ghost" 
                className="justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-3 rounded-xl text-base font-medium"
                onClick={() => scrollToSection('departments')}
              >
                Global Careers
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-3 rounded-xl text-base font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}