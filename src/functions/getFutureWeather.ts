import type { FutureWeather } from '../hooks/types';
import { baseQuery } from '../services';
import { createURL } from './';
import type { FutureWeatherResponse } from './types';
import type { Coordinates, LocationName } from '../types';

export const getFutureWeather = async (
  location: LocationName | Coordinates
): Promise<FutureWeather[]> => {
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
