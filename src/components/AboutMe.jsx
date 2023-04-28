import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSquareJs,faPython,faGitAlt,faHtml5,faCss3Alt,faAws,faReact } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <h1>About Me <FontAwesomeIcon icon={faRobot} /></h1>
      <h2>Software Developer</h2>
      <p>
      Hi, I'm Alexander and I have a bachelor degree in Electronic Engineering. 
      While I enjoyed working with hardware and circuits during my studies which led me to pursue a specialization in Industrial Automation, 
      I have recently discovered an interest for software development and am excited to pursue a career in this field.
 
      <br></br>
      <br></br>
      Over the past few months, I have been teaching myself some programming
      languages and frameworks but also taking external courses. I have started a more
      Front End related career but I am also interested in Back End even though I am not proficient
      enough on that, however I am enrolled on the Oracle Next Education program to follow a Back End
      related course.
      <br></br>
      I am also interested to learn more about Data Science and have already taken steps towards this goal by planning to enroll in a course within the next few months.
      On top of that I am learning about prompt engineering in this <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank"> brief course</a>, it is given by Deep Learning AI 
      in partnership with OpenAI and is quite interesting.
      
    
      </p>
      <div className='tech-stack'>
        <h3>
          Tech Stack
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
            <FontAwesomeIcon icon={faCss3Alt}/>
            <h4>CSS</h4>
          </li>
          <li>
            <FontAwesomeIcon icon={faReact}/>
            <h4>React</h4>
          </li>

          

        </ul>
      </div>
      <div className='tech-stack'>
        <ul>
            <li>
              <FontAwesomeIcon icon={faGitAlt}/>
              <h4>GIT</h4>
            </li>
            <li>
              <FontAwesomeIcon icon={faAws}/>
              <h4>AWS</h4>
            </li>
            <li>
            <FontAwesomeIcon icon={faDatabase}/>
            <h4>SQL</h4>
            </li>
        </ul>

      </div>

    </div>
  )
};

export default AboutMe;

// AboutMe.js and Home.js are similar, just replace the h1 text
