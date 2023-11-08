import React, { useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import './App.css';
import Header from './Header';
import About from './About';
import { Element } from 'react-scroll';
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



  return (
    
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

        <Header />

        <div>
          
          <Navigation />
          <ProfileImage /> {/* Add the image component */}
          <br></br>
          <br></br>
          <br></br>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="subskills">
            <Subskills />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="tools">
            <Tools />
          </Element>
          {/* Add more sections as needed */}

          <Contact />

          {/* <ThreeScene /> */}

          <ScrollToTopButton />

          
      
        <Footer /> {/* Include Footer component */}

        </div>

    </div>
    
  );
};


export default App;
