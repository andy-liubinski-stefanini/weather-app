import { CiLocationOn, CiMap } from 'react-icons/ci';
import { useContext } from 'react';
import { AppContext } from '../../store';
import './styles.scss';

export const Navigation: React.FC = () => {
  const { handleSearchButton, handleGeolocate, handleUnitToggle, isCelsius } =
    useContext(AppContext);

  return (
    <nav className="city--navigation_box">
      <button
        title="Local weather"
        onClick={handleGeolocate}
        className="city--navigation_box--geolocate"
      >
        <CiLocationOn />
      </button>
      <button
        title="Search a city"
        onClick={handleSearchButton}
        className="city--navigation_box--search"
      >
        <CiMap />
      </button>
      <button
        title={isCelsius ? 'Show in fahrenheit' : 'Show in degrees centigrade'}
        onClick={handleUnitToggle}
        className="city--navigation_box--toggle_unit"
      >
        {isCelsius ? 'C°' : 'F°'}
      </button>
    </nav>
  );
};
