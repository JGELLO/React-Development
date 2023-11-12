import React from 'react';
import { FaCode, FaCss3, FaFedora, FaHtml5, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { SiManjaro, SiMysql, SiPostman } from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>

          <h3>Programming/Markup Languages</h3>
          <br></br>
          <li>• PHP <FaPhp size="30"/></li>
          <li>• Html <FaHtml5 size ="30" /></li>
          <li>• Css <FaCss3 size ="30" /></li>
          <li>• Javascript <DiJavascript1 size = "30" /></li>
          <li>• C++ <FaCode size ="30" /></li>
          <br></br> 
          <h3>Framework/s</h3>
          <li>• Laravel <FaLaravel size ="30" /></li>
          <br></br>
          <h3>Library/s</h3>
          <li>• Reactjs <FaReact size ="30" /></li>
          <br></br>
          <h3>Virtual Machines Distros</h3>
          <li>• Manjaro <SiManjaro size ="30" /></li>
          <li>• Arch Linux <GrArchlinux size ="30" /></li>
          <li>• Fedora Linux <FaFedora size ="30" /></li>
          <br></br>
          <h3>Database Management | API Handling</h3>
          <li>• Mysql <SiMysql size ="30" /></li>
          <li>• Postman <SiPostman size ="30" /></li>
      </ul>
    </section>
  );
};

export default Skills;
