import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCond = () => {
  const [outWeather, setOutWeather] = useState('');
  const [outTemp, setOutTemp] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=980807a99ae3cd8b1117e23106226eb7`;
        const { data } = await axios.get(url);
        const tempCelcius = Math.round(data.main.temp - 273.15);

        setOutWeather(data.weather[0].main);
        setOutTemp(`${tempCelcius}˚C`);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {outWeather}
      </div>
      <div >
        {outTemp}
      </div>
    </div>
  );
}

export default WeatherCond;
