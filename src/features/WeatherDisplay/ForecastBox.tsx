import { ForecastDay } from '../../components';
import './styles.scss';
import { selectWeatherData, selectFormattedDates } from '../../store/appSlice';
import { useAppSelector } from '../../store/store';

export const ForecastBox: React.FC = () => {
  const weatherData = useAppSelector(selectWeatherData);
  const formattedDates = useAppSelector(selectFormattedDates);

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
