import React from "react";
import "./NavBar.css";
// import ScoringInfo from "./components/ScoringInfo";


const NavBar = props => (

  <div className="nav">
    
      <p className="navTitle"> Clicky Game</p>
      
     <p className="message"> {props.message}</p>
     <p className="scores">Current Score: {props.currentScore} || Top Score: {props.topScore}</p>
    

  </div>
);

export default NavBar;
