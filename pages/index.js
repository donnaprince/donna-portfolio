import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import CareerReel from '../components/CareerReel';
import Research from '../components/Research';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';

export default function Home({ aboutData, internshipsData, researchData }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'career-reel', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Show back to top button after scrolling down
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Donna Prince - Portfolio</title>
        <meta name="description" content="Donna Prince's Software Engineering and Product Thinking Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Skip to Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      <Navigation activeSection={activeSection} />

      <main id="main-content" className="relative z-10">
        <Hero />
        <About data={aboutData} />
        <CareerReel data={internshipsData} />
        <Research data={researchData} />
        <Contact />
      </main>

      <AnimatePresence>
        {showBackToTop && (
          <BackToTop onClick={scrollToTop} />
        )}
      </AnimatePresence>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Donna Prince. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Import JSON data at build time
    const aboutData = require('../data/about.json');
    const internshipsData = require('../data/internships.json');
    const researchData = require('../data/research.json');

    return {
      props: {
        aboutData,
        internshipsData,
        researchData
      },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      props: {
        aboutData: {},
        internshipsData: {},
        researchData: {}
      }
    };
  }
}
