import React, { useState } from 'react';
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
          <Element name="tools">
            <Tools />
          </Element>
          {/* Add more sections as needed */}
          <ScrollToTopButton />

          
      
        <Footer /> {/* Include Footer component */}

        </div>

    </div>
    
  );
};


export default App;
