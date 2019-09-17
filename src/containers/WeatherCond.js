import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCond = () => {
  const [outTemp, setOutTemp] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=980807a99ae3cd8b1117e23106226eb7`;
        const { data } = await axios.get(url);
        const tempCelcius = Math.round(data.main.temp - 273.15);
        setOutTemp(`${tempCelcius}˚C`);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app__weather--container">
      <div className="app__weather--degrees">
        Outside Temp: {outTemp}
      </div>
    </div>
  );
}

export default WeatherCond;
