import { getTodayWeather } from './';
import { getFutureWeather } from './';
import type { WeatherData } from '../types';
import type { Coordinates, LocationName } from '../types';

export const weatherService = async (location: LocationName | Coordinates): Promise<WeatherData> => {
  const todayWeather = await getTodayWeather(location);
  const forecastWeather = await getFutureWeather(location);
  return [todayWeather, forecastWeather];
};
