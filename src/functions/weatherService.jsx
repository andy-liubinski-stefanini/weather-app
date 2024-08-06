import { getTodayWeather } from './getTodayWeather';
import { getFutureWeather } from './getFutureWeather';

export const weatherService = async location => {
  const todayWeather = await getTodayWeather(location);
  const forecastWeather = await getFutureWeather(location);
  return [todayWeather, forecastWeather];
};
