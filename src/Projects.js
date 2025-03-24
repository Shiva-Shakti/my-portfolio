import React from "react";
import "./Projects.css"; // Import CSS for styling

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-tile">
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
        <a href="https://github.com/Shiva-Shakti/AtM_simulator-">View Project</a>
      </div>

      <div className="project-tile">
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
        <a href="https://github.com/Shiva-Shakti">View All Projects</a>
      </div>
    </div>
  );
}

export default Projects;
