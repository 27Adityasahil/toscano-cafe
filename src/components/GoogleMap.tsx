import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GoogleMap: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find <span className="text-amber-600">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Patna, Toscano Cafe & Testro is easily accessible 
            and perfect for your dining experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6070866245477!2d85.1250989!3d25.617969399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59aa9443aa97%3A0x217c95dc4165530a!2sToscano%20Cafe%20%26%20Restro!5e0!3m2!1sen!2sin!4v1757088261467!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Toscano Cafe Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMap;