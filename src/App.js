import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './LoadingScreen'; // Replace this import with the actual path to your LoadingScreen component
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Subskills from './Subskills';
import Contact from './Contact';
import Tools from './Tools';
import SEOP from './SEOP';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // Define isDarkMode state

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const toggleDarkMode = () => {
    // Toggle dark mode state
    setIsDarkMode(!isDarkMode);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
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
          <SEOP />
          <Skills />
          <Subskills />
          <Tools />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTopButton />
          
        </div>
      )}
    </div>
  );
};

export default App;