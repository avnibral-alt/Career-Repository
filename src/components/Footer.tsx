import { Button } from './ui/button';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialIcons = [
    { Icon: Linkedin, label: 'LinkedIn', href: '#' },
    { Icon: Mail, label: 'Email', href: 'mailto:hello@jet-learn.com' }
  ];

  const footerLinks = [
    { 
      name: 'Privacy Policy', 
      href: 'https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/634cc68d8c5aff79760c961f_JetLearn%20Privacy%20Policy.pdf' 
    },
    { 
      name: 'Terms & Conditions', 
      href: 'https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/6352c547310233fbe8308cda_Terms%20and%20Conditions.pdf' 
    }
  ];

  return (
    <motion.footer 
      id="contact" 
      className="bg-white text-black py-16 lg:py-20 border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl lg:text-3xl font-bold text-black">
                Jet<span style={{ color: '#fede00' }}>Learn</span>
              </span>
            </motion.div>
            <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
              Building the world's first Web3 & AI-powered online academy for kids. 
              Join our global team in revolutionizing education for the next generation.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, label, href }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <a
                    href={href}
                    className="inline-flex items-center justify-center text-gray-600 hover:text-black p-3 hover:bg-yellow-50 rounded-xl transition-all duration-300 group"
                    aria-label={label}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-6 text-black text-xl">Contact Us</h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-yellow-600" />
                <a 
                  href="mailto:hello@jet-learn.com"
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  hello@jet-learn.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-yellow-600" />
                <a 
                  href="https://wa.me/3197010286071" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  +31 97010286071 (WhatsApp)
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-gray-200 mt-12 lg:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-base">
            © 2025 JetLearn. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-base transition-all duration-300 inline-block"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.name}
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}