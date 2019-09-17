import React from 'react';

import OnlineUsers from './containers/OnlineUsers';
import WeatherCond from './containers/WeatherCond';

function App() {
  return (
    <div className="App">
      <OnlineUsers />
      <WeatherCond />
    </div>
  );
}

export default App;