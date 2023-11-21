import React, { useEffect } from 'react';
import Typed from 'typed.js'
import profileImage from './profile1.jpg'; // Import your image file

const About = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ['Learn, Develop, Deploy.... OH! Have fun of Course!'],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed('#typed-text', options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <section className="about">
      <div className="profile-image">
      <img src={profileImage} alt="Profile" />
      </div>
      <h2>My Portfolio</h2>
      <li><p>Hi,👋I'm Angelo a dedicated developer passionate about crafting elegant and efficient solutions. Below, you'll find an overview of my skills and the tools I use to bring ideas to life.</p>
      </li>
      
      <br></br>

      <li>
        <div>
        <span id="typed-text"></span>
        </div>
      </li>

      <br></br>
      {/* Add more paragraphs as needed */}
    </section>
  );
};

export default About;


