import { ForecastDay } from '../../components';
import './styles.scss';
import { useSelector } from 'react-redux';
import { selectWeatherData, selectFormattedDates } from '../../store/appSlice';

export const ForecastBox: React.FC = () => {
  const weatherData = useSelector(selectWeatherData);
  const formattedDates = useSelector(selectFormattedDates);

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
