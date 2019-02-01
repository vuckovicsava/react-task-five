import React from 'react';
import userImg from '../images/userimg.png';

const DummyPost = ({ username }) => (
  <div className="post">
    <div className="post__header">
      <img className="post__image" src={userImg} alt="user"/>
      <h3 className="post__username">{username}</h3>
    </div>
    <div className="post__body">
      <p className="post__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reprehenderit repellendus harum pariatur, sint quam quasi enim in vel quibusdam corrupti necessitatibus consequuntur explicabo consectetur itaque eligendi ea velit veritatis!
      </p>
    </div>
  </div>
);

export default DummyPost;