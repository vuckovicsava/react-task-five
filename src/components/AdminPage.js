import React, { Component } from 'react';
import { getUsers, deleteUser } from '../helpers/storage';
import UserItem from './UserItem';
import Modal from './Modal';

export default class AdminPage extends Component {

  state = {
    registeredUsers: [],
    showModal: false,
    idToDelete: ''
  }

  componentDidMount() {
    this.setState({ 
      registeredUsers: getUsers()
    });
  }

  handleDeleteUserClick = id => {
    this.setState({
      showModal: true,
      idToDelete: id
    });
  }

  removeUser = () => {
    // remove from localStorage
    deleteUser(this.state.id);
    // remove from the state
    this.setState(state => {
      const updatedUsers = state.registeredUsers.filter(u => u.id !== state.id);
      
      return {
        registeredUsers: updatedUsers,
        showModal: false,
        idToDelete: ''
      };
    })
  }

  closeModal = () => this.setState({ showModal: false });

  renderRegisteredUsers = () => {
    return this.state.registeredUsers.map(user => (
      <UserItem 
        key={user.id} 
        user={user}
        onDeleteClick={() => this.handleDeleteUserClick(user.id)}
      />
    ));
  }

  render() {
    const { registeredUsers: users, showModal } = this.state;
    if (!users || users.length === 0) {
      return <h1 className="message-large">No registered users</h1>;
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