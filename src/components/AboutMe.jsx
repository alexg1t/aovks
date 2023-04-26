import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs,faPython,faGitAlt,faHtml5,faCss3,faAws } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <h1>Aboutme</h1>;
      <h2>SOBRE</h2>
      <div className='tech-stack'>
        <h3>
          Programming
        </h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faSquareJs}/>
            <h4>JavaScript</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faPython}/>
            <h4>Python</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5}/>
            <h4>HTML</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3}/>
            <h4>CSS</h4>
          </li>
        </ul>
      </div>
      <div className='tech-stack'>
        <h3>
          Tools
        </h3>
        <ul>
            <li>
              <FontAwesomeIcon icon={faGitAlt}/>
              <h4>GIT</h4>
            </li>
            <li>
              <FontAwesomeIcon icon={faAws}/>
              <h4>AWS</h4>
            </li>
        </ul>

      </div>

    </div>
  )
};

export default AboutMe;

// AboutMe.js and Home.js are similar, just replace the h1 text
