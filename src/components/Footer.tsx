import React from 'react';
import { Button } from './ui/button';
import { Linkedin, Mail, MessageCircle, Sparkles, TrendingUp, Target } from 'lucide-react';
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

  const innovationStats = [
    { icon: Sparkles, label: 'Innovation', value: 'AI-First' },
    { icon: TrendingUp, label: 'Growth', value: '200% YoY' },
    { icon: Target, label: 'Impact', value: 'Global' }
  ];

  return (
    <motion.footer 
      id="contact" 
      className="bg-gradient-to-br from-gray-50 to-white text-gray-900 py-16 lg:py-20 border-t border-gray-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Innovation stats section */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {innovationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffcf00' }}>
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffcf00' }}>
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                Jet<span style={{ color: '#ffcf00' }}>Learn</span>
              </span>
            </motion.div>
            <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
              Building the world's most innovative AI-powered learning platform. 
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
                    className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900 p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 group"
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
                          <h3 className="font-medium mb-6 text-gray-900 text-xl">Contact Us</h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href="mailto:hello@jet-learn.com"
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                  style={{ '--tw-text-opacity': '1', '--hover-color': '#ffcf00' } as any}
                >
                  hello@jet-learn.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-indigo-600" />
                <a 
                  href="https://wa.me/3197010286071" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                  style={{ '--tw-text-opacity': '1', '--hover-color': '#ffcf00' } as any}
                >
                  +31 97010286071 (WhatsApp)
                </a>
              </motion.div>
              
              {/* Innovation focus */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Innovation Focus</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>🤖 AI-Powered Learning</div>
                  <div>🌍 Global Impact</div>
                  <div>⚡ Rapid Innovation</div>
                </div>
              </div>
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
            © 2025 JetLearn. All rights reserved. | Innovation-Driven Education
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
                  className="text-gray-600 hover:text-yellow-600 text-base transition-all duration-300 inline-block"
                  style={{ '--tw-text-opacity': '1', '--hover-color': '#ffcf00' } as any}
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