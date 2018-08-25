import React from "react";
import message from "../message";
import "./nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
