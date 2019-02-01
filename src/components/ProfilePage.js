import React, { Component } from 'react';
import { Consumer } from '../context';
import Modal from './Modal';
import EditUserForm from './EditUserForm';
import DummyPost from './DummyPost';
import userImg from '../images/userimg.png';

class ProfilePage extends Component {
  
  state = { 
    showModal: false,
    successMsg: ''
  }

  renderDummyPosts = () => {
    const dummyPosts = [];
    let numOfPosts = Math.floor(Math.random() * 5) + 4;
    while (numOfPosts > 0) {
      dummyPosts.push(<DummyPost key={numOfPosts} username={this.props.user.username} />);
      numOfPosts--;
    }
    return dummyPosts;
  }

  handleEditSuccess = () => {
    this.setState({
      showModal: false,
      successMsg: 'Your data has been updated successfully'
    }, () => {
      setTimeout(() => this.setState({ successMsg: '' }), 3000);
    });
  }

  render() {
    const { username, email } = this.props.user;

    return (
      <>
        <div className="profile full-width">
          <div className="profile__user-container container">
            <div className="profile__picture">
              <img src={userImg} alt="user"/>
            </div>
            <div className="profile__user-info">
              <span><strong>Username:</strong> {username}</span>
              <span><strong>Email Address:</strong> {email}</span>
              <button
                className="button button--primary" 
                onClick={() => this.setState({ showModal: true })}
              >
                Edit User
              </button>
            </div>
          </div>
        </div>

        { this.state.successMsg && <strong className="msg-success">{this.state.successMsg}</strong> }

        <div className="profile__posts container">
          {this.renderDummyPosts()}
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
                  onEditSuccess={this.handleEditSuccess}  
                />
              )
            }
          </Modal>
        )} 
      </>
    );
  }
}

const ProfilePageWithContext = props => (
  <Consumer>
    {({ loggedInUser }) => <ProfilePage user={loggedInUser} {...props}/>}
  </Consumer>
);

export default ProfilePageWithContext;