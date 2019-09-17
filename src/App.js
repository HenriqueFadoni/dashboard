import React from 'react';

import OnlineUsers from './components/OnlineUsers';
import WeatherCond from './containers/WeatherCond';
import WaterPlant from './containers/WaterPlant';
import DrinkCounter from './containers/DrinkCounter';

function App() {
  return (
    <div className="App">
      <OnlineUsers />
      <WeatherCond />
      <WaterPlant />
      <DrinkCounter />
    </div>
  );
}

export default App;