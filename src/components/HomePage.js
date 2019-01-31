import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const HomePage = () => {
  return (
    <div className="homepage">
      <img src={logo} className="homepage__logo" alt="logo" />
      <Link
        to="/profile"
        className="homepage__link"
      >
        Go to my profile
      </Link>
    </div>
  );
}

export default HomePage;