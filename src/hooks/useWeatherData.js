import { useState } from 'react';
import { weatherService } from '../index';

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchWeather = async location => {
    if (location.longitude || location.locationName) {
      const weather = await weatherService(location);
      setWeatherData(weather);
    }
  };

  return { weatherData, fetchWeather };
};
