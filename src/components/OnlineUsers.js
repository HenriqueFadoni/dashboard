import React from 'react';

const OnlineUsers = () => (
  <div className="app__header--container">
    <h3 className="app__header--text">
      ONLINE USERS:
        <span>
          {Math.round(Math.random() * 100)}
        </span>
    </h3>
  </div>
);

export default OnlineUsers;
