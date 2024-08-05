import { AppContext } from '../../index';
import { useContext } from 'react';

export const TextWeatherExplanation = () => {
  const { weatherData, celsius } = useContext(AppContext);

  const weather = weatherData && weatherData[0] ? weatherData[0] : null;
  const temperatureC = weather ? weather.temperatureC : null;
  const temperatureF = temperatureC
    ? Math.floor((9 / 5) * Number(temperatureC) + 32)
    : null;
  const description = weather ? weather.description : null;
  const humidity = weather ? weather.humidity : null;
  const windSpeed = weather ? weather.windSpeed : null;

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

  const welcomeText =
    'Please press geolocate button to see the local weather or map button to see weather for any city in the world.';

  const text = `It is currently ${
    celsius ? temperatureC : temperatureF
  }° with ${description ? description.toLowerCase() : `N/A`}, humidity of ${
    humidity ? humidity : `N/A`
  }% and wind speed of ${windSpeed} m/s. Wear ${wear}.`;

  return <p className="explanation-text">{weatherData ? text : welcomeText}</p>;
};
