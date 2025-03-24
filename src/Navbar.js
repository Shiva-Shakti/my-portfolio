import React from "react";
import "./Navbar.css"; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
