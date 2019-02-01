import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createAdminObject, createUsers } from '../helpers/storage';
import { Provider } from '../context';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';
import AdminPage from './AdminPage';

class App extends Component {
  componentDidMount() {
    // when the app is initialized, set default localStorage values
    createAdminObject();
    createUsers();
  }

  render() {
    return (
      <Provider>
        <BrowserRouter>
          <>
            <Navbar/>
            <div className="container">
              <Switch>
                <ProtectedRoute exact path="/" component={HomePage}/>
                <ProtectedRoute path="/profile" component={ProfilePage}/>
                <ProtectedRoute path="/admin" component={AdminPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
