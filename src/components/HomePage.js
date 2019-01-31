import React from 'react';
import logo from '../images/logo.svg';

const HomePage = () => (
  <div className="homepage">
    <img src={logo} className="homepage__logo" alt="logo"/>
    <h1 className="homepage__title">
      This content can be seen only by authenticated users
    </h1>
  </div>
);

export default HomePage;