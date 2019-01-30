import React from 'react';

const UserItem = ({ user, onDeleteClick }) => (
  <div className="user">
    <div className="user__info">
      <span>Username: {user.username}</span>
      <span>Email: {user.email}</span>
    </div>
    <div 
      className="user__remove"
      onClick={onDeleteClick}
    >
      <i className="fas fa-trash-alt"></i>
    </div>
  </div>
);

export default UserItem;