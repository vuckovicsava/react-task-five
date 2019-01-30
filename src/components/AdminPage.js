import React, { Component } from 'react';
import { getUsers } from '../helpers/storage';
import UserItem from './UserItem';
import Modal from './Modal';

export default class AdminPage extends Component {

  state = {
    registeredUsers: [],
    showModal: true // false later
  }

  componentDidMount() {
    this.setState({ 
      registeredUsers: getUsers()
    });
  }

  renderRegisteredUsers = () => {
    return this.state.registeredUsers.map(user => (
      <UserItem key={user.email} user={user} />
    ));
  }

  render() {
    const { registeredUsers: users, showModal } = this.state;
    if (!users || users.length === 0) {
      return (<h1>No registered users</h1>);
    } else {
      return (
        <div>
          {this.renderRegisteredUsers()}
          { showModal && (
            <Modal title="Delete User">
              <h1>Are You Sure?</h1>
            </Modal>
          )}
        </div>
      );
    }
  }
}