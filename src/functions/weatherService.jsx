import { getTodayWeather } from './';
import { getFutureWeather } from './';

export const weatherService = async location => {
  const todayWeather = await getTodayWeather(location);
  const forecastWeather = await getFutureWeather(location);
  return [todayWeather, forecastWeather];
};
