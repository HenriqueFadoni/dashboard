import React from 'react';

const OnlineUsers = () => {
  const randomNum = Math.round(Math.random() * 100);
  
  return (
    <div>
      <h3>
        ONLINE USERS: 
        <span>
          {randomNum}
        </span>
      </h3>
    </div>
  );
}

export default OnlineUsers;
