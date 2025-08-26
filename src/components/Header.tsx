import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-b border-gray-100' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl lg:text-3xl font-bold text-black cursor-pointer">
              Jet<span style={{ color: '#fede00' }}>Learn</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {[
              { name: 'Careers', id: 'departments' },
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
                  className="text-gray-700 hover:text-black hover:bg-yellow-50 px-4 py-2 rounded-xl transition-all duration-300 font-medium"
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
              className="text-gray-700 hover:text-black hover:bg-yellow-50 p-2 rounded-xl"
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
            className="md:hidden pb-4"
          >
            <div className="mt-2 grid gap-2 border-t border-gray-100 pt-3">
              <Button 
                variant="ghost" 
                className="justify-start text-gray-700 hover:text-black hover:bg-yellow-50 px-4 py-2 rounded-xl"
                onClick={() => scrollToSection('departments')}
              >
                Careers
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start text-gray-700 hover:text-black hover:bg-yellow-50 px-4 py-2 rounded-xl"
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