import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'dark-mode container' : 'container'}>
    <Router>
      
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
        <Route exact path="/"  element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
     
    </Router>
    </div>
  );
};

export default App;
