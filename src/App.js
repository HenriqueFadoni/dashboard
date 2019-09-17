import React from 'react';

import OnlineUsers from './components/OnlineUsers';
import WeatherCond from './containers/WeatherCond';
import WaterPlant from './containers/WaterPlant';
import DrinkCounter from './containers/DrinkCounter';
import InOffice from './containers/InOffice';

function App() {
  return (
    <div className="App">
      <OnlineUsers />
      <WeatherCond />
      <WaterPlant />
      <DrinkCounter />
      <InOffice />
    </div>
  );
}

export default App;