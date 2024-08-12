/* eslint-disable react/prop-types */
import { Navigation, Search } from '../NavBar';
import { AppContext } from '../../store';
import { useContext } from 'react';
import './styles.scss'; // Import the SCSS file

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
    <section className="main--city">
      <Navigation />
      <div className="city--display_box">
        <h1
          hidden={searchFieldVisible}
          className='city_box--city_name'
        >
          {weatherData ? cityCountry : `City, World`}
        </h1>
        <Search />
        <h2 className="city_box--date">
          {today}
        </h2>
      </div>
    </section>
  );
};
