import { ForecastDay } from '../../components';
import { AppContext } from '../../store';
import { useContext } from 'react';
import './styles.scss';

export const ForecastBox: React.FC = () => {
  const { weatherData, formattedDates } = useContext(AppContext);
  const forecast = weatherData && weatherData[1] ? weatherData[1] : null;

  return (
    <section className="main--forecast">
      {forecast?.map((day, index) => (
        <ForecastDay
          key={`${day}-${index}`}
          day={day}
          formattedDate={formattedDates[index]}
        />
      ))}
    </section>
  );
};
