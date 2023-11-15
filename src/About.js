import React from 'react';
import profileImage from './profile1.jpg'; // Import your image file

const About = () => {
  return (
    <section className="about">
      <div className="profile-image">
      <img src={profileImage} alt="Profile" />
      </div>
      <h2>My Portfolio</h2>
      <p>
      Hello, I’m Angelo Cabaluna, and my life is a vibrant tapestry of passions and pursuits. By day, I’m a dedicated programmer, crafting elegant solutions to complex problems through code. But when the workday is done, I dive headfirst into a world of diverse life activities and hobbies. Whether it’s hiking in the great outdoors, mastering the art of photography, or playing a mean guitar riff, I’m always seeking new ways to enrich my life.
      </p>
      <p>
      Projects are my playground, where I transform ideas into reality. From software innovations to DIY home improvement ventures, I relish the challenge of creating something meaningful. And speaking of relishing, coffee is my constant companion. I’m on a quest for the perfect brew, exploring exotic beans and brewing methods to elevate my coffee endeavors to new heights.
      </p>
      <p>
      Yet, my ambitions reach beyond these realms. I’m a forward-thinking entrepreneur in the making, constantly refining my business plans and seeking opportunities to bring my ideas to life. So, join me on this exciting journey through code, adventure, creativity, caffeine, and the pursuit of entrepreneurial dreams. 
      </p>
      {/* Add more paragraphs as needed */}
    </section>
  );
};

export default About;
