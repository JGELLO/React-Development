import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import the associated CSS file
import { FaCode, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { MdOutlineCss } from 'react-icons/md';

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const items = [
    { icon: <FaCode size={30} />, label: 'code' },
    { icon: <DiJavascript1 size={30} />, label: 'javascript' },
    { icon: <MdOutlineCss size={30} />, label: 'react' },
    { icon: <FaReact size={30} />, label: 'react' },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
    }, 1000);

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
