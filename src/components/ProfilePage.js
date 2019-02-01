import React, { Component } from 'react';
import { Consumer } from '../context';
import Modal from './Modal';
import EditUserForm from './EditUserForm';
import userImg from '../images/userimg.png';

class ProfilePage extends Component {
  
  state = { showModal: false }

  render() {
    const { username, email } = this.props.user;

    return (
      <div className="profile full-width">
        <div className="profile__user-container container">
          <img className="profile__picture" src={userImg} alt="user"/>
          <div className="profile__user-info">
            <h1>{username}</h1>
            <h1>{email}</h1>
            <hr/>
            <button onClick={() => this.setState({ showModal: true })}>
              EDIT USER
            </button>
          </div>
        </div>
        

        { this.state.showModal && (
          <Modal 
            title="Edit User" 
            onClose={() => this.setState({ showModal: false })}
          >
            { 
              this.props.user.email === 'admin@admin.com' ? (
                <strong className="warning">
                  <i className="fas fa-exclamation-triangle"></i>
                    Admin user is not able to change his password
                  <i className="fas fa-exclamation-triangle"></i>
                </strong>
              ) : (
                <EditUserForm 
                  user={this.props.user}
                  onEditSuccess={() => this.setState({ showModal: false })}  
                />
              )
            }
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