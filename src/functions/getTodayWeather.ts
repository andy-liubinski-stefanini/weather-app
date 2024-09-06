import { TodayWeather } from '../types';
import { baseQuery } from '../services';
import { createURL } from './';
import type { Coordinates, LocationName } from '../types';

export interface TodayWeatherData {
  city_name: string;
  country_code: string;
  temp: number;
  uv: number;
  aqi: number;
  rh: number;
  wind_spd: number;
  weather: {
    description: string;
    icon: string;
  };
}
export interface TodayWeatherResponse {
  data: TodayWeatherData[];
}

export const getTodayWeather = async (location: LocationName | Coordinates): Promise<TodayWeather> => {
  const endpointType = import.meta.env.VITE_CURRENT_ENDPOINT;

  const endpoint = createURL(endpointType, location);

  const data = await baseQuery<TodayWeatherResponse>(endpoint);
  return {
    cityName: data.data[0].city_name,
    countryCode: data.data[0].country_code,
    temperatureC: Math.round(data.data[0].temp),
    temperatureF: (9 / 5) * Number(data.data[0].temp) + 32,
    uvIndex: data.data[0].uv,
    airQuality: data.data[0].aqi,
    humidity: data.data[0].rh,
    windSpeed: data.data[0].wind_spd,
    description: data.data[0].weather.description,
    icon: data.data[0].weather.icon,
  };
};
