import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PotteryTechniques = () => {
  const [expandedTechnique, setExpandedTechnique] = useState(null);

  const techniques = [
    {
      icon: "🤲",
      title: "Hand Building",
      description: "Shaping clay by hand using techniques like pinching, coiling, and slab building.",
      color: "from-amber-400 to-orange-500",
      details: [
        "Pinching: Creating forms by pinching and pulling clay",
        "Coiling: Building up walls with rolled clay coils",
        "Slab Building: Working with flat sheets of clay"
      ]
    },
    {
      icon: "🎡",
      title: "Wheel Throwing",
      description: "Using a potter's wheel to create symmetrical forms by spinning and shaping clay.",
      color: "from-orange-400 to-red-500",
      details: [
        "Centering: Balancing clay on the wheel",
        "Pulling: Drawing clay upward to form walls",
        "Shaping: Using tools to refine the form"
      ]
    },
    {
      icon: "🎨",
      title: "Glazing",
      description: "Applying liquid glass coatings to add color, texture, and waterproofing to pottery.",
      color: "from-red-400 to-pink-500",
      details: [
        "Underglaze: Color applied before firing",
        "Overglaze: Color applied after first firing",
        "Clear Glaze: Transparent protective coating"
      ]
    },
    {
      icon: "🔥",
      title: "Firing",
      description: "Heating clay in a kiln to high temperatures to harden and strengthen the material.",
      color: "from-pink-400 to-purple-500",
      details: [
        "Bisque Firing: First firing to harden clay",
        "Glaze Firing: Second firing to melt glaze",
        "Temperature Control: Precise heat management"
      ]
    }
  ];

  return (
    <motion.section 
      className="mb-20 relative overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 
          className="text-6xl font-bold text-amber-300 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textShadow: '0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)'
          }}
        >
          🏺 Pottery Techniques
        </motion.h2>

        <motion.p 
          className="text-gray-300 text-xl max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Master the fundamental methods that transform raw clay into beautiful ceramic art
        </motion.p>
      </motion.div>

      {/* Techniques Display */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            >
              {/* Main Technique Card */}
              <motion.div 
                className="relative cursor-pointer"
                onClick={() => setExpandedTechnique(expandedTechnique === index ? null : index)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background with Gradient Border */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${technique.color} opacity-20 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start space-x-6">
                    {/* Icon */}
                    <motion.div 
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${technique.color} flex items-center justify-center shadow-2xl`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-3xl">{technique.icon}</span>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {technique.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {technique.description}
                      </p>
                      
                      {/* Expand/Collapse Indicator */}
                      <motion.div 
                        className="mt-4 inline-flex items-center text-amber-400 font-medium cursor-pointer"
                        animate={{ rotate: expandedTechnique === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="mr-2">
                          {expandedTechnique === index ? 'Show Less' : 'Learn More'}
                        </span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${technique.color} opacity-0`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Expanded Details Panel */}
              <AnimatePresence>
                {expandedTechnique === index && (
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                                         <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-amber-300 mb-4">Key Methods:</h4>
                      <div className="space-y-3">
                        {technique.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${technique.color} mt-2 flex-shrink-0`} />
                            <p className="text-gray-200 text-sm leading-relaxed">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>


    </motion.section>
  );
};

export default PotteryTechniques;
