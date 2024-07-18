import { WiDaySunny } from 'react-icons/wi';

const ForecastDay = () => {
  return (
    <div className="forecast-box--day day-forecast w-1/5 h-full flex flex-col justify-between items-center">
      <div className="day-forecast--day font-light text-lg">Today</div>
      <div className="day-forecast--icon font-bold text-6xl">
        <WiDaySunny />
      </div>
      <div className="day-forecast--description">Partly sunny</div>
      <div className="day-forecast--temps pb-4">Max:31° | Min: 22°</div>
    </div>
  );
};

export default ForecastDay;
