// Carousel.js

import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import the associated CSS file
import { FaCode, FaCss3, FaFedora, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const items = [
    { icon: <FaCode size={60} />, label: 'code' },
    { icon: <FaCss3 size={60} />, label: 'css' },
    { icon: <DiJavascript1 size={60} />, label: 'javascript' },
    { icon: <FaFedora size={60} />, label: 'fedora' },
    { icon: <FaReact size={60} />, label: 'react' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        {items[currentItem].icon}
      </div>
    </div>
  );
};



export default Carousel;
