import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__link-group">
          <Link to="/" className="navbar__link">
            React Task Five
          </Link>
        </div>

        <div className="navbar__link-group navbar__link-group--right">
          <Link to="/login" className="navbar__link">Login</Link>
          <Link to="/register" className="navbar__link">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;