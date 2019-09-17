import React from 'react';

import OnlineUsers from './components/OnlineUsers';
import WeatherCond from './containers/WeatherCond';

function App() {
  const randomNum = Math.round(Math.random() * 100);

  return (
    <div className="App">
      <OnlineUsers randomNum={randomNum}/>
      <WeatherCond />
    </div>
  );
}

export default App;