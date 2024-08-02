import { useState } from 'react';
import assembleAllWeather from '../functions/weatherService';

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchWeather = async location => {
    if (location.longitude || location.locationName) {
      const weather = await assembleAllWeather(location);
      setWeatherData(weather);
    }
  };

  return { weatherData, fetchWeather };
};
