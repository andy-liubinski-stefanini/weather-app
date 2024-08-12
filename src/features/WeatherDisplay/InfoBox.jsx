/* eslint-disable react/prop-types */
import { AppContext, ErrorContext } from '../../store';
import { useContext } from 'react';
import { TextWeatherExplanation } from '../WeatherToText';
import { InformationItem } from '../../components';
import { ErrorDisplay } from '../ErrorDisplay';
import './styles.scss'; // Import the SCSS file

export const InfoBox = () => {
  const { weatherData, isCelsius } = useContext(AppContext);
  const { error } = useContext(ErrorContext);

  const weather = weatherData?.[0] ?? null;

  const temperatureC = weather ? weather.temperatureC : 'N/A°';
  const temperatureF = weather
    ? Math.floor((9 / 5) * Number(temperatureC) + 32)
    : 'N/A°';
  const humidity = weather ? weather.humidity : 'N/A';
  const airQuality = weather ? weather.airQuality : 'N/A';
  const uvIndex = weather ? weather.uvIndex : 'N/A';
  const iconLink = weather
    ? `https://cdn.weatherbit.io/static/img/icons/${weather.icon}.png`
    : null;

  return (
    <section className="main--info-box">
      <div className="info-box--informations-box">
        <div className="info-box--informations-box--icon">
          {weather && <img src={iconLink} alt="" />}
        </div>
        <div className="info-box--informations-box--temps">
          {isCelsius ? temperatureC : temperatureF}
        </div>

        <InformationItem legend="Humidity:" info={weather && `${humidity}%`} />
        <InformationItem legend="Air quality:" info={weather && airQuality} />
        <InformationItem legend="UV Index:" info={weather && uvIndex} />
      </div>
      <div className="info-box--explanation">
        {error ? <ErrorDisplay /> : <TextWeatherExplanation />}
      </div>
    </section>
  );
};
