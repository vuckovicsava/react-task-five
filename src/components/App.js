import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createAdminObject, createUsers } from '../helpers/storage';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';
import AdminPage from './AdminPage'

class App extends Component {
  componentDidMount() {
    // when the app is initialized, set default localStorage values
    createAdminObject();
    createUsers();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path='/admin' component={AdminPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
