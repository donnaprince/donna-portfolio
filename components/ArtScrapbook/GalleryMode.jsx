import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PotterySection from './PotterySection';
import ArtworkGrid from './ArtworkGrid';
import Lookbook from './Lookbook';

const GalleryMode = ({ currentCategory }) => {
  const [selectedArt, setSelectedArt] = useState(null);

  const openArtModal = (art) => {
    setSelectedArt(art);
  };

  const closeArtModal = () => {
    setSelectedArt(null);
  };

  return (
    <>
      {/* Pottery Section */}
      {currentCategory === 'pottery' && (
        <PotterySection />
      )}

      {/* Regional Arts Section */}
      {currentCategory === 'regional' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Regional Arts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore traditional crafts from around the world, each piece telling a story of cultural heritage and artistic tradition.
            </p>
          </div>
          
          <ArtworkGrid 
            currentCategory="regional" 
            onArtSelect={openArtModal}
          />
        </motion.div>
      )}

      {/* Yarn & Crochet Section */}
      {currentCategory === 'yarn' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <Lookbook />
        </motion.div>
      )}


      {/* Art Modal */}
      {selectedArt && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeArtModal}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-6xl w-full max-h-[95vh] overflow-y-auto border-2 border-primary/30 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl">
                  {selectedArt.category === 'yarn' ? '🧶' : 
                   selectedArt.category === 'pottery' ? '🏺' : '🌍'}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{selectedArt.title}</h2>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-lg text-gray-300 capitalize">{selectedArt.category}</span>
                    {selectedArt.country && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-lg text-gray-300">{selectedArt.country}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={closeArtModal}
                className="text-gray-400 hover:text-white text-3xl transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                ×
              </button>
            </div>



            {/* Materials and Tags Section - Moved Up */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Materials & Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Materials */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Materials</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedArt.materials.map((material, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/20 text-primary text-base rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedArt.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent/20 text-accent text-base rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps Section */}
            {selectedArt.processSteps && selectedArt.processSteps.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Process Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedArt.processSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.step}
                        </div>
                        <span className="text-xs text-gray-400">Step {step.step}</span>
                      </div>
                      
                      {/* Step Image */}
                      <div className="relative mb-4">
                        <img 
                          src={step.image} 
                          alt={`Step ${step.step}: ${step.title}`}
                          className={`w-full rounded-lg ${
                            step.image.includes('baltik') || step.image.includes('Resin3')
                              ? 'h-64 object-contain bg-gray-800' 
                              : 'h-48 object-cover'
                          }`}
                          style={{
                            objectPosition: step.image.includes('baltik') ? 'center' : 
                                         step.image.includes('Resin3') ? 'center' : 'center'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      </div>
                      
                      {/* Step Title & Description */}
                      <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Details and Description Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                {/* Project Details */}
                <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3 text-base text-gray-400">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📅</span>
                    <span><span className="font-medium">Year:</span> {selectedArt.year}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">⭐</span>
                    <span><span className="font-medium">Difficulty:</span> {selectedArt.difficulty}</span>
                  </div>
                  {selectedArt.country && (
                    <div className="flex items-center space-x-3">
                      <span className="text-primary">🌍</span>
                      <span><span className="font-medium">Country:</span> {selectedArt.country}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                {/* Description */}
                <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedArt.description}</p>
              </div>
            </div>



            {/* History */}
            {selectedArt.history && (
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Cultural History</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{selectedArt.history}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryMode;
