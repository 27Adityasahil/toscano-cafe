import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919341658484?text=Hi%20Toscano%20Cafe!', '_blank');
  };

  return (
    <footer ref={ref} className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Toscano</h3>
            <p className="text-gray-300 mb-4">
              Taste the Elegance at Patna's finest cafe and restaurant. 
              Experience authentic flavors and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-amber-400 transition-colors" size={20} />
              <Instagram className="cursor-pointer hover:text-amber-400 transition-colors" size={20} />
              <Twitter className="cursor-pointer hover:text-amber-400 transition-colors" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-gray-300 text-sm break-words">
                  A-2-F, Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">93416 58484</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">8002050999</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">info@toscanocafe.com</span>
              </div> */}
            </div>
          </div>

          {/* Order Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Order Now</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Ready to experience the taste of elegance? Order now!
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Toscano Cafe & Restro. All rights reserved. | Designed with ❤️ for food lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;