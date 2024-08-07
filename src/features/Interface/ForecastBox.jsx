import { ForecastDay } from '../../index';
import { AppContext } from '../../index';
import { useContext } from 'react';

export const ForecastBox = () => {
  const { weatherData, formattedDates } = useContext(AppContext);
  const forecast = weatherData && weatherData[1] ? weatherData[1] : null;

  return (
    <section className="main--forecast forecast-box w-2/3 h-1/3 flex flex-row">
      {forecast?.map((day, i) => {
        return (
          <ForecastDay key={i} day={day} formattedDate={formattedDates[i]} />
        );
      })}
    </section>
  );
};
