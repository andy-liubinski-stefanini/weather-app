import fetchData from '../services/fetcher';
const apikey = import.meta.env.VITE_API_KEY;

const getTodayWeather = async location => {
  let endpoint = null;
  if (location.latitude && location.longitude) {
    endpoint = `https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=${apikey}&include=minutely`;
  }
  if (location.locationName) {
    endpoint = `https://api.weatherbit.io/v2.0/current?city=${location.locationName}&key=${apikey}&include=minutely`;
  }

  try {
    const data = await fetchData(endpoint);
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
  } catch (error) {
    console.error("Cannot fetch today's weather: ", error);
    throw error;
  }
};

export default getTodayWeather;
