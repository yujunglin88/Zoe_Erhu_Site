import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/Class" className="navbar-link">
        Classes
      </Link>
      <Link to="/About" className="navbar-link">
        About
      </Link>
    </nav>
  );
};

export default Navbar;