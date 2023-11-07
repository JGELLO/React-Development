import React from 'react';

const Subskills = () => {
  return (
    <section className="subskills">
      <h2>Subskills</h2>
      <ul>

        <li>Typing Proficiency</li> 
        <img src={process.env.PUBLIC_URL + '/typee.gif'} alt="Example GIF" />
        <br></br>
        <br></br>
        <li>Photoshop</li>
        
      </ul>
    </section>
  );
};

export default Subskills;
