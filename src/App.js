import React, { useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './App.css';
import Header from './Header';
import About from './About';
import Navigation from './Navigation';
import Projects from './Projects';
import Skills from './Skills';
import Subskills from './Subskills';
import Contact from './Contact';
import Tools from './Tools';
import Footer from './Footer'; // Import Footer component
// import ThreeScene from './ThreeScene';
// import './ThreeScene.css';

import profileImage from './profile.png'; // Import your image file

const ProfileImage = () => {
  return (
    <div className="profile-image">
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

const App = () => {
  
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    
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

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  



  return (
    
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

        

        <div>
        <nav className={`navbar ${isMobileMenuOpen ? 'mobile' : ''}`}>
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <Header />
      <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={800}>
          About
        </ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={800}>
          Skills
        </ScrollLink>
        <ScrollLink to="subskills" spy={true} smooth={true} offset={-70} duration={800}>
          Subskills
        </ScrollLink>
        <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={800}>
          Projects
        </ScrollLink>
        <ScrollLink to="tools" spy={true} smooth={true} offset={-70} duration={800}>
          Tools
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={800}>
          Contact
        </ScrollLink>
        
      </div>
    </nav>
  
  
           <ProfileImage /> 
           <About />
           <Skills />
           <Subskills />
           <Projects />
           <Tools />
           <Contact />

          {/* <ThreeScene /> */}

          <ScrollToTopButton />

          
      
          <Footer /> {/* Include Footer component */}

        </div>

    </div>
    
  );
};


export default App;
