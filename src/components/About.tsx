import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users } from 'lucide-react';
import aboutImg from '../assets/aboutImg.png'

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            <img
              src={aboutImg}
              alt="Toscano Cafe Interior"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-sm">Years of Excellence</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;