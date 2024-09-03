import { TextWeatherExplanation } from '../WeatherToText';
import { InformationItem } from '../../components';
import { ErrorDisplay } from '../ErrorDisplay';
import './styles.scss';
import { selectIsCelsius, selectWeatherData } from '../../store/appSlice';
import { selectError } from '../../store/errorSlice';
import { useAppSelector } from '../../store/store';

export const InfoBox: React.FC = () => {
  const isCelsius = useAppSelector(selectIsCelsius);
  const weatherData = useAppSelector(selectWeatherData);
  const error = useAppSelector(selectError);
  const weather = weatherData?.[0] ?? null;

  const temperatureC = weather ? weather.temperatureC : 'N/A';
  const temperatureF = weather ? Math.floor((9 / 5) * Number(temperatureC) + 32) : 'N/A';
  const humidity = weather ? weather.humidity : 'N/A';
  const airQuality = weather ? weather.airQuality : 'N/A';
  const uvIndex = weather ? weather.uvIndex : 'N/A';
  const iconLink = weather ? `https://cdn.weatherbit.io/static/img/icons/${weather.icon}.png` : '';

  return (
    <section className="main--info-box">
      <div className="info-box--informations-box">
        <div className="info-box--informations-box--icon">
          {weather && (
            <img
              src={iconLink}
              alt=""
            />
          )}
        </div>
        <div className="info-box--informations-box--temps">{isCelsius ? temperatureC : temperatureF}°</div>

        <InformationItem
          legend="Humidity:"
          info={weather && `${humidity}%`}
        />
        <InformationItem
          legend="Air quality:"
          info={weather && airQuality}
        />
        <InformationItem
          legend="UV Index:"
          info={weather && uvIndex}
        />
      </div>
      <div className="info-box--explanation">{error ? <ErrorDisplay /> : <TextWeatherExplanation />}</div>
    </section>
  );
};
