import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    isLoggedIn: false,
    isAdmin: false,
    loggedInUser: {}
  }

  login = isAdmin => {
    isAdmin 
      ? this.setState({ isLoggedIn: true, isAdmin: true })
      : this.setState({ isLoggedIn: true });
  }

  logout = () => {
    this.setState({
      idLoggedIn: false,
      isAdmin: false,
      loggedInUser: {}
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