import { getTodayWeather } from './';
import { getFutureWeather } from './';
import { Location } from './types';

export const weatherService = async (location: Location) => {
  const todayWeather = await getTodayWeather(location);
  const forecastWeather = await getFutureWeather(location);
  return [todayWeather, forecastWeather];
};
