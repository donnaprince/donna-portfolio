import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        🎨 Art Scrapbook
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Welcome to my creative journey! Explore the process behind each piece.
      </p>
    </motion.div>
  );
};

export default Hero;
