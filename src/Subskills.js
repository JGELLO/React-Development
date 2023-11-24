import React from 'react';
import { } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobephotoshop, SiCanva } from "react-icons/si";


const Subskills = () => {
  return (
    <section className="subskills">
      <h2>Subskills</h2>
      <ul>

        <h3>Photo/Video Editing Skills:</h3>
          <li>

            <SiAdobephotoshop size = "30" />
            <SiCanva size = "30" />
            <SiAdobeaftereffects size = "30" />


          </li>

        <br></br>

        <h3>Misc. Skills</h3>
        <li>Typing Proficiency</li> 
       
            
      </ul>
    </section>
  );
};

export default Subskills;
