import { useState, useContext } from 'react';
import { ErrorContext, weatherService } from '../index';

export const useWeatherData = () => {
  const { setError } = useContext(ErrorContext);

  const [weatherData, setWeatherData] = useState();

  const fetchWeather = async location => {
    try {
      if (location.longitude || location.locationName) {
        const weather = await weatherService(location);
        setWeatherData(weather);
      }
    } catch (error) {
      setError(error.toString());
    }
  };

  return { weatherData, fetchWeather };
};
