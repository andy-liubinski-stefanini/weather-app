import type { FutureWeather } from '../hooks/types';
import { baseQuery } from '../services';
import { createURL } from './';
import type { Location, FutureWeatherResponse } from './types';

export const getFutureWeather = async (
  location: Location
): Promise<FutureWeather[]> => {
  const endpointType = import.meta.env.VITE_FORECAST_ENDPOINT;
  const urlParams = {};

  if (location.latitude) {
    urlParams['lat'] = location.latitude;
  }
  if (location.longitude) {
    urlParams['lon'] = location.longitude;
  }
  if (location.locationName) {
    urlParams['city'] = location.locationName;
  }

  const endpoint = createURL(endpointType, urlParams);

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
