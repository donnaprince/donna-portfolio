import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PotteryTimeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const timelineItems = [
    {
      key: "Xianrendong Cave",
      title: "Xianrendong Cave Discovery",
      year: "c. 18,000–14,000 BCE",
      description: "Oldest known pottery discovered in China, hand-shaped and fired in open pits",
      icon: "🏺",
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-900/20 to-orange-900/20",
      borderColor: "border-amber-500/50"
    },
    {
      key: "Middle East Expansion",
      title: "Middle East Expansion",
      year: "c. 6000 BCE",
      description: "Pottery production expands in the Middle East; simple wheel techniques emerge",
      icon: "⚱️",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-900/20 to-red-900/20",
      borderColor: "border-orange-500/50"
    },
    {
      key: "Fast Potter's Wheel",
      title: "Fast Potter's Wheel Invention",
      year: "c. 3500 BCE",
      description: "Revolutionary fast potter's wheel invented in Mesopotamia, increasing production speed and uniformity",
      icon: "🔄",
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-900/20 to-pink-900/20",
      borderColor: "border-red-500/50"
    },
    {
      key: "Greek Pottery Flourishing",
      title: "Greek Pottery Flourishing",
      year: "c. 1500 BCE",
      description: "Greek pottery reaches artistic heights with black-figure and red-figure painting styles",
      icon: "🏛️",
      color: "from-pink-400 to-purple-500",
      bgColor: "from-pink-900/20 to-purple-900/20",
      borderColor: "border-pink-500/50"
    },
    {
      key: "Islamic Ceramics",
      title: "Islamic Ceramics Development",
      year: "c. 800–1200 CE",
      description: "Islamic artisans develop intricate glazed and lusterware ceramics",
      icon: "🕌",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-900/20 to-indigo-900/20",
      borderColor: "border-purple-500/50"
    },
    {
      key: "European Porcelain",
      title: "European Porcelain Era",
      year: "1600s–1800s",
      description: "European porcelain and fine china production becomes a luxury industry",
      icon: "🏰",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-900/20 to-blue-900/20",
      borderColor: "border-indigo-500/50"
    },
    {
      key: "Modern Pottery",
      title: "Modern Pottery Era",
      year: "Modern Day",
      description: "Pottery blends traditional techniques with contemporary design, including studio ceramics, sculptural works, and functional tableware",
      icon: "🎨",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-500/50"
    }
  ];

  return (
    <motion.div 
      className="mb-12"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.div 
        className="text-center mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h5 
          className="text-6xl font-bold text-amber-300 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textShadow: '0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)'
          }}
        >
          🏺 Interactive Pottery Timeline
        </motion.h5>
        
        <div className="max-w-7xl mx-auto">
                      {/* Horizontal Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-amber-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-indigo-500 to-cyan-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                style={{
                  boxShadow: '0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.3)'
                }}
              />
              
              {/* Timeline Items */}
            <div className="relative flex justify-between items-center py-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  className="relative group cursor-pointer flex flex-col items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8
                  }}
                  onClick={() => setSelectedItem(selectedItem === item.key ? null : item.key)}
                >
                  {/* Time Display - Above Circle */}
                  <motion.div 
                    className="mb-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <span className="font-semibold text-sm text-white bg-gray-800/80 px-3 py-1 rounded-lg border border-gray-600/50">
                      {item.year}
                    </span>
                  </motion.div>

                  {/* Timeline Circle Node */}
                  <motion.div 
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-2xl z-20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110`}
                    whileHover={{ 
                      boxShadow: '0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, -5, 5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title - Below Circle */}
                  <motion.div 
                    className="mt-4 text-center max-w-32"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  >
                    <h6 className="font-bold text-sm text-white leading-tight">
                      {item.title}
                    </h6>
                  </motion.div>

                  {/* Description - Below Title, Only When Clicked */}
                  <AnimatePresence>
                    {selectedItem === item.key && (
                      <motion.div
                        className="mt-4 text-center max-w-64"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-300 text-sm leading-relaxed bg-gray-800/80 p-3 rounded-lg border border-gray-600/50">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PotteryTimeline;
