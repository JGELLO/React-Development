import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="subskills" smooth={true} duration={500}>Subskills</Link></li>
        <li><Link to="tools" smooth={true} duration={500}>Tools</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
