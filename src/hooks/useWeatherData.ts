import { useState, useContext } from 'react';
import { ErrorContext } from '../store';
import { weatherService } from '../functions';
import { WeatherData } from './types';
import type { Location } from '../types';

export const useWeatherData = (): {
  weatherData?: WeatherData;
  fetchWeather: (location: Location) => Promise<void>;
} => {
  const { setError } = useContext(ErrorContext);

  const [weatherData, setWeatherData] = useState<WeatherData>();

  const fetchWeather = async (location: Location) => {
    try {
      if (location.longitude || location.locationName) {
        const weather = await weatherService(location);
        setWeatherData(weather);
      }
    } catch (error) {
      setError(error?.toString?.());
    }
  };

  return { weatherData, fetchWeather };
};
