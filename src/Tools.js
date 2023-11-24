import React from 'react';
import { SiAdobephotoshop, SiAndroidstudio, SiSelenium, SiVisualstudio, SiWebflow } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { FaDocker, FaFigma, FaGit, FaGithub, FaJira, FaRaspberryPi } from "react-icons/fa";

const Tools = () => {
  return (
    <section className="tools">
      <h2>More Tools</h2>
      <ul>


          <li>
            <SiVisualstudio size ="30" />
            <SiAdobephotoshop size ="30" />
            <DiWordpress size = "30"/>
            <SiWebflow size = "30" />
            <FaFigma size = "30"/>
          </li>
          
          <li>
            <FaDocker size ="30" />
            <SiAndroidstudio size = "30" />
            <FaRaspberryPi size = "30" />
            <SiSelenium size = "30" />
            <FaGithub size = "30" />
          </li>

          <li>
            <FaGit size = "30" />
            <FaJira size = "30" />
          </li>

      </ul>
    </section>
  );
};

export default Tools;
