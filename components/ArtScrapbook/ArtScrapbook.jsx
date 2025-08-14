import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import Hero from './Hero';
import GameModeSelector from './GameModeSelector';
import GalleryMode from './GalleryMode';
import CanvasMode from './CanvasMode';
import QuizMode from './QuizMode';

const ArtScrapbook = () => {
  const [gameMode, setGameMode] = useState('gallery');
  const [currentCategory, setCurrentCategory] = useState('pottery');

  return (
    <>
      <Head>
        <title>Art Scrapbook - Donna Prince</title>
        <meta name="description" content="Explore my creative journey through various art forms and crafts" />
      </Head>

      <Navigation />
      
      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <Hero />
          
          <GameModeSelector 
            gameMode={gameMode} 
            setGameMode={setGameMode}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />

          {/* Content based on game mode */}
          {gameMode === 'gallery' && (
            <GalleryMode currentCategory={currentCategory} />
          )}

          {gameMode === 'canvas' && (
            <CanvasMode />
          )}

          {gameMode === 'quiz' && (
            <QuizMode />
          )}
        </div>
      </main>
    </>
  );
};

export default ArtScrapbook;
