import React from 'react';

const GameModeSelector = ({ gameMode, setGameMode, currentCategory, setCurrentCategory }) => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setGameMode('gallery')}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            gameMode === 'gallery'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🖼️ Gallery Mode
        </button>
        <button
          onClick={() => setGameMode('canvas')}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            gameMode === 'canvas'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🎨 Interactive Canvas
        </button>
        <button
          onClick={() => setGameMode('quiz')}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            gameMode === 'quiz'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🧠 Art Quiz
        </button>
      </div>
      
      {/* Category Filter Buttons */}
      {gameMode === 'gallery' && (
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentCategory('yarn')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              currentCategory === 'yarn'
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
            }`}
          >
            <span className="text-xl">🧶</span>
            <span className="font-medium">Yarn & Crochet</span>
          </button>
          <button
            onClick={() => setCurrentCategory('pottery')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              currentCategory === 'pottery'
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
            }`}
          >
            <span className="text-xl">🏺</span>
            <span className="font-medium">Pottery</span>
          </button>
          <button
            onClick={() => setCurrentCategory('regional')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              currentCategory === 'regional'
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
            }`}
          >
            <span className="text-xl">🌍</span>
            <span className="font-medium">Regional Arts</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GameModeSelector;
