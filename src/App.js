import React from 'react';

import OnlineUsers from './components/OnlineUsers';
import WeatherCond from './containers/WeatherCond';
import WaterPlant from './containers/WaterPlant';
import DrinkCounter from './containers/DrinkCounter';
import InOffice from './containers/InOffice';

import './sass/main.scss';

function App() {
  return (
    <div className="app__container">
      <OnlineUsers />
      <WeatherCond />
      <WaterPlant />
      <DrinkCounter />
      <InOffice />
    </div>
  );
}

export default App;