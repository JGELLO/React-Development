import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

import './Navigation.css';

const Navigation = ({ isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu }) => {
  const [isMobile, setIsMobile] = useState(false);
// eslint-disable-next-line
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// eslint-disable-next-line
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobile(false);
    }
  };
// eslint-disable-next-line
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
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
    </div>
  );
};

export default Navigation;
