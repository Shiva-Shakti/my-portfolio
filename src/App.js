import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects"; // Import Projects
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>This is my portfolio website built using React!</p>
      </div>
      <Projects /> {/* Add Projects component */}
    </div>
  );
}

export default App;
