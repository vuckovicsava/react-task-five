import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../context';

const Navbar = () => (
  <Consumer>
    {({ isLoggedIn, logout }) => (
      <nav className="navbar">
        <div className="container">
          <div className="navbar__link-group">
            <Link to="/" className="navbar__link">
              React Task Five
            </Link>
          </div>

          <div className="navbar__link-group navbar__link-group--right">
            {
              isLoggedIn ? (
                <span 
                  className="navbar__link"
                  onClick={logout}
                >Logout</span>
              ) : (
                <>
                  <Link to="/login" className="navbar__link">Login</Link>
                  <Link to="/register" className="navbar__link">Register</Link>
                </>
              )
            }
          </div>
        </div>
      </nav>
    )}
  </Consumer>
);

export default Navbar;