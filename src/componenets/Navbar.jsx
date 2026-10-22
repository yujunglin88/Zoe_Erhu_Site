import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import icon from '../assests/icons/icon.png';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/class', label: 'Classes / Grade Exams' },
  { to: '/about', label: 'About Zoe' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const linkClass = ({ isActive }) =>
    `navbar-link${isActive ? ' navbar-link--active' : ''}`;

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar-title">
          <img src={icon} alt="" className="navbar-logo-image" />
          <span className="navbar-logo-text">
            Zoe Li
            <small>ERHU STUDIO</small>
          </span>
        </Link>

        <button
          type="button"
          className={`navbar-toggle${open ? ' navbar-toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="navbar-menu"
          className={`navbar-menu${open ? ' navbar-menu--open' : ''}`}
        >
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}

          <NavLink to="/contact" className="navbar-cta">
            Contact
            <span>→</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;