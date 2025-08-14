import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PotteryTimeline from './PotteryTimeline';
import PotteryTechniques from './PotteryTechniques';
import PotteryProjects from './PotteryProjects';


const PotterySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <PotteryTimeline />
        
        {/* Section Divider */}
        <motion.div 
          className="my-16 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <div className="text-2xl">🏺</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
        </motion.div>

        <PotteryTechniques />
        
        {/* Section Divider */}
        <motion.div 
          className="my-16 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="text-2xl">🎨</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
        </motion.div>
        
        <PotteryProjects />

      </div>
    </section>
  );
};

export default PotterySection;
