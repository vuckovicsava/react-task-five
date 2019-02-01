import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    isLoggedIn: false,
    isAdmin: false,
    // loggedInUser: null
    // testing
    loggedInUser: {
      username: 'testuser',
      email: 'email@email.com',
      password: 'somepw',
      id: 12312321
    }
  }

  login = (userObj, isAdmin, cb) => {
    if (isAdmin) {
      this.setState({
        isLoggedIn: true,
        isAdmin: true,
        loggedInUser: userObj
      }, cb);
    } else {
      this.setState({
        isLoggedIn: true,
        loggedInUser: userObj
      }, cb);
    }
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
      isAdmin: false,
      loggedInUser: null
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      login: this.login,
      logout: this.logout
    };

    return (
      <Context.Provider value={contextValue}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;