import React, { useEffect, useState } from 'react';
import { getWeather } from '../Sevice/weatherser';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Daily Weather Update</h2>
      {weather ? (
        <div>
          <p>Location: {weather.location}</p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;




//----------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './weather.css';

// const Weather = () => {
//     const [weather, setWeather] = useState(null);

//     // Fetch weather updates on component mount
//     useEffect(() => {
//         axios.get('http://localhost:3000/weather')
//             .then(response => setWeather(response.data))
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <div className="weather-container">
//             <h2>Daily Weather Updates</h2>
//             {weather ? (
//                 <div className="weather-details">
//                     <p>Temperature: {weather.temp}°C</p>
//                     <p>Condition: {weather.condition}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Weather;

