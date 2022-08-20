import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
  <div className="navbar">
    <NavLink to='/' exact style={{padding: '20px'}}>
      Home
    </NavLink>
    <NavLink to= '/movies' style={{padding: '20px'}}>
      Movies
    </NavLink>
    <NavLink to='/directors' style={{padding: '20px'}}>
      Directors
    </NavLink>
    <NavLink to ='/actors' style={{padding: '20px'}}>
      Actors
    </NavLink>
  </div>
  )
}

export default NavBar;
