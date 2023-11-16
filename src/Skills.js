import React from 'react';
import { FaCode, FaCss3, FaFedora, FaHtml5, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { SiManjaro, SiMysql, SiPostman, SiSqlite } from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>

          <h3>Programming/Markup Languages</h3>
          <br></br>
          <li>
            <FaPhp size="30"/>
            <FaHtml5 size ="30" />
            <FaCss3 size ="30" />
            <DiJavascript1 size = "30" />
            <FaCode size ="30" />
          </li>
          <br></br> 
          <h3>Framework/s</h3>
          <li><FaLaravel size ="30" /></li>
          <br></br>
          <h3>Library/s</h3>
          <li><FaReact size ="30" /></li>
          <br></br>
          <h3>Virtual Machines Distros</h3>
          <li>
            <SiManjaro size ="30" />
            <GrArchlinux size ="30" />
            <FaFedora size ="30" />
          </li>
          <br></br>
          <h3>Database Management | API Handling</h3>
          <li>
            <SiMysql size ="30" />
            <SiPostman size ="30" />
            <SiSqlite size ="30" />
          </li>
      </ul>
    </section>
  );
};

export default Skills;
