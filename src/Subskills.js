import React from 'react';

const Subskills = () => {
  return (
    <section className="subskills">
      <h2>Subskills</h2>
      <ul>
        <li><a href="https://www.example.com/html" target="_blank" rel="noopener noreferrer">HTML</a></li>
        <li><a href="https://www.example.com/css" target="_blank" rel="noopener noreferrer">CSS</a></li>
        <li><a href="https://www.example.com/javascript" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
        <li><a href="https://www.example.com/react" target="_blank" rel="noopener noreferrer">React</a></li>
        {/* Add more skills with hyperlinks as needed */}
      </ul>
    </section>
  );
};

export default Subskills;
