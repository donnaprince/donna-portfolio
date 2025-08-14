import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PotteryProjects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (projectId) => {
    console.log('Toggling card:', projectId, 'Current state:', flippedCards[projectId]);
    setFlippedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 'jewelry-tray',
      title: 'Tiered Jewelry Tray',
      beforeImage: '/images/JeweleryTrayBefore.jpg',
      afterImage: '/images/JeweleryTrayAfter.jpg',
      technique: 'Hand Building',
      description: 'A handcrafted three-tiered jewelry tray created using hand-building techniques. Each tier was formed with clay imprinted using textured mats to add intricate surface patterns, then shaped with a pinching method to gently raise and contour the edges. Once fired and finished, gold metal hardware was carefully screwed into place to connect the tiers, providing both structural support and an elegant visual accent.',
      afterDescription: 'A stunning three-tiered jewelry organizer with smooth glazing and elegant curves.',
      gradient: 'from-amber-400 to-orange-500',
      borderColor: 'border-amber-500/50',
      shadowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      id: 'bird-feeder',
      title: 'Bird Feeder',
      beforeImage: '/images/BirdFeederBefore.jpg',
      afterImage: '/images/BirdFeederAfter.heic',
      technique: 'Hand Building',
      description: 'A handcrafted ceramic bird feeder composed of two separate segments, the top cover and the bottom plate. Textured mats were used to imprint decorative patterns, while molds added sculpted birds and butterflies around the base for a nature-inspired touch. Wiring was threaded through the top and down to the base, allowing the feeder to open from above for easy refilling. Small arched openings were cut along the base to guide seeds onto the bottom plate, creating both a functional and visually appealing piece for garden use.',
      afterDescription: 'A beautiful ceramic bird feeder with nature-inspired decorations and functional design.',
      gradient: 'from-orange-400 to-red-500',
      borderColor: 'border-orange-500/50',
      shadowColor: 'rgba(251, 146, 60, 0.3)'
    },
    {
      id: 'basket-weaving',
      title: 'Basket Weaving',
      beforeImage: '/images/BasketBefore.jpeg',
      afterImage: '/images/BasketAfter.jpg',
      technique: 'Hand Building',
      description: 'A handwoven basket created using traditional weaving techniques with natural materials, showcasing the beauty of functional fiber arts.',
      afterDescription: 'A beautifully crafted woven basket with natural materials and traditional techniques.',
      gradient: 'from-red-400 to-pink-500',
      borderColor: 'border-red-500/50',
      shadowColor: 'rgba(239, 68, 68, 0.3)'
    },
    {
      id: 'textured-platter',
      title: 'Textured Platter',
      beforeImage: '/images/PlatterBefore.png',
      afterImage: '/images/PlatterAfter.png',
      technique: 'Hand Building',
      description: 'A handcrafted ceramic platter with intricate surface textures and beautiful glazing. The textured surface adds both visual interest and functional grip. Perfect for serving and display.',
      afterDescription: 'A stunning ceramic platter with beautiful textures and elegant glazing.',
      gradient: 'from-pink-400 to-purple-500',
      borderColor: 'border-pink-500/50',
      shadowColor: 'rgba(236, 72, 153, 0.3)'
    },
    {
      id: 'garden-flower',
      title: 'Garden Flower',
      beforeImage: '/images/GardenFlowerBefore.jpeg',
      afterImage: '/images/FlowerBefore.png',
      technique: 'Hand Building',
      description: 'A beautiful garden flower project featuring handcrafted ceramic elements with intricate designs and natural inspiration.',
      afterDescription: 'A stunning ceramic garden flower with intricate natural designs.',
      gradient: 'from-purple-400 to-indigo-500',
      borderColor: 'border-purple-500/50',
      shadowColor: 'rgba(139, 92, 246, 0.3)'
    },
    {
      id: 'flower-project',
      title: 'Flower Project',
      beforeImage: '/images/FlowerBefore.png',
      afterImage: '/images/FlowerBefore.png',
      technique: 'Hand Building',
      description: 'A beautiful flower project featuring handcrafted ceramic elements with intricate designs and natural inspiration.',
      afterDescription: 'A stunning ceramic flower with intricate natural designs.',
      gradient: 'from-indigo-400 to-blue-500',
      borderColor: 'border-indigo-500/50',
      shadowColor: 'rgba(99, 102, 241, 0.3)'
    },

  ];

  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h4 className="text-6xl font-bold text-amber-300 mb-4" style={{
        textShadow: '0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.4)'
      }}>
        🏺 Pottery Projects
      </h4>
      <p className="text-lg text-gray-300">My Pottery Journey Seen Below</p>

      {/* Pottery Projects Grid */}
      <motion.div 
        className="max-w-6xl mx-auto mt-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer perspective-1000"
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              style={{ filter: `drop-shadow(0 0 20px ${project.shadowColor})` }}
              onClick={() => toggleCard(project.id)}
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-[28rem]" style={{ perspective: '1000px' }}>
                <motion.div 
                  className="w-full h-full relative"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: (flippedCards[project.id] || false) ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front Side - Before Image */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-6 border-2 ${project.borderColor} hover:border-opacity-100 transition-all duration-500 shadow-2xl h-full flex flex-col group-hover:shadow-2xl`} style={{ boxShadow: `0 0 20px ${project.shadowColor}, 0 0 40px ${project.shadowColor.replace('0.3', '0.1')}` }}>
                      {/* Project Image - Fixed height */}
                      <div className="h-64 mb-4">
                        <img 
                          src={project.beforeImage} 
                          alt={`${project.title} - Before`}
                          className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                      </div>
                      
                      {/* Project Info - Fixed structure */}
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        
                        {/* Hand Building Tag */}
                        <div className="mb-3">
                          <span className="inline-block text-sm px-3 py-1 rounded-full border bg-white/20 text-white border-white/50 backdrop-blur-sm">
                            Hand Building
                          </span>
                        </div>
                        
                        {/* Click Hint - Fixed at bottom */}
                        <div className="mt-auto">
                          <p className="text-white/80 text-xs">Click to see details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side - After Image with Text */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                  >
                    <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-6 border-2 ${project.borderColor} transition-all duration-500 shadow-2xl h-full flex flex-col group-hover:shadow-2xl`} style={{ boxShadow: `0 0 20px ${project.shadowColor}, 0 0 60px ${project.shadowColor.replace('0.3', '0.2')}` }}>
                      {/* Project Image - Fixed height, same as front */}
                      <div className="h-64 mb-4">
                        {!(project.id === 'garden-flower' || project.id === 'flower-project') ? (
                          <img 
                            src={project.afterImage} 
                            alt={`${project.title} - After`}
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <h3 className="text-4xl font-bold text-white mb-3">COMING SOON</h3>
                              <p className="text-white/80 text-lg">Project in progress</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Details - Fixed structure, same as front */}
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">Finished Masterpiece</h3>
                        
                        {/* Hand Building Tag - Only show when flipped (on back side) */}
                        {flippedCards[project.id] && (
                          <div className="mb-3">
                            <span className="inline-block text-sm px-3 py-1 rounded-full border bg-white/20 text-white border-white/50 backdrop-blur-sm">
                              Hand Building
                            </span>
                          </div>
                        )}
                        
                        {/* Description - Flexible content area */}
                        <div className="flex-1 mb-3">
                          <p className="text-white/90 text-sm leading-relaxed">
                            {project.afterDescription}
                          </p>
                        </div>
                        

                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PotteryProjects;
