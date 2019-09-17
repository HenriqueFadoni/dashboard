import React from 'react';

import OnlineUsers from './components/OnlineUsers';
import WeatherCond from './containers/WeatherCond';
import WaterPlant from './containers/WaterPlant';

function App() {
  const randomNum = Math.round(Math.random() * 100);

  return (
    <div className="App">
      <OnlineUsers randomNum={randomNum}/>
      <WeatherCond />
      <WaterPlant />
    </div>
  );
}

export default App;