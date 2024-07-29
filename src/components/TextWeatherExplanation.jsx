import { AppContext } from '../store/AppContext';
import { useContext } from 'react';

const TextWeatherExplanation = () => {
  const { weatherData, celsius } = useContext(AppContext);

  const weatherObject = weatherData && weatherData[0] ? weatherData[0] : null;
  const temperatureC = weatherObject ? weatherObject.temperatureC : null;
  const temperatureF = temperatureC
    ? Math.floor((9 / 5) * Number(temperatureC) + 32)
    : null;
  const description = weatherObject ? weatherObject.weather.description : null;
  const humidity = weatherObject ? weatherObject.humidity : null;
  const windSpeed = weatherObject ? weatherObject.windSpeed : null;

  let wear = 'a pair of shorts';

  if (Number(temperatureC) <= 30) {
    wear = 'a t-shirt';
  }
  if (Number(temperatureC) < 21) {
    wear = 'a sweater';
  }

  if (Number(temperatureC) < 13) {
    wear = 'a jacket';
  }
  if (Number(temperatureC) < 0) {
    wear = 'a heavy jacket';
  }

  const text = `It is currently ${
    celsius ? temperatureC : temperatureF
  }° with ${description ? description.toLowerCase() : `N/A`}, humidity of ${
    humidity ? humidity : `N/A`
  }% and wind speed of ${windSpeed} m/s. Wear ${wear}.`;

  return text;
};

export default TextWeatherExplanation;
