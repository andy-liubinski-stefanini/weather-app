import { WiMeteor } from 'react-icons/wi';
import { GlobalContext } from '../store/GlobalContext';
import { useContext } from 'react';

const InfoBox = () => {
  const { weatherData, celsius } = useContext(GlobalContext);

  // const weatherIcon = null;
  const temperature = celsius
    ? weatherData?.temperatureC
    : weatherData?.temperatureF;
  const humidity = weatherData?.humidity;
  const airQuality = weatherData?.air_quality;
  const uvIndex = weatherData?.uv_index;
  // const explanation = null;

  return (
    <section className="main--info-box info-box flex flex-col justify-between items-center w-2/3 h-1/3">
      <div className="info-box--informations-box informations-box grid grid-cols-5 grid-rows-1 gap-0 w-full ">
        <div className="informations-box--icon  px-4 flex flex-row justify-end items-center flex-grow text-7xl">
          <WiMeteor />
        </div>
        <div className="informations-box--temps  px-4 flex flex-col justify-center items-center flex-grow text-5xl font-thin opacity-70">
          {weatherData ? `${temperature}°` : `999°`}
        </div>
        <div className="informations-box--air-qual air-qual px-4 flex flex-col justify-center items-center flex-grow ">
          <h3 className="air-qual--title">Humidity:</h3>
          <p className="air-qual--score text-3xl opacity-70">
            {weatherData ? `${humidity}%` : `10%`}
          </p>
        </div>
        <div className="informations-box--air-qual air-qual px-4 flex flex-col justify-center items-center flex-grow ">
          <h3 className="air-qual--title">Air quality:</h3>
          <p className="air-qual--score text-3xl opacity-70">
            {weatherData ? airQuality : `1/10`}
          </p>
        </div>
        <div className="informations-box--uv-index uv-index px-4 flex flex-col justify-center items-center flex-grow ">
          <h3 className="uv-index--title">UV Index:</h3>
          <p className="uv-index--score text-3xl opacity-70">
            {weatherData ? uvIndex : `10/10`}
          </p>
        </div>
      </div>
      <div className="info-box--explanation explanation w-full flex flex-row justify-center items-center flex-grow pb-1">
        <p className="explanation-text">{`Dinos ain't getting through this!`}</p>
      </div>
    </section>
  );
};

export default InfoBox;
