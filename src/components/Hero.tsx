import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, MessageCircle } from 'lucide-react';
import heroImg from '../assets/heroImg.png'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to Toscano Cafe & Restro – Taste the Elegance!";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919341658484?text=Hi%20Toscano%20Cafe!%20I%20would%20like%20to%20place%20an%20order.', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImg})`,
          // backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="text-amber-400">Toscano</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">Cafe & Restro</h2>
          
          <div className="text-base sm:text-lg md:text-xl mb-8 min-h-[60px] flex items-center justify-center px-2">
            <span className="border-r-2 border-amber-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToMenu}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
          >
            <Menu size={20} />
            <span>View Menu</span>
          </button>
          
          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
          >
            <MessageCircle size={20} />
            <span>Order on WhatsApp</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;