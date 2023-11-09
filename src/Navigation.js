// Navigation.js
import React, { useState } from 'react';
import './Navigation.css'; // Import CSS for Navigation styles

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
    setIsOpen(false); // Close the navigation menu after clicking a link
  };

  return (
    <div className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        {/* Navigation links go here */}
        <button onClick={() => handleSmoothScroll('home')}>Home</button>
        <button onClick={() => handleSmoothScroll('about')}>About</button>
        <button onClick={() => handleSmoothScroll('portfolio')}>Portfolio</button>
        <button onClick={() => handleSmoothScroll('contact')}>Contact</button>
      </div>
    </div>
  );
};

export default Navigation;
