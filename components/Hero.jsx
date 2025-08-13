import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(0);
  const heroRef = useRef(null);
  
  // Motion values for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax transforms
  const backgroundX = useTransform(mouseX, [-300, 300], [-50, 50]);
  const backgroundY = useTransform(mouseY, [-300, 300], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
        
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(Date.now());
    };

    window.addEventListener('mousemove', handleMouseMove);
    const timeInterval = setInterval(handleTimeUpdate, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timeInterval);
    };
  }, [mouseX, mouseY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (event, sectionId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <AnimatedSection id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-primaryDark to-black text-white">
      <div ref={heroRef} className="absolute inset-0">
        {/* Enhanced Bokeh Animation - Multiple Layers for Depth */}
        
        {/* Primary Bokeh Layer - Large, soft, blurred circles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${300 + Math.random() * 400}px`,
                height: `${300 + Math.random() * 400}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(139, 92, 246, ${0.15 + Math.random() * 0.2}) 0%, transparent 70%)`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 120, 0],
                y: [0, (Math.random() - 0.5) * 100, 0],
                scale: [1, 1.3 + Math.random() * 0.4, 1],
                opacity: [0.15, 0.35 + Math.random() * 0.2, 0.15]
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4
              }}
            />
          ))}
        </div>

        {/* Secondary Bokeh Layer - Medium circles for depth */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`bokeh-${i}`}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(192, 132, 252, ${0.1 + Math.random() * 0.15}) 0%, transparent 70%)`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 80, 0],
                y: [0, (Math.random() - 0.5) * 60, 0],
                scale: [1, 1.2 + Math.random() * 0.3, 1],
                opacity: [0.1, 0.25 + Math.random() * 0.15, 0.1]
              }}
              transition={{
                duration: 25 + Math.random() * 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 6
              }}
            />
          ))}
        </div>

        {/* Tertiary Bokeh Layer - Small circles for fine detail */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`bokeh-small-${i}`}
              className="absolute rounded-full blur-xl"
              style={{
                width: `${150 + Math.random() * 250}px`,
                height: `${150 + Math.random() * 250}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(232, 121, 249, ${0.08 + Math.random() * 0.12}) 0%, transparent 70%)`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 40, 0],
                y: [0, (Math.random() - 0.5) * 30, 0],
                scale: [1, 1.1 + Math.random() * 0.2, 1],
                opacity: [0.08, 0.2 + Math.random() * 0.1, 0.08]
              }}
              transition={{
                duration: 30 + Math.random() * 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8
              }}
            />
          ))}
        </div>

        {/* Gradient Glow Sweep - Diagonal light sweep every ~15s */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent transform -rotate-45"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle Field - Tiny gold/white sparkles rising gently */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 0.2, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* Subtle Noise Overlay - Film-grain texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Background Parallax Layer */}
        <motion.div 
          className="absolute inset-0"
          style={{
            x: backgroundX,
            y: backgroundY
          }}
        >
          {/* Additional floating elements that move with mouse */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          
          {/* Extra prominent bokeh elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-secondary/30 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.45, 0.25],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          />
        </motion.div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        
        {/* Graduation Badge with Gentle Pulse */}
        <motion.div 
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium mb-8 shadow-lg border border-white/20 relative group"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="text-lg"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎓
          </motion.span>
          <span className="text-sm font-semibold">Graduating December 2025</span>
          <motion.span 
            className="text-lg"
            animate={{ rotate: [0, -5, 0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            🎓
          </motion.span>
        </motion.div>

        {/* Main Hero Content */}
        <motion.div 
          className="text-center z-10 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            
            {/* "Donna Prince" - Clean and simple */}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Simple text with subtle glow */}
              <span className="relative z-10 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                Donna Prince
              </span>
            </motion.span>
          </motion.h1>
          
          {/* "Software Engineer & Product Thinker" - fade in without weird shading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-primaryLight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer & Product Thinker
          </motion.h2>

          {/* Tagline - smooth fade from bottom */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Crafting digital experiences that blend technical excellence with creative innovation. 
            Passionate about building technology that makes a difference in people's lives.
          </motion.p>

          {/* Cinematic CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* "View Projects" Button */}
            <motion.button
              onClick={() => scrollToSection('career-reel')}
              onKeyDown={(e) => handleKeyDown(e, 'career-reel')}
              className="btn-primary-enhanced touch-target px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="View my projects and experience"
            >
              {/* Gradient background with gold → purple shimmer animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
              
              {/* Light sweep animation every 5s */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Projects</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              
              {/* Hover glow ring */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-transparent"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            {/* "Contact Me" Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, 'contact')}
              className="btn-secondary-enhanced touch-target px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="Get in touch with me"
            >
              {/* Starts slightly dimmed; on hover → gold outline with glow */}
              <div className="absolute inset-0 bg-gray-800/50 group-hover:bg-gray-700 transition-colors duration-200" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-200" />
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>Contact Me</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Academic Stats with Darker Text and Updated Focus Areas */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {[
              { icon: "💻", label: "Focus Areas", value: "Software Development" },
              { icon: "💼", label: "Experience", value: "3 Internships" },
              { icon: "🔬", label: "Research", value: "3 Projects" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 relative group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 1.5 
                  }}
                >
                  {stat.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</h4>
                <p className="text-gray-800 dark:text-primary font-medium font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
