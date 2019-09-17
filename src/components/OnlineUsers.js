import React from 'react';

const OnlineUsers = props => (
  <div>
    <h3>
      ONLINE USERS:
        <span>
          {Math.round(Math.random() * 100)}
        </span>
    </h3>
  </div>
);

export default OnlineUsers;
