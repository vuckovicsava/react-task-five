import React from 'react';
import logo from '../images/logo.svg';

const HomePage = () => {
  return (
    <div className="homepage">
      <img src={logo} className="homepage__logo" alt="logo" />
    </div>
  );
}

export default HomePage;