import type { FutureWeather } from '../types';
import { baseQuery } from '../services';
import { createURL } from './';
import type { Coordinates, LocationName } from '../types';

export interface FutureWeatherData {
  datetime: string;
  max_temp: number;
  min_temp: number;
  weather: {
    description: string;
    icon: string;
  };
}

export interface FutureWeatherResponse {
  data: FutureWeatherData[];
}

export const getFutureWeather = async (location: LocationName | Coordinates): Promise<FutureWeather[]> => {
  const endpointType = import.meta.env.VITE_FORECAST_ENDPOINT;

  const endpoint = createURL(endpointType, location);

  const response = await baseQuery<FutureWeatherResponse>(endpoint);
  const data = response.data;
  return data.slice(0, 5).map(day => ({
    dateOfWeather: day.datetime,
    maxTempC: day.max_temp,
    minTempC: day.min_temp,
    description: day.weather.description,
    icon: day.weather.icon,
  }));
};
