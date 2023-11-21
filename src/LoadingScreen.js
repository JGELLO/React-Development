import React, { useState, useEffect } from 'react';
import Carousel from './Carousel'; // Replace this import with the actual path to your Carousel component
import './LoadingScreen.css'; // Create a CSS file for styling

const LoadingScreen = () => {
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    // Display the hello message after a delay
    const timeout = setTimeout(() => {
      setShowHello(true);
    }, 9000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading-screen">
      <Carousel />
      {showHello && (
        <div className="hello-message">
          <h1>Hello!</h1>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
