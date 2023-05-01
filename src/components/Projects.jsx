import React, { useState, useEffect } from 'react';

import projectData from './projects.json';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <>
      <h2 className='project-head'>Projects</h2>
    <div className="project-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a href={project.url} className="project-link" target='_blank'>View Project</a>
        </div>
      ))}
    </div>
    </>
  );
}

export default Projects;
