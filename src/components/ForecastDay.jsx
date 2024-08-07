/* eslint-disable react/prop-types */
import { AppContext } from '../store';
import { useContext } from 'react';

export const ForecastDay = ({ day, formattedDate }) => {
  const { isCelsius } = useContext(AppContext);

  const maxTempC = day ? day.maxTempC : null;
  const minTempC = day ? day.minTempC : null;

  const maxTempF = maxTempC
    ? Math.floor((9 / 5) * Number(maxTempC) + 32)
    : null;

  const minTempF = minTempC
    ? Math.floor((9 / 5) * Number(minTempC) + 32)
    : null;

  const iconLink = day
    ? `https://cdn.weatherbit.io/static/img/icons/${day.icon}.png`
    : null;

  return (
    <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
      <div className="day-forecast--day font-light text-lg">
        {day ? `${formattedDate.formattedDate}` : `Loading...`}
      </div>
      <div className="day-forecast--icon font-bold text-6xl">
        <img className="w-16 h-16" src={iconLink} alt="Weather icon" />
      </div>
      <div className="day-forecast--description text-sm">
        {day ? `${day.description}` : `Loading...`}
      </div>
      <div className="day-forecast--temps pb-4">
        Max:{day ? `${isCelsius ? maxTempC : maxTempF}°` : `Loading...`} | Min:
        {day ? `${isCelsius ? minTempC : minTempF}°` : `Loading...`}
      </div>
    </div>
  );
};
