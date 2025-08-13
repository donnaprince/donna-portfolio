import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const CareerReel = ({ data }) => {
  const [focusedEpisode, setFocusedEpisode] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!data || !data.internships) {
    return (
      <section id="career-reel" className="section-padding bg-gradient-to-br from-muted to-white">
        <div className="container-custom">
          <h2 className="section-heading">Career Reel</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  const { internships } = data;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.episode-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          if (focusedEpisode !== index) {
            setIsTransitioning(true);
            setTimeout(() => {
              setFocusedEpisode(index);
              setIsTransitioning(false);
            }, 300);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [focusedEpisode]);

  const scrollToEpisode = (episodeIndex) => {
    const episodeElement = document.querySelector(`#episode-${episodeIndex}`);
    if (episodeElement) {
      episodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setFocusedEpisode(episodeIndex);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        className={`text-lg ${i < rating ? 'text-primary' : 'text-gray-300'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        ★
      </motion.span>
    ));
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="career-reel" className="section-padding bg-gradient-to-br from-muted to-white relative overflow-hidden">
      {/* Purple Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Movie Poster Style Heading */}
        <AnimatedSection delay={0.2} direction="up">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-4"
              style={{
                textShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)'
              }}
            >
              CAREER REEL
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-primary font-medium tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              THE COMPLETE SERIES
            </motion.p>
          </motion.div>
        </AnimatedSection>

        {/* Episode Navigation Carousel */}
        <motion.div 
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Episode Navigation</h3>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {internships.map((episode, index) => (
              <motion.button
                key={episode.id}
                onClick={() => scrollToEpisode(index)}
                className={`flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden relative group cursor-pointer transition-all duration-300 ${
                  focusedEpisode === index 
                    ? 'ring-4 ring-primary scale-105' 
                    : 'ring-2 ring-gray-300 hover:ring-primary/50'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Episode Thumbnail Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {episode.company === "Liberty Mutual" ? (
                    <img 
                      src="/images/libertymutual.png" 
                      alt="Liberty Mutual Logo" 
                      className="w-24 h-24 object-contain opacity-90"
                    />
                  ) : episode.company === "Palo Alto Networks" ? (
                    <img 
                      src="/images/paloalto.png" 
                      alt="Palo Alto Networks Logo" 
                      className="w-24 h-24 object-contain opacity-90"
                    />
                  ) : (
                    <div className="text-6xl opacity-60">{episode.posterImage}</div>
                  )}
                </div>
                
                {/* Episode Number Badge */}
                <div className="absolute top-2 left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {episode.id}
                </div>
              </motion.button>
            ))}
            
            {/* Season Finale on Same Line */}
            <motion.div 
              className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden relative group cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl">🎬</span>
                    <span className="text-gold font-bold text-sm">Season Finale</span>
                  </div>
                  <p className="text-gray-300 text-xs px-2">
                    From intern to innovator
                  </p>
                </div>
              </div>
              
              {/* Season Finale Badge */}
              <div className="absolute top-2 left-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black text-xs font-bold">
                SF
              </div>
            </motion.div>
          </div>
          
          {/* Episode Info Below Rectangles */}
          <div className="flex space-x-4 mt-4">
            {internships.map((episode, index) => (
              <div key={episode.id} className="flex-shrink-0 w-48 text-center">
                <h4 className="text-primary font-bold text-sm mb-1">Episode {episode.id}</h4>
                <p className="text-primary/80 text-xs">{episode.title}</p>
              </div>
            ))}
            {/* Season Finale Info */}
            <div className="flex-shrink-0 w-48 text-center">
              <h4 className="text-gold font-bold text-sm mb-1">Season Finale</h4>
              <p className="text-gold/80 text-xs">Career Journey</p>
            </div>
          </div>
        </motion.div>

        {/* Episode Cards */}
        <div className="space-y-24">
          {internships.map((episode, index) => (
            <motion.div
              key={episode.id}
              id={`episode-${index}`}
              className={`episode-section relative ${focusedEpisode === index ? 'z-20' : 'z-10'}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Cinematic Backdrop */}
              <div className="absolute inset-0 -m-8 rounded-3xl overflow-hidden opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-sm"></div>
              </div>

              {/* Episode Card */}
              <motion.div 
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border-2 transition-all duration-500 ${
                  focusedEpisode === index 
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                    : 'border-gray-700 hover:border-primary/50'
                }`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Episode Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                      style={{
                        textShadow: focusedEpisode === index ? '0 0 20px rgba(139, 92, 246, 0.6)' : 'none'
                      }}
                    >
                      Episode {episode.id} — {episode.title}
                    </motion.h3>
                    
                    {/* Episode Metadata Bar */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                        {episode.category || 'Software Engineering Internship'}
                      </span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full border border-secondary/30">
                        {episode.duration}
                      </span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full border border-accent/30">
                        {episode.status || 'Completed'}
                      </span>
                    </div>
                    
                    <motion.div 
                      className="text-primary text-lg font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      
                    </motion.div>
                  </div>
                  
                  {/* Poster Image */}
                  <motion.div 
                    className="text-8xl md:text-9xl mb-4 lg:mb-0 lg:ml-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {episode.company === "Liberty Mutual" ? (
                      <img 
                        src="/images/libertymutual.png" 
                        alt="Liberty Mutual Logo" 
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                    ) : episode.company === "Palo Alto Networks" ? (
                      <img 
                        src="/images/paloalto.png" 
                        alt="Palo Alto Networks Logo" 
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                    ) : (
                      episode.posterImage
                    )}
                  </motion.div>
                </div>

                {/* Episode Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Highlights */}
                  <div>
                    <motion.h4 
                      className="text-xl font-bold text-primary mb-4"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Highlights
                    </motion.h4>
                    <div className="space-y-3">
                      {episode.highlights.map((highlight, highlightIndex) => (
                        <motion.div 
                          key={highlightIndex}
                          className="flex items-start space-x-3"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 + highlightIndex * 0.1, type: "spring", stiffness: 300 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          <p className="text-gray-300 leading-relaxed">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Cameos */}
                    <motion.div 
                      className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-primary/30"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-sm font-semibold text-primary mb-2">Tech Cameos</h5>
                      <p className="text-gray-400 text-sm">{episode.techStack}</p>
                    </motion.div>

                    {/* Patent Section for Episode 2 */}
                    {episode.id === 2 && (
                      <motion.div 
                        className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border-2 border-yellow-500/40"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl">🏆</span>
                          <h5 className="text-sm font-bold text-yellow-600">PATENT PENDING</h5>
                        </div>
                        <p className="text-yellow-700 text-sm font-semibold mb-1">
                          Prisma Access Explicit Proxy SASE Inline Security - Detect & Mitigate
                        </p>
                        <p className="text-yellow-600 text-xs">August 2024</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column - LinkedIn Recommendations */}
                  <div>
                    <motion.h4 
                      className="text-xl font-bold text-primary mb-4"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Reviews
                    </motion.h4>
                    <div className="space-y-4">
                      {episode.linkedinRecommendations.map((rec, recIndex) => (
                        <motion.div 
                          key={recIndex}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-primary/30 transition-colors duration-300"
                          initial={{ x: 30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 + recIndex * 0.1, type: "spring", stiffness: 300 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          {/* Review Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-white">{rec.author}</h5>
                              <p className="text-sm text-gray-400">{rec.title} at {rec.company}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {renderStars(rec.rating)}
                            </div>
                          </div>
                          
                          {/* Review Content */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-2">{rec.content}</p>
                          
                          {/* Review Date */}
                          <p className="text-xs text-gray-500 text-right">{rec.date}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Episode Number Badge */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                {episode.id}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Cinematic Season Finale */}
        <AnimatedSection delay={0.8} direction="up">
          <motion.div 
            className="mt-24 relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Dramatic Cinematic Background */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-br from-violet-900 via-black to-black rounded-3xl overflow-hidden">
              {/* Light Rays/Lens Flare Effect */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold/20 via-transparent to-transparent transform -rotate-45"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-gold/15 via-transparent to-transparent transform rotate-45"
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1.2, 1, 1.2]
                  }}
                  transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
              </div>
              
              {/* Moving Golden Particles */}
              <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, -60],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                  />
                ))}
              </div>
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-gold/20"></div>
            </div>
            
            <motion.div 
              className="relative p-16 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Enhanced "Season Finale" Title with Glow Effect */}
              <motion.div className="mb-8">
                {Array.from("SEASON FINALE").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block text-6xl md:text-7xl lg:text-8xl font-bold text-white mx-1 relative"
                    initial={{ opacity: 0, y: 50, rotateX: 90, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    style={{
                      textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4), 0 0 90px rgba(255, 215, 0, 0.2)',
                      filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Gold Shimmer Underline Animation */}
              <motion.div 
                className="w-0 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold mx-auto mb-8 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3.5
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                From intern to innovator, this journey has been nothing short of extraordinary. 
                Each episode brought new challenges, skills, and growth opportunities that shaped 
                the foundation of my career in technology and creativity.
              </motion.p>

              {/* Enhanced Power Stats with Animated Progress Rings */}
              <motion.div 
                className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { 
                    icon: "🚀", 
                    label: "Technical Skills", 
                    value: "Advanced", 
                    subtitle: "Ready to Deploy",
                    percentage: 90
                  },
                  { 
                    icon: "🎯", 
                    label: "Leadership", 
                    value: "Emerging", 
                    subtitle: "Growing Fast",
                    percentage: 75
                  },
                  { 
                    icon: "💡", 
                    label: "Innovation", 
                    value: "Proven", 
                    subtitle: "Expect the Unexpected",
                    percentage: 85
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Enhanced Circular Progress Meter */}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="rgba(139, 92, 246, 0.2)"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="url(#goldGradient)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                          whileInView={{ 
                            strokeDasharray: `${2 * Math.PI * 40}`,
                            strokeDashoffset: `${2 * Math.PI * 40 * (1 - item.percentage / 100)}`
                          }}
                          transition={{ duration: 2, delay: 2 + index * 0.3 }}
                          viewport={{ once: true }}
                        />
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F5C518" />
                            <stop offset="100%" stopColor="#FFD700" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Center Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="text-4xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.icon}
                        </motion.div>
                      </div>
                      
                      {/* Sparkles at Progress End */}
                      <motion.div
                        className="absolute top-0 right-0 w-4 h-4"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4 + index * 0.3 }}
                      >
                        ✨
                      </motion.div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>
                    <p className="text-gold font-bold text-lg mb-1">{item.value}</p>
                    <p className="text-gray-400 text-sm italic">{item.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced "Now Casting" Call-to-Action */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-gold mb-4 relative"
                  animate={{ 
                    textShadow: [
                      '0 0 20px rgba(245, 197, 24, 0.8)',
                      '0 0 40px rgba(245, 197, 24, 1)',
                      '0 0 20px rgba(245, 197, 24, 0.8)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Now Casting for the Next Role
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Available December 2025 — Your company could be Season 2
                </motion.p>
                
                <motion.button
                  onClick={scrollToContact}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold px-8 py-4 rounded-lg text-lg shadow-2xl hover:shadow-gold/50 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Light Sweep Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10">Contact Me for the Sequel</span>
                  <motion.span
                    className="relative z-10"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🎬
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Enhanced "To be continued..." with Typewriter Effect */}
              <motion.div 
                className="mt-12 text-gold font-medium text-xl italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2.0 }}
                  className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
                  onClick={() => {
                    // Easter egg: could navigate to a hidden fun page
                  }}
                >
                  To be continued...
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Purple Scene Change Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-primary z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareerReel;
