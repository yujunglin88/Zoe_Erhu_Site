import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assests/icons/icon.png';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        <img src={icon} alt="Logo" className="navbar-logo-image" />
        <span className="navbar-logo-text">Zoe Li Erhu Studio</span>
      </Link>

      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/Class" className="navbar-link">
        Classes
      </Link>
      <Link to="/About" className="navbar-link">
        About
      </Link>
      <Link to="/Contact" className="navbar-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;