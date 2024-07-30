import fetchData from '../services/fetcher';
const apikey = import.meta.env.VITE_API_KEY;

const getFutureWeather = async location => {
  let endpoint = null;
  if (location.latitude && location.longitude) {
    endpoint = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&key=${apikey}`;
  }
  if (location.locationName) {
    endpoint = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location.locationName}&key=${apikey}`;
  }
  try {
    const data = await fetchData(endpoint);
    const dataArray = data.data;
    return dataArray.slice(0, 5).map(day => ({
      dateOfWeather: day.datetime,
      maxTempC: day.max_temp,
      minTempC: day.min_temp,
      description: day.weather.description,
      icon: day.weather.icon,
    }));
  } catch (error) {
    console.error('Cannot fetch future weather: ', error);
    throw error;
  }
};

export default getFutureWeather;
