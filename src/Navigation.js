import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Threejs.js">Threejs</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
