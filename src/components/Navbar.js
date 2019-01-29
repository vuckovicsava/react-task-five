import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      Navbar
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <hr/>
    </nav>
  );
}

export default Navbar;