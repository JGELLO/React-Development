import React from 'react';
import { FaCode, FaCss3, FaHtml5, FaLaravel, FaPhp, FaReact, FaUbuntu } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { SiManjaro, SiMysql, SiPostman, SiSqlite } from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";
import { GiFedora } from 'react-icons/gi';
import { MdOutlineCss } from 'react-icons/md';
import { DiMongodb } from "react-icons/di";



const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>

          <h3>Programming/Markup Languages</h3>
          <li>
            <FaPhp size="30"/>
            <FaHtml5 size ="30" />
            <FaCss3 size ="30" />
            <DiJavascript1 size = "30" />
            <FaCode size = "30" />
            <MdOutlineCss size = "30" />
          </li>
          <br></br> 
          <h3>Framework/Library/s</h3>
          <li>
            <FaLaravel size ="30" />
            <FaReact size ="30" />
          </li>
          <br></br>
          <h3>Virtual Machines Distros</h3>
          <li>
            <SiManjaro size ="30" />
            <GrArchlinux size ="30" />
            <FaUbuntu size = "30" />
            <GiFedora size = "30" />
          </li>
          <br></br>
          <h3>Database Management | API Handling</h3>
          <li>
            <SiMysql size ="30" />
            <DiMongodb size = "30" />
            <SiPostman size ="30" />
            <SiSqlite size ="30" />
          </li>
      </ul>
    </section>
  );
};

export default Skills;
