import { Navigation, Search } from '../NavBar';
import { AppContext } from '../../store';
import { useContext } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const CitySection: React.FC = () => {
  const { weatherData, formattedDates } = useContext(AppContext);
  // const { searchFieldVisible, weatherData, formattedDates } =
  //   useContext(AppContext);

  const searchFieldVisible = useSelector(
    (state: RootState) => state.app.searchFieldVisible
  );

  const weather = weatherData?.[0] ?? null;
  const cityCountry = weather
    ? `${weather.cityName}, ${weather.countryCode}`
    : 'Loading...';
  const today =
    formattedDates.length > 0
      ? `${formattedDates[0].formattedWeekday}, ${formattedDates[0].formattedDate}`
      : '';

  return (
    <section className="main--city">
      <Navigation />
      <div className="city--display_box">
        <h1 hidden={searchFieldVisible} className="city_box--city_name">
          {weatherData ? cityCountry : `City, World`}
        </h1>
        <Search />
        <h2 className="city_box--date">{today}</h2>
      </div>
    </section>
  );
};
