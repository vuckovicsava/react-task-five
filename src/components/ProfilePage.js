import React, { Component } from 'react';
import { Consumer } from '../context';
import Modal from './Modal';
import EditUserForm from './EditUserForm';

class ProfilePage extends Component {
  
  state = {
    showModal: false
  }

  render() {
    const { username, email, password } = this.props.user;

    return (
      <div className="profile">
        <img src="placeholdi" alt="user"/>
        <div className="user__info">
          <h1>{username}</h1>
          <h1>{email}</h1>
          <h1>{password}</h1>
          <hr/>
          <button onClick={() => this.setState({ showModal: true })}>
            EDIT USER
          </button>
        </div>

        { this.state.showModal && (
          <Modal 
            title="Edit User" 
            onClose={() => this.setState({ showModal: false })}
          >
            <EditUserForm 
              user={this.props.user}
              onEditSuccess={() => this.setState({ showModal: false })}  
            />
          </Modal>
        )} 
      </div>
    );
  }
}

const ProfilePageWithContext = props => (
  <Consumer>
    {({ loggedInUser }) => <ProfilePage user={loggedInUser} {...props}/>}
  </Consumer>
);

export default ProfilePageWithContext;