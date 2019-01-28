import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
