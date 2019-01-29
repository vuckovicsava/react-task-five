import React, { Component } from 'react';
import { getUsers } from '../helpers/storage';

export default class AdminPage extends Component {

  state = {
    registeredUsers: []
  }

  componentDidMount() {
    this.setState({ 
      registeredUsers: getUsers()
    });
  }

  renderRegisteredUsers = () => {
    return this.state.registeredUsers.map(user => {
      return (
        <div key={user.email}>
          <h3>{user.email}</h3>
        </div>
      )
    });
  }

  render() {
    const { registeredUsers: users } = this.state;
    if (!users || users.length === 0) {
      return (<h1>No registered users</h1>);
    } else {
      return (
        <div>{this.renderRegisteredUsers()}</div>
      );
    }
  }
}