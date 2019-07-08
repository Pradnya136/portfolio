import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="div">
      <nav>
        <ul className="ul">
          <li className="li">Home</li>
          <li className="li">About</li>
          <li className="li">Projects</li>
          <li className="li">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
