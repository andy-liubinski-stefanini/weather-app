/* eslint-disable react/prop-types */
import { WiDaySunny } from 'react-icons/wi';
import { AppContext } from '../store/AppContext';
import { useContext } from 'react';

const ForecastDay = ({ day, formattedDate }) => {
  const { celsius } = useContext(AppContext);

  const maxTempC = day ? day.maxTempC : null;
  const minTempC = day ? day.minTempC : null;

  const maxTempF = maxTempC
    ? Math.floor((9 / 5) * Number(maxTempC) + 32)
    : null;

  const minTempF = minTempC
    ? Math.floor((9 / 5) * Number(minTempC) + 32)
    : null;

  console.log(formattedDate.formattedDate);
  return (
    <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
      <div className="day-forecast--day font-light text-lg">
        {day ? `${formattedDate.formattedDate}` : `Loading...`}
      </div>
      <div className="day-forecast--icon font-bold text-6xl">
        <WiDaySunny />
      </div>
      <div className="day-forecast--description">
        {day ? `${day.description}` : `Loading...`}
      </div>
      <div className="day-forecast--temps pb-4">
        Max:{day ? `${celsius ? maxTempC : maxTempF}°` : `Loading...`} | Min:
        {day ? `${celsius ? minTempC : minTempF}°` : `Loading...`}
      </div>
    </div>
  );
};

export default ForecastDay;
