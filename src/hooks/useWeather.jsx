const useWeather = async location => {
  const apikey = import.meta.env.VITE_API_KEY;

  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=${apikey}&include=minutely`
    );
    const data = await response.json();
    const currentWeatherData = data.data[0];

    const weatherData = {
      cityName: currentWeatherData.city_name,
      countryCode: currentWeatherData.country_code,
      temperatureC: currentWeatherData.temp,
      temperatureF: (9 / 5) * Number(currentWeatherData.temp) + 32,
      uvIndex: currentWeatherData.uv,
      airQuality: currentWeatherData.aqi,
      humidity: currentWeatherData.rh,
      weather: currentWeatherData.weather,
    };

    return weatherData;
  } catch (error) {
    console.error(
      'Cannot fetch weather data. Better go look out of the window.'
    );
    return null;
  }
};

export default useWeather;
