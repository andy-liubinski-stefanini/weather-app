import { AppContext } from '../../index';
import { useContext } from 'react';
import { TextWeatherExplanation } from '../../index';
import { InformationItem } from '../../index';

export const InfoBox = () => {
  const { weatherData, celsius } = useContext(AppContext);

  const weather = weatherData && weatherData[0] ? weatherData[0] : null;

  const temperatureC = weather ? weather.temperatureC : null;
  const temperatureF = temperatureC
    ? Math.floor((9 / 5) * Number(temperatureC) + 32)
    : null;
  const humidity = weather ? weather.humidity : 'N/A';
  const airQuality = weather ? weather.airQuality : 'N/A';
  const uvIndex = weather ? weather.uvIndex : 'N/A';
  const iconLink = weather
    ? `https://cdn.weatherbit.io/static/img/icons/${weather.icon}.png`
    : null;

  return (
    <section className="main--info-box info-box flex flex-col justify-between items-center w-2/3 h-1/3">
      <div className="info-box--informations-box informations-box grid grid-cols-5 grid-rows-1 gap-0 w-full ">
        <div className="informations-box--icon  px-4 flex flex-row justify-end items-center flex-grow text-7xl">
          <img
            className={`w-20 h-20 ${weatherData ? `` : `hidden`}`}
            src={iconLink}
            alt=""
          />
        </div>
        <div className="informations-box--temps  px-4 flex flex-col justify-center items-center flex-grow text-5xl font-thin opacity-70">
          {weatherData ? `${celsius ? temperatureC : temperatureF}°` : `N/A°`}
        </div>

        <InformationItem
          legend={`Humidity:`}
          info={weatherData && `${humidity}%`}
        />
        <InformationItem
          legend={`Air quality:`}
          info={weatherData && airQuality}
        />
        <InformationItem legend={`UV Index:`} info={weatherData && uvIndex} />
      </div>
      <div className="info-box--explanation explanation w-full flex flex-row justify-center items-center flex-grow pb-1">
        <TextWeatherExplanation />
      </div>
    </section>
  );
};
