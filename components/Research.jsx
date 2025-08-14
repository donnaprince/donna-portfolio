import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Research = ({ data }) => {
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  if (!data || !data.researchProjects) {
    return (
      <section id="research" className="section-padding bg-gradient-to-br from-muted to-white">
        <div className="container-custom">
          <h2 className="section-heading">Research & Publications</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  const { researchProjects } = data;

  const openModal = (project) => {
    setSelectedResearch(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResearch(null);
  };

  return (
    <section id="research" className="section-padding bg-gradient-to-br from-muted to-white relative overflow-hidden">
      {/* Purple Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <AnimatedSection delay={0.2} direction="up">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 movie-title"
              style={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              RESEARCH & PUBLICATIONS
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Exploring the intersection of technology, innovation, and human experience through rigorous research and creative experimentation.
            </motion.p>
          </motion.div>
        </AnimatedSection>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === index ? 'z-20' : 'z-10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(project)}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Research Project Card */}
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-primary/50 transition-all duration-500"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
                  borderColor: "rgba(139, 92, 246, 0.8)",
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Poster-Style Cover Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '60px 60px'
                    }} />
                  </div>
                  
                  {/* Episode Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-60">{project.icon}</div>
                  </div>
                  
                  {/* Netflix-Style Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Episode Title */}
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      {/* Metadata Line */}
                      <motion.div 
                        className="flex items-center space-x-3 text-xs text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span>{project.year || '2025'}</span>
                        <span>•</span>
                        <span>{project.status || 'Research'}</span>
                        <span>•</span>
                        <span>{project.category || 'Sentiment Analysis & Online Behavior'}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Episode Number Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    {project.id}
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Preview */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.problem?.substring(0, 80)}...
                      </p>
                    </div>
                  </motion.div>

                  {/* Watch Now Button */}
                  <motion.div 
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>View Research</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        📊
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Spotlight Effect on Hover */}
              {hoveredCard === index && (
                <motion.div
                  className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Series Description */}
        <motion.div 
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">About the Series</h3>
            <p className="text-gray-700 leading-relaxed">
              This series showcases my research at the intersection of human-computer interaction, artificial intelligence, 
              and socio-technical systems. From analyzing real-time audience reactions to live-streamed vigilante content 
              to investigating the role of ephemeral messages in online scams, each project tackles timely challenges in 
              online safety, user behavior, and ethical technology design.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                🔬 Behavior-Centered
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full border border-primary/30">
                💡 AI-Enabled
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full border border-primary/30">
                🌐 Impact-Oriented
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Research Modal */}
      <AnimatePresence>
        {isModalOpen && selectedResearch && (
          <motion.div
            className="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center z-10 rounded-t-2xl">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{selectedResearch.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {selectedResearch.year} • {selectedResearch.category || 'Tech & Innovation'}
                  </p>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ×
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Problem Section */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                    <span className="mr-2">🎯</span>
                    The Problem
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedResearch.problem}
                  </p>
                </motion.div>

                {/* Method Section */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                    <span className="mr-2">🔬</span>
                    The Method
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedResearch.method}
                  </p>
                </motion.div>

                {/* Findings Section */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                    <span className="text-xl font-bold text-primary mb-3 flex items-center">
                      <span className="mr-2">💡</span>
                      The Findings
                    </span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedResearch.findings}
                  </p>
                </motion.div>

                {/* Abstract Section */}
                {selectedResearch.abstract && (
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                      <span className="mr-2">📖</span>
                      Full Abstract
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedResearch.abstract}
                    </p>
                  </motion.div>
                )}

                {/* External Link */}
                {selectedResearch.externalLink && (
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <a
                      href={selectedResearch.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      <span>Read Full Paper</span>
                      <span>↗️</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
