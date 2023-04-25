import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



const Header = ({darkMode, toggleDarkMode}) => {


  return (
    <header>
      <nav>
        <div>
          <span className="name">Alexander Ortega Vidal</span>
          <button onClick={toggleDarkMode}>
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
