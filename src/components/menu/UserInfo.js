import React from 'react';

const UserInfo = props => {
  return (
    <div className="profile">
      <div className="profile-pic">
        <img 
          src={props.user.picture}
          className="profile-pic_picture"
          alt="ProfilePic"
        />
      </div>
      <div className="profile-name">Hello {props.user.name}</div>
    </div>
  )
};

export default UserInfo;
