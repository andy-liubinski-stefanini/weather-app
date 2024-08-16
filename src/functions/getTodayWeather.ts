import { TodayWeather } from '../hooks/types';
import { baseQuery } from '../services';
import { createURL } from './';
import type { TodayWeatherResponse } from './types';
import type { Location } from '../types';

export const getTodayWeather = async (
  location: Location
): Promise<TodayWeather> => {
  const endpointType = import.meta.env.VITE_CURRENT_ENDPOINT;

  const endpoint = createURL(endpointType, location);

  const data = await baseQuery<TodayWeatherResponse>(endpoint);
  return {
    cityName: data.data[0].city_name,
    countryCode: data.data[0].country_code,
    temperatureC: data.data[0].temp,
    temperatureF: (9 / 5) * Number(data.data[0].temp) + 32,
    uvIndex: data.data[0].uv,
    airQuality: data.data[0].aqi,
    humidity: data.data[0].rh,
    windSpeed: data.data[0].wind_spd,
    description: data.data[0].weather.description,
    icon: data.data[0].weather.icon,
  };
};
