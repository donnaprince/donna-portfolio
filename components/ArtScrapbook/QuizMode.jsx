import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const QuizMode = () => {
  const [quizMode, setQuizMode] = useState('matching');
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [selectedArtForm, setSelectedArtForm] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchingScore, setMatchingScore] = useState(0);

  // Quiz questions data
  const quizQuestions = [
    {
      question: "What is the traditional Indonesian textile art that uses wax-resist dyeing?",
      options: ["Batik", "Tie-dye", "Screen printing", "Embroidery"],
      correct: 0,
      explanation: "Batik is the correct answer! This ancient Indonesian art form uses wax to create intricate patterns before dyeing."
    },
    {
      question: "Which country is known for traditional mosaic lamps?",
      options: ["Turkey", "Morocco", "India", "Greece"],
      correct: 0,
      explanation: "Turkey is correct! Turkish mosaic lamps date back to the Ottoman Empire and feature beautiful glass patterns."
    },
    {
      question: "What material is traditionally used in Lippan art?",
      options: ["Clay", "Wood", "Metal", "Glass"],
      correct: 0,
      explanation: "Clay is the right answer! Lippan art uses clay mixed with adhesive to create raised designs on wooden boards."
    },
    {
      question: "What technique involves applying wax to fabric before dyeing?",
      options: ["Batik", "Bleaching", "Weaving", "Knitting"],
      correct: 0,
      explanation: "Batik is correct! The wax-resist technique protects areas from absorbing dye, creating beautiful patterns."
    },
    {
      question: "Which art form is recognized by UNESCO as Intangible Heritage?",
      options: ["Batik", "Mosaic", "Pottery", "All of the above"],
      correct: 0,
      explanation: "Batik is the answer! UNESCO recognized Indonesian Batik as a Masterpiece of Oral and Intangible Heritage."
    },
    {
      question: "What is the main purpose of mirrors in Lippan art?",
      options: ["Decoration", "Ward off evil spirits", "Reflect light", "All of the above"],
      correct: 3,
      explanation: "All of the above! Mirrors in Lippan art serve decorative purposes, ward off evil spirits, and reflect light."
    },
    {
      question: "Which material is NOT typically used in Turkish mosaic lamps?",
      options: ["Colored glass", "Plaster", "Metal wire", "Fabric"],
      correct: 3,
      explanation: "Fabric is not used! Turkish mosaic lamps use colored glass, plaster, and metal components."
    },
    {
      question: "What effect does salt create in Batik dyeing?",
      options: ["Smooth finish", "Textured effect", "Faster drying", "Color preservation"],
      correct: 1,
      explanation: "Textured effect! Salt creates a textured, airy effect that suggests motion and adds visual interest."
    }
  ];

  // Matching game data
  const matchingPairs = [
    {
      artForm: "Batik",
      description: "Wax-resist dyeing technique from Indonesia",
      icon: "🧶",
      gradient: "from-pink-500 via-rose-500 to-purple-600"
    },
    {
      artForm: "Mosaic",
      description: "Arranging small pieces to create patterns",
      icon: "🏺",
      gradient: "from-blue-500 via-cyan-500 to-indigo-600"
    },
    {
      artForm: "Lippan",
      description: "Clay and mirror work from India",
      icon: "🌍",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600"
    }
  ];

  const handleQuizAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizQuestions[currentQuestion].correct;
    
    setCurrentAnswer(selectedOption);
    setShowFeedback(true);
    
    if (isCorrect) {
      setQuizScore(prevScore => prevScore + 1);
    }
    
    // Show feedback briefly before moving to next question or completing quiz
    setTimeout(() => {
      setShowFeedback(false);
      setCurrentAnswer(null);
      
      // Check if this was the final question
      if (currentQuestion === quizQuestions.length - 1) {
        setIsQuizComplete(true);
        return;
      } else {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuizScore(0);
    setCurrentQuestion(0);
    setCurrentAnswer(null);
    setShowFeedback(false);
    setIsQuizComplete(false);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleArtFormSelect = (artForm) => {
    setSelectedArtForm(artForm);
  };

  const handleDescriptionSelect = (description) => {
    if (!selectedArtForm) return;
    
    const pair = matchingPairs.find(p => p.artForm === selectedArtForm.artForm);
    const isCorrect = pair.description === description;
    
    if (isCorrect) {
      setMatchingScore(prev => prev + 1);
      setMatchedPairs(prev => [...prev, { artForm: selectedArtForm.artForm, description }]);
    }
    
    setSelectedArtForm(null);
  };

  const resetMatchingGame = () => {
    setMatchingScore(0);
    setMatchedPairs([]);
    setSelectedArtForm(null);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-6">🧠 Art Quiz</h2>
      <p className="text-gray-300 mb-8">Test your knowledge about different art forms and techniques!</p>
      
      {/* Quiz Mode Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setQuizMode('matching')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            quizMode === 'matching'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🧩 Matching Game
        </button>
        <button
          onClick={() => setQuizMode('multiple-choice')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            quizMode === 'multiple-choice'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          ❓ Multiple Choice
        </button>
      </div>

      {/* Quiz Content */}
      {quizMode === 'multiple-choice' && (
        <div className="max-w-3xl mx-auto">
          {!isQuizComplete && currentQuestion < quizQuestions.length ? (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border-2 border-primary/30 shadow-2xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{quizScore}</div>
                    <div className="text-sm text-gray-400">points</div>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary via-secondary to-accent h-4 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Question */}
              <div className="mb-10">
                <p className="text-2xl text-white leading-relaxed font-medium">{quizQuestions[currentQuestion].question}</p>
              </div>
              
              {/* Answer Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                  const isSelected = currentAnswer === index;
                  const isCorrect = index === quizQuestions[currentQuestion].correct;
                  const showResult = showFeedback;
                  
                  const gradients = [
                    "from-pink-500 via-rose-500 to-pink-600",
                    "from-blue-500 via-cyan-500 to-blue-600", 
                    "from-emerald-500 via-teal-500 to-emerald-600",
                    "from-orange-500 via-amber-500 to-orange-600"
                  ];
                  
                  let optionClass = "relative p-6 text-left rounded-2xl transition-all duration-300 font-semibold text-lg cursor-pointer border-2 transform hover:scale-105 hover:shadow-2xl";
                  
                  if (showResult) {
                    if (isCorrect) {
                      optionClass += " bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-400 shadow-lg";
                    } else if (isSelected && !isCorrect) {
                      optionClass += " bg-gradient-to-r from-red-500 to-pink-600 text-white border-red-400 shadow-lg";
                    } else {
                      optionClass += " bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 border-gray-500 opacity-60";
                    }
                  } else {
                    optionClass += ` bg-gradient-to-r ${gradients[index]} text-white border-white/30 hover:border-white/50`;
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showFeedback && handleQuizAnswer(index)}
                      disabled={showFeedback}
                      className={optionClass}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{option}</span>
                        
                        {showResult && (
                          <span className="text-3xl">
                            {isCorrect ? "✅" : (isSelected ? "❌" : "")}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Feedback */}
              {showFeedback && (
                <motion.div 
                  className={`mt-8 p-6 rounded-2xl border-2 text-center ${
                    currentAnswer === quizQuestions[currentQuestion].correct
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400 text-green-200"
                      : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400 text-red-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl mb-3">
                    {currentAnswer === quizQuestions[currentQuestion].correct ? "🎉" : "❌"}
                  </div>
                  <div className="text-2xl font-bold mb-3">
                    {currentAnswer === quizQuestions[currentQuestion].correct ? "Correct!" : "Incorrect"}
                  </div>
                  <p className="text-lg leading-relaxed">
                    {quizQuestions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}
              
              {/* Score Display */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-primary/20 to-secondary/20 px-8 py-4 rounded-full border-2 border-primary/30 backdrop-blur-sm">
                  <span className="text-white font-semibold text-lg">Score:</span>
                  <span className="text-3xl font-bold text-primary">{quizScore}</span>
                  <span className="text-white text-lg">/</span>
                  <span className="text-white font-semibold text-lg">{quizQuestions.length}</span>
                </div>
              </div>
            </div>
          ) : (
            <motion.div 
              className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-10 border-2 border-primary/30 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              onAnimationComplete={triggerConfetti}
            >
              <div className="text-center">
                <div className="text-8xl mb-6">🎉</div>
                <h3 className="text-4xl font-bold text-white mb-6">Quiz Complete!</h3>
                
                <div className="mb-8">
                  <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-3">
                    {quizScore}
                  </div>
                  <div className="text-2xl text-white">out of {quizQuestions.length}</div>
                </div>
                
                <div className="mb-10">
                  {quizScore === quizQuestions.length ? (
                    <div className="bg-gradient-to-r from-yellow-500/30 to-amber-500/30 p-6 rounded-2xl border-2 border-yellow-400/50">
                      <div className="text-3xl mb-3">🏆 Perfect Score!</div>
                      <p className="text-yellow-200 text-lg">You're an art expert! Incredible knowledge!</p>
                    </div>
                  ) : quizScore >= quizQuestions.length * 0.8 ? (
                    <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 p-6 rounded-2xl border-2 border-green-400/50">
                      <div className="text-3xl mb-3">🎨 Excellent!</div>
                      <p className="text-green-200 text-lg">Great job! You really know your art!</p>
                    </div>
                  ) : quizScore >= quizQuestions.length * 0.6 ? (
                    <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 p-6 rounded-2xl border-2 border-blue-400/50">
                      <div className="text-3xl mb-3">👍 Good Work!</div>
                      <p className="text-blue-200 text-lg">Solid performance! Keep learning!</p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-6 rounded-2xl border-2 border-purple-400/50">
                      <div className="text-3xl mb-3">📚 Keep Learning!</div>
                      <p className="text-purple-200 text-lg">Good effort! Art is a journey of discovery!</p>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={resetQuiz}
                  className="px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/25"
                >
                  🔄 Play Again
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {quizMode === 'matching' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-pink-500/50 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">🧩 Art Matching Game</h3>
              <p className="text-gray-200 text-lg">Drag and drop to match the art forms with their descriptions!</p>
              <div className="mt-4 inline-flex items-center space-x-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 px-6 py-3 rounded-full border border-pink-400/50 shadow-lg">
                <span className="text-white font-semibold">Score:</span>
                <span className="text-2xl font-bold text-pink-300">{matchingScore}</span>
                <span className="text-white">/</span>
                <span className="text-white font-semibold">{matchingPairs.length}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Art Forms Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-pink-300 flex items-center">
                  <span className="mr-2">🎨</span>
                  Art Forms (Drag from here)
                </h4>
                <div className="space-y-3">
                  {matchingPairs.map((pair, index) => {
                    const isMatched = matchedPairs.some(mp => mp.artForm === pair.artForm);
                    
                    return (
                      <motion.div
                        key={pair.artForm}
                        draggable={!isMatched}
                        onDragStart={(e) => {
                          if (!isMatched) {
                            e.dataTransfer.setData('text/plain', pair.artForm);
                            e.currentTarget.classList.add('opacity-50');
                          }
                        }}
                        onDragEnd={(e) => {
                          e.currentTarget.classList.remove('opacity-50');
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-grab active:cursor-grabbing transform hover:scale-105 ${
                          isMatched 
                            ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400 opacity-60' 
                            : `bg-gradient-to-r ${pair.gradient} border-white/40 hover:border-white/60 hover:shadow-xl shadow-lg`
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{pair.icon}</span>
                          <span className="text-white font-semibold">{pair.artForm}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              {/* Descriptions Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-300 flex items-center">
                  <span className="mr-2">📝</span>
                  Descriptions (Drop here)
                </h4>
                <div className="space-y-3">
                  {matchingPairs.map((pair, index) => {
                    const isMatched = matchedPairs.some(mp => mp.description === pair.description);
                    
                    return (
                      <motion.div
                        key={pair.description}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          const draggedArtForm = e.dataTransfer.getData('text/plain');
                          if (draggedArtForm === pair.artForm) {
                            handleDescriptionSelect(pair.description);
                          }
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          isMatched 
                            ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400 opacity-60' 
                            : 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-400/50 hover:border-purple-400/70 hover:shadow-xl shadow-lg'
                        }`}
                      >
                        <p className={`text-sm leading-relaxed ${
                          isMatched ? 'text-green-200' : 'text-purple-200'
                        }`}>
                          {pair.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={resetMatchingGame}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🔄 Reset Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizMode;
