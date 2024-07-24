const useWeather = async location => {
  const apikey = import.meta.env.VITE_API_KEY;

  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=${apikey}&include=minutely`
    );
    const data = await response.json();
    const dataObj = data.data[0];

    const weatherObj = {
      city_name: dataObj.city_name,
      country_code: dataObj.country_code,
      temperature: dataObj.temp,
      uv_index: dataObj.uv,
      air_quality: dataObj.aqi,
      humidity: dataObj.rh,
      weather: dataObj.weather,
    };

    return weatherObj;
  } catch (error) {
    console.error(
      'Cannot fetch weather data. Better go look out of the window.'
    );
    return null;
  }
};

export default useWeather;
