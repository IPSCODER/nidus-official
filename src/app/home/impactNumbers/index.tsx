'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/layout/animation/AnimatedText';

const ImpactNumbers = () => {
  const stats = [
    { value: '100K+', label: 'App Downloads' },
    { value: '24/7', label: 'Service Availability' },
    { value: '10K+', label: 'Satisfied Users' },
    { value: '95%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-primary/5 via-white/20 to-primary/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <AnimatedText>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary drop-shadow-md">
              Our Impact in Numbers
            </h2>
          </AnimatedText>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of users worldwide, our services deliver quality and consistency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-10 flex flex-col items-center justify-center rounded-2xl 
                              bg-white/70 backdrop-blur-xl shadow-lg border border-white/20 
                              transition-transform duration-300 group-hover:shadow-xl">
                <AnimatedText>
                  <h3 className="text-6xl font-extrabold text-primary tracking-tight drop-shadow">
                    {item.value}
                  </h3>
                </AnimatedText>
                <AnimatedText>
                  <p className="mt-3 text-lg font-medium text-gray-700 group-hover:text-primary transition-colors">
                    {item.label}
                  </p>
                </AnimatedText>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
