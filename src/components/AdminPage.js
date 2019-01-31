import React, { Component } from 'react';
import { getUsers, deleteUser } from '../helpers/storage';
import UserItem from './UserItem';
import Modal from './Modal';

export default class AdminPage extends Component {

  state = {
    registeredUsers: [],
    showModal: false,
    emailToDelete: ''
  }

  componentDidMount() {
    this.setState({ 
      registeredUsers: getUsers()
    });
  }

  handleDeleteUserClick = email => {
    this.setState({
      showModal: true,
      emailToDelete: email
    });
  }

  removeUser = () => {
    // remove from localStorage
    deleteUser(this.state.emailToDelete);
    // remove from the state
    this.setState(state => {
      const updatedUsers = state.registeredUsers.filter(u => u.email !== state.emailToDelete);
      
      return {
        registeredUsers: updatedUsers,
        showModal: false,
        emailToDelete: ''
      };
    })
  }

  closeModal = () => this.setState({ showModal: false });

  renderRegisteredUsers = () => {
    return this.state.registeredUsers.map(user => (
      <UserItem 
        key={user.email} 
        user={user}
        onDeleteClick={() => this.handleDeleteUserClick(user.email)}
      />
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
            <Modal title="Delete User" onClose={this.closeModal}>
              <strong className="warning">
                <i className="fas fa-exclamation-triangle"></i>
                  Please confirm this action
                <i className="fas fa-exclamation-triangle"></i>
              </strong>
              <button className="button button--danger" onClick={this.removeUser}>
                Delete
              </button>
              <button className="button button--primary" onClick={this.closeModal}>
                Cancel
              </button>
            </Modal>
          )}
        </div>
      );
    }
  }
}