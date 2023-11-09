import React, { useState, useEffect } from 'react';
// add css files here
import './App.css';

// scroll funcitonality 
import ScrollToTopButton from './ScrollToTopButton';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import Header from './Header';
import About from './About';
import Navigation from './Navigation'; // ignore warnings being used for mobile navbar
import Projects from './Projects';
import Skills from './Skills';
import Subskills from './Subskills';
import Contact from './Contact';
import Tools from './Tools';
import Footer from './Footer'; // Import Footer component
// import ThreeScene from './ThreeScene';
// import './ThreeScene.css';


// some indentions might be wonky
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
    
    // Darkmode toggle doesn't apply to navbar tho
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
    <br></br>
    
      {/* navbar */}
      <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <br></br>
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={800}>
              About
            </ScrollLink>
            <br></br>
            <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={800}>
              Skills
            </ScrollLink>
            <br></br>
            <ScrollLink to="subskills" spy={true} smooth={true} offset={-70} duration={800}>
              Subskills
            </ScrollLink>
            <br></br>
            <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={800}>
              Projects
            </ScrollLink>
            <br></br>
            <ScrollLink to="tools" spy={true} smooth={true} offset={-70} duration={800}>
              Tools
            </ScrollLink>
            <br></br>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={800}>
              Contact
            </ScrollLink>
            <br></br>
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
          
          <Footer /> {/* Include Footer component */}
          <ScrollToTopButton />

        </div>

    </div>
    
  );
};


export default App;
