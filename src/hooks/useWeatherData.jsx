import { useState, useContext } from 'react';
import { ErrorContext } from '../store';
import { weatherService } from '../functions';

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
