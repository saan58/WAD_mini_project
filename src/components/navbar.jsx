import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (

    <nav className="sidebar">
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/Discuss">Discuss</Link></li>
            <li>
              <span className="parent-link">Resources</span>
              <ul className="sub-menu">
                <li><Link to="/Resources">FE</Link></li>
                <li><Link to="/Resources">SE</Link></li>
                <li><Link to="/Resources">TE</Link></li>
                <li><Link to="/Resources">BE</Link></li>
              </ul>
            </li>
            <li>
              <span className="parent-link">Profile</span>
              <ul className="sub-menu">
                <li><a href="#">Personal Login</a></li>
              </ul>
            </li>
          </ul>
        </nav>
    
  );
};

export default Navbar;