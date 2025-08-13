import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useReducedMotion } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  parallax = false,
  parallaxSpeed = 0.5,
  ...props 
}) => {
  const [ref, isInView] = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();

  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 };
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
        return { x: 0, opacity: 1 };
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeOut"
      }}
      style={parallax && isInView ? {
        transform: `translateY(${window.scrollY * parallaxSpeed}px)`
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
