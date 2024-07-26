import Navigation from './navigationParts/Navigation';
import Search from './navigationParts/Search';
import { AppContext } from '../store/AppContext';
import { useContext } from 'react';

const CitySection = () => {
  const { searchFieldVisible, weatherData, datesArray } =
    useContext(AppContext);

  weatherData ? console.log(weatherData[0]) : console.log('No weather data');

  const cityCountryString = `${weatherData?.cityName}, ${weatherData?.countryCode}`;
  const todayString =
    datesArray.length > 0
      ? `${datesArray[1]['formattedWeekday']}, ${datesArray[1]['formattedDate']}`
      : '';

  return (
    <section className=" main--city city w-2/3  h-1/3 relative">
      <Navigation />
      <div className="city--display_box city_box w-full h-full  flex flex-col justify-evenly items-center">
        <h1
          className={`city_box--city_name text-5xl transition-all duration-200 font-bold ${
            searchFieldVisible && `hidden`
          }`}
        >
          {weatherData ? cityCountryString : `South Gulf of Mexico`}
        </h1>
        <Search />
        <h2 className="city_box--date text-3xl font-thin opacity-70">
          {todayString}
        </h2>
      </div>
    </section>
  );
};

export default CitySection;
