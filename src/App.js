import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Subskills from './Subskills';
import Contact from './Contact';
import Tools from './Tools';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const h2Element = document.querySelector('h2');
      const scrollY = window.scrollY;

      if (scrollY > 200) {
        h2Element.classList.add('shake');
      } else {
        h2Element.classList.remove('shake');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {/* Add dark mode icons here */}
      </button>
      <br></br>
      
      <Navigation
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <About />
      <Skills />
      <Subskills />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
