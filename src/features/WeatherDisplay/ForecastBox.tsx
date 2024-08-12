/* eslint-disable react/prop-types */
import { ForecastDay } from '../../components';
import { AppContext } from '../../store';
import { useContext } from 'react';
import './styles.scss'; // Import the SCSS file

export const ForecastBox = () => {
  const { weatherData, formattedDates } = useContext(AppContext);
  const forecast = weatherData && weatherData[1] ? weatherData[1] : null;

  return (
    <section className="main--forecast">
      {forecast?.map((day, i) => (
        <ForecastDay
          key={`${day}-${i}`}
          day={day}
          formattedDate={formattedDates[i]}
        />
      ))}
    </section>
  );
};
