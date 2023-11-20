import React from 'react';
import Carousel from './Carousel'; // Replace this import with the actual path to your Carousel component
import './LoadingScreen.css'; // Create a CSS file for styling

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Carousel />
    </div>
  );
};

export default LoadingScreen;
