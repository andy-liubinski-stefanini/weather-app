import { baseQuery } from '../services';
const apikey = import.meta.env.VITE_API_KEY;

export const getFutureWeather = async location => {
  let endpoint = null;
  if (location.latitude && location.longitude) {
    endpoint = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&key=${apikey}`;
  }
  if (location.locationName) {
    endpoint = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.locationName}&key=${apikey}`;
  }

  const response = await baseQuery(endpoint);
  const data = response.data;
  return data.slice(0, 5).map(day => ({
    dateOfWeather: day.datetime,
    maxTempC: day.max_temp,
    minTempC: day.min_temp,
    description: day.weather.description,
    icon: day.weather.icon,
  }));
};
