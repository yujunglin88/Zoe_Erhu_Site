import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='bs-slate-800 shadow-lg flex items-center justify-around py-3 px-32 top-0 left -0 w-full'>
      <Link to="/Home" className='text-white hover:text-gray-300'>
        Home
      </Link>
      <Link to="/Class" className='text-white hover:text-gray-300'>
        Classes
      </Link>
      <Link to="/About" className='text-white hover:text-gray-300'>
        About
      </Link>
    </nav>
  );
};

export default Navbar;