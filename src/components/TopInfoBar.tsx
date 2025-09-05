import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users } from 'lucide-react';

const TopInfoBar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm py-2 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-amber-600">Toscano</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Toscano Cafe & Testro, where culinary artistry meets warm hospitality. 
              Nestled in the heart of Patna, we've been serving authentic flavors and creating 
              memorable dining experiences since our inception.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our passionate chefs craft each dish with the finest ingredients, blending traditional 
              recipes with contemporary techniques. From aromatic Indian delicacies to continental 
              favorites, every meal is a celebration of taste and elegance.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="mx-auto text-amber-600 mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Quality</h3>
                <p className="text-sm text-gray-600">Premium Ingredients</p>
              </div>
              <div className="text-center">
                <Heart className="mx-auto text-amber-600 mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Passion</h3>
                <p className="text-sm text-gray-600">Crafted with Love</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto text-amber-600 mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Service</h3>
                <p className="text-sm text-gray-600">Exceptional Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
              <span className="text-center md:text-left text-xs md:text-sm">A-2-F, Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001</span>
              src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Toscano Cafe Interior"
          <div className="overflow-hidden w-full md:w-auto">
            
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-sm">Years of Excellence</p>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;