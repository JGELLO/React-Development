// Navigation.js
import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true); // State to control menu visibility

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible); // Toggle menu visibility
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobile(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isMobile ? (menuVisible ? 'active' : 'hidden') : ''}`}>
        {/* Navigation links go here */}
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
      {isMobile && (
        <div className="toggle-button" onClick={handleMenuVisibility}>
          {menuVisible ? 'Minimize' : 'Maximize'} Menu
        </div>
      )}
    </div>
  );
};

export default Navigation;
