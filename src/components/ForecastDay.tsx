import { useAppSelector } from '../store/store';
import { selectIsCelsius } from '../store/appSlice';

interface Day {
  maxTempC: number;
  minTempC: number;
  description: string;
  icon: string;
}

interface FormattedDate {
  formattedDate: string;
  formattedWeekday: string;
}

interface ForecastDayProps {
  day: Day | null;
  formattedDate: FormattedDate;
}

export const ForecastDay: React.FC<ForecastDayProps> = ({ day, formattedDate }) => {
  const isCelsius: boolean = useAppSelector(selectIsCelsius);

  const maxTempC = day ? day.maxTempC : null;
  const minTempC = day ? day.minTempC : null;

  const maxTempF = maxTempC ? Math.floor((9 / 5) * Number(maxTempC) + 32) : null;

  const minTempF = minTempC ? Math.floor((9 / 5) * Number(minTempC) + 32) : null;

  const maxTempDisplay = `${isCelsius ? maxTempC : maxTempF}°`;
  const minTempDisplay = `${isCelsius ? minTempC : minTempF}°`;

  const iconLink = day ? `https://cdn.weatherbit.io/static/img/icons/${day.icon}.png` : null;

  return (
    <div className="forecast-box--day day-forecast">
      <div className="day-forecast--day">{day ? formattedDate.formattedDate : `Loading...`}</div>
      <div className="day-forecast--weekday">{day ? formattedDate.formattedWeekday : `Loading...`}</div>
      <div className="day-forecast--icon icon">
        {iconLink && (
          <img
            className="icon--img"
            src={iconLink}
            alt="Weather icon"
          />
        )}
      </div>
      <div className="day-forecast--description">{day ? day.description : `Loading...`}</div>
      <div className="day-forecast--temps">
        Max: {day ? maxTempDisplay : `Loading...`} | Min: {day ? minTempDisplay : `Loading...`}
      </div>
    </div>
  );
};
