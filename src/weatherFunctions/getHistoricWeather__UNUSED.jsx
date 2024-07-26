import fetchData from '../services/fetcher';
const apikey = import.meta.env.VITE_API_KEY;

const getTodayWeather = async (location, date) => {
  const apiCurrentWeather = `https://api.weatherbit.io/v2.0/history/daily?lat=38.123&lon=-78.543&start_date=2024-07-22&end_date=2024-07-23&key=API_KEY`;
  try {
    const data = await fetchData(apiCurrentWeather);
    return {
      dateOfWeather: date,
      cityName: data.data[0].city_name,
      countryCode: data.data[0].country_code,
      temperatureC: data.data[0].temp,
      temperatureF: (9 / 5) * Number(data.data[0].temp) + 32,
      uvIndex: data.data[0].uv,
      airQuality: data.data[0].aqi,
      humidity: data.data[0].rh,
      weather: data.data[0].weather,
    };
  } catch (error) {
    console.error("Cannot fetch today's weather: ", error);
    throw error;
  }
};

export default getTodayWeather;
