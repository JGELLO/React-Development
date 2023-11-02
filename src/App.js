import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
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
      <ProfileImage /> {/* Add the image component */}
      <About />
      <Projects />
      <Skills />
      <Subskills />
      <Contact />
      <Tools />
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default App;
