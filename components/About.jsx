import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = ({ data }) => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);
  
  // Motion values for photo parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const photoX = useTransform(mouseX, [-300, 300], [-15, 15]);
  const photoY = useTransform(mouseY, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = event.currentTarget?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const section = document.getElementById('about');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  if (!data) {
    return (
      <section id="about" className="section-padding bg-gradient-to-br from-muted to-white">
        <div className="container-custom">
          <h2 className="section-heading">About Me</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  const { personalInfo, bio, highlights, education, interests } = data;

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-muted to-white relative overflow-hidden">
      {/* Purple Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 section-heading movie-title" style={{
          textShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>ABOUT ME</h2>
        
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-12">
          {/* Left Column - Cinematic Photo Area */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative flex flex-col items-center">
              {/* Profile Picture - Simple Frame */}
              <div className="relative w-96 h-[28rem] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
                {/* Profile Picture */}
                <img 
                  src="/images/profilepic.jpeg" 
                  alt="Donna Prince" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2. Character Stats Below Photo */}
              <motion.div 
                className="mt-6 grid grid-cols-1 gap-4 w-full max-w-sm"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <img src="/images/purduelogo.png" alt="Purdue" className="w-6 h-6 object-contain" />,
                    title: "Education",
                    value: "Purdue University, B.S. Computer Science, Dec 2025",
                    details: "Majoring in Computer Science with focus on Software Engineering and Human-Computer Interaction"
                  },
                  {
                    icon: "💻",
                    title: "Core Skills",
                    value: "Java, Python, HTML, CSS, C",
                    details: "Full-stack development, modern frameworks, and product thinking approach"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 cursor-pointer group transition-all duration-200 ${
                      hoveredStat === index ? 'border-primary/50 shadow-lg shadow-primary/20' : 'hover:border-primary/30'
                    }`}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    {/* Card Content */}
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-2xl">{stat.icon}</div>
                      <h4 className="font-semibold text-white">{stat.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{stat.value}</p>
                    
                    {/* Hover Details */}
                    <motion.div
                      className="text-gray-400 text-xs leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredStat === index ? 1 : 0,
                        height: hoveredStat === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.details}
                    </motion.div>
                    
                    {/* Hover Glow Effect */}
                    {hoveredStat === index && (
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Personal Info */}
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{personalInfo?.title || 'Software Engineer & Product Thinker'}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {bio || 'Passionate about creating technology that makes a difference in people\'s lives.'}
              </p>
              
              {/* Highlights */}
              <div className="space-y-2">
                {highlights?.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Episode Timeline - "Origin Story" */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="mr-2">🎬</span>
                Origin Story
              </h3>
              
              {/* Filmstrip Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                
                {/* Scrollable Filmstrip */}
                <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                  <motion.div
                    className="flex flex-col items-center min-w-[200px] group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveTimelineItem(0)}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Film Frame */}
                    <motion.div 
                      className={`relative w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 overflow-hidden ${
                        activeTimelineItem === 0 ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-600 group-hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Frame Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                          src="/images/purduelogo.png" 
                          alt="Purdue University" 
                          className="w-16 h-16 object-contain opacity-80"
                        />
                      </div>
                      
                      {/* Frame Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                          <p className="text-white font-semibold text-sm">Computer Science</p>
                          <p className="text-gray-300 text-xs">Purdue University</p>
                        </div>
                      </div>
                      
                      {/* Film Perforations */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                      <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-3 ${
                        activeTimelineItem === 0 ? 'bg-primary scale-125' : 'bg-primary'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      1
                    </motion.div>
                    
                    {/* Episode Info */}
                    <div className="text-center mt-2">
                      <h4 className="text-sm font-semibold text-gray-800">Computer Science</h4>
                      <p className="text-xs text-gray-500 mt-1">Purdue University</p>
                    </div>
                  </motion.div>

                  {/* Graduation Block */}
                  <motion.div
                    className="flex flex-col items-center min-w-[200px] group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveTimelineItem(1)}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Film Frame */}
                    <motion.div 
                      className={`relative w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 overflow-hidden ${
                        activeTimelineItem === 1 ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-600 group-hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Frame Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl opacity-60">🎉</div>
                      </div>
                      
                      {/* Frame Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                          <p className="text-white font-semibold text-sm">Graduation</p>
                          <p className="text-gray-300 text-xs">Degree Complete</p>
                        </div>
                      </div>
                      
                      {/* Film Perforations */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                      <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-3 ${
                        activeTimelineItem === 1 ? 'bg-primary scale-125' : 'bg-primary'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      2
                    </motion.div>
                    
                    {/* Episode Info */}
                    <div className="text-center mt-2">
                      <p className="text-sm text-gray-600 font-medium mb-1">Dec 2025</p>
                      <h4 className="text-sm font-semibold text-gray-800">Graduation</h4>
                      <p className="text-xs text-gray-500 mt-1">B.S. Computer Science Degree Awarded</p>
                    </div>
                  </motion.div>

                  {/* Shooting Next Block */}
                  <motion.div
                    className="flex flex-col items-center min-w-[200px] group cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveTimelineItem(2)}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Film Frame */}
                    <motion.div 
                      className={`relative w-48 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 overflow-hidden ${
                        activeTimelineItem === 2 ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-600 group-hover:border-primary/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Frame Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl opacity-60">🎬</div>
                      </div>
                      
                      {/* Frame Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                          <p className="text-white font-semibold text-sm">Shooting Next</p>
                          <p className="text-gray-300 text-xs">New Opportunities</p>
                        </div>
                      </div>
                      
                      {/* Film Perforations */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                      <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-between">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-3 ${
                        activeTimelineItem === 2 ? 'bg-primary scale-125' : 'bg-primary'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      3
                    </motion.div>
                    
                    {/* Episode Info */}
                    <div className="text-center mt-2">
                      <p className="text-sm text-gray-600 font-medium mb-1">2026</p>
                      <h4 className="text-sm font-semibold text-gray-800">Shooting Next</h4>
                      <p className="text-xs text-gray-500 mt-1">Open to New Opportunities</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Interests with Enhanced Completed Chip */}
            <motion.div 
              className="mt-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-primary mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Engineering",
                  "Data Science Applications",
                  "Generative AI",
                  "Sustainable Software",
                  "Ethical Data Privacy"
                ].map((interest, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium border bg-primary/10 text-primary border-primary/20"
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
