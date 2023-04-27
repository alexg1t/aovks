import React from 'react';
import gifData from './funnygif.json'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import { faRocket,faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faGithub,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  function getRandomGif() {
    const index = Math.floor(Math.random() * gifData.gifs.length);
    return gifData.gifs[index];
  }
  const [selectedGif, setSelectedGif] = useState(getRandomGif());
  function handleClick() {
    setSelectedGif(getRandomGif());
  }
  
  return (
  <div className='home'>
    <h1>Welcome!</h1>
    <div className='fgif'>
    <img src={selectedGif.link}/>
    <button  onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowsRotate}/>
    </button>
    </div>
    <br></br>
    <h2>Hello there, welcome to my portfolio <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon></h2>
    <h2>Still in progress <FontAwesomeIcon icon={faPersonDigging}></FontAwesomeIcon> <FontAwesomeIcon icon="fa-brands fa-twitter" /></h2>
    <br></br>
    
    <br></br>
    <h2>Feel free to contact me</h2>
    
    <div className='social'>
      <ul>
        <li>
          <a href="https://twitter.com/aovks_" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexg1t" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aov98/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a> 
        </li>
      
      
      </ul>
      
    </div>
    
    
    </div>
  )
};

export default Home;

// AboutMe.js and Home.js are similar, just replace the h1 text
