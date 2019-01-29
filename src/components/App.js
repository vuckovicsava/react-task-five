import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';
import AdminPage from './AdminPage'
import { createAdminObject, createUsers } from '../helpers/storage';

class App extends Component {
  componentDidMount() {
    createAdminObject();
    createUsers();
  }

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
            <Route path='/admin' component={AdminPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
