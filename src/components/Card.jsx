import React from "react";

class Card extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user-card">
        <img src={user.userInfo.avatar} alt={user.userInfo.username} />
        <div className="user-info">
          <h2>{user.userInfo.username}</h2>
          <p>Email: {user.userInfo.email}</p>
          <p>Age: {user.profileInfo.age}</p>
          <p>Gender: {user.profileInfo.gender}</p>
          <p>City: {user.profileInfo.city}</p>
        </div>
      </div>
    );
  }
}

export default Card;
