import { Navigation } from '../../index';
import { Search } from '../../index';
import { AppContext } from '../../index';
import { useContext } from 'react';

export const CitySection = () => {
  const { searchFieldVisible, weatherData, formattedDates } =
    useContext(AppContext);

  const weather = weatherData?.[0] ?? null;
  const cityCountry = weather
    ? `${weather?.cityName}, ${weather?.countryCode}`
    : 'Loading...';
  const today =
    formattedDates.length > 0
      ? `${formattedDates[0]['formattedWeekday']}, ${formattedDates[0]['formattedDate']}`
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
          {weatherData ? cityCountry : `City, World`}
        </h1>
        <Search />
        <h2 className="city_box--date text-3xl font-thin opacity-70">
          {today}
        </h2>
      </div>
    </section>
  );
};
