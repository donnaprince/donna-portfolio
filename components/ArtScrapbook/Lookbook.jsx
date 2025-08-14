import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Lookbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);



  const pages = [
    {
      id: 1,
      title: "Crochet Creation",
      description: "A beautiful hand-crocheted piece showcasing intricate patterns and delicate craftsmanship.",
      image: "/images/crochet1.png",
      type: "crochet"
    },
    {
      id: 2,
      title: "Yarn Artistry",
      description: "Another stunning crochet work demonstrating the versatility of yarn as a medium.",
      image: "/images/crochet2.png",
      type: "crochet"
    },
    {
      id: 3,
      title: "Fiber Masterpiece",
      description: "A third crochet creation highlighting the artist's skill and creativity with yarn.",
      image: "/images/crochet3.png",
      type: "crochet"
    },
    {
      id: 4,
      title: "Rug Tufting",
      description: "A unique rug tufting project that combines traditional techniques with modern design.",
      image: "/images/RugTufting.png",
      type: "tufting"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPage = (pageIndex) => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">🧶 Yarn & Crochet Lookbook</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flip through the pages to explore beautiful fiber art creations, from intricate crochet patterns to unique rug tufting projects.
          </p>
        </div>

        {/* Lookbook Container */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Book Container */}
            <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-2xl overflow-hidden transform perspective-1000 p-1">
              {/* Ombre Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 rounded-2xl -z-10"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl h-full">
              
              {/* Book Spine */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-amber-700 to-amber-900 z-10"></div>
              
              {/* Book Binding Rings */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full border-2 border-amber-900 shadow-inner z-20"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full border-2 border-amber-900 shadow-inner z-20"></div>
              
              {/* Book Cover Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-amber-100/50 opacity-30 z-5"></div>
              
              {/* Page Content */}
              <div className="relative z-20 bg-gradient-to-br from-white to-gray-50 min-h-[650px] rounded-lg m-5 shadow-inner border border-gray-200">
                {/* Page Margin Lines */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent"></div>
                  <div className="absolute right-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent"></div>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="p-8 h-full relative"
                  >
                    {/* Page Number */}
                    <div className="text-right mb-4">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-sm">
                        <span className="text-gray-700 font-semibold text-sm">
                          {currentPage + 1} / {pages.length}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {pages[currentPage].title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        {pages[currentPage].description}
                      </p>

                      {/* Image */}
                      <div className="relative mb-8">
                        <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 shadow-inner border border-gray-300">
                          {/* Photo Corner Tabs */}
                          <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-br-full shadow-lg z-10"></div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-bl-full shadow-lg z-10"></div>
                          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-tr-full shadow-lg z-10"></div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-tl-full shadow-lg z-10"></div>
                          
                          <div className="relative w-full h-96 rounded-lg overflow-hidden bg-white">
                            <Image
                              src={pages[currentPage].image}
                              alt={pages[currentPage].title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                            />
                          </div>
                          
                          {/* Decorative Stamps */}
                          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-80 shadow-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">★</span>
                          </div>
                          <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 shadow-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">♥</span>
                          </div>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full text-sm font-semibold shadow-xl border-2 border-amber-500">
                        <span className="mr-2">
                          {pages[currentPage].type === 'crochet' ? '🧶' : '🎨'}
                        </span>
                        {pages[currentPage].type === 'crochet' ? 'Crochet' : 'Rug Tufting'}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page Corner Fold Effect */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-amber-600 z-30"></div>
              
              {/* Bookmark */}
              <div className="absolute top-4 right-8 w-3 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-sm z-40 shadow-lg">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Decorative Stamps */}
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 z-30"></div>
              <div className="absolute top-8 left-12 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 z-30"></div>
              
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              {/* Previous Button */}
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                  currentPage === 0 || isFlipping
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 hover:scale-105 border-2 border-amber-500'
                }`}
                whileHover={currentPage > 0 && !isFlipping ? { scale: 1.05 } : {}}
                whileTap={currentPage > 0 && !isFlipping ? { scale: 0.95 } : {}}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xl">←</span>
                  <span>Previous</span>
                </span>
              </motion.button>

                          {/* Page Indicators */}
            <div className="flex flex-col items-center space-y-3">
              {/* Progress Bar */}
              <div className="w-40 h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Page Dots */}
              <div className="flex space-x-3">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    disabled={isFlipping}
                    className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 scale-125 shadow-lg'
                        : 'bg-gray-400 hover:bg-gray-300 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              {/* Page Counter */}
              <div className="text-gray-600 text-sm font-medium">
                {currentPage + 1} of {pages.length}
              </div>
            </div>

              {/* Next Button */}
              <motion.button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1 || isFlipping}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                  currentPage === pages.length - 1 || isFlipping
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 hover:scale-105 border-2 border-amber-500'
                }`}
                whileHover={currentPage < pages.length - 1 && !isFlipping ? { scale: 1.05 } : {}}
                whileTap={currentPage < pages.length - 1 && !isFlipping ? { scale: 0.95 } : {}}
              >
                <span className="flex items-center space-x-2">
                  <span>Next</span>
                  <span className="text-xl">→</span>
                </span>
              </motion.button>
            </div>

            {/* Navigation Hint */}
            <div className="text-center mt-6 text-gray-400 text-sm">
              <p>Click the buttons to navigate through the lookbook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
