import { CiLocationOn, CiMap } from 'react-icons/ci';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../store/errorSlice';
import {
  toggleIsCelsius,
  toggleSearchFieldVisible,
  setWeatherData,
  selectIsCelsius,
  selectCoordinates,
} from '../../store/appSlice';
import { weatherService } from '../../functions';
import type { Coordinates } from '../../types';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const handleUnitToggle = () => {
    dispatch(toggleIsCelsius());
  };

  const isCelsius = useSelector(selectIsCelsius);
  const coordinates: Coordinates = useSelector(selectCoordinates);

  const handleSearchButton = () => {
    dispatch(toggleSearchFieldVisible());
  };

  async function handleGetLocalWeather() {
    try {
      const weather = await weatherService(coordinates);
      dispatch(setWeatherData(weather));
    } catch (error) {
      dispatch(setError(error?.toString()));
    }
  }

  return (
    <nav className="city--navigation_box">
      <button
        onClick={handleGetLocalWeather}
        className="city--navigation_box--geolocate"
      >
        <CiLocationOn />
      </button>
      <button
        onClick={handleSearchButton}
        className="city--navigation_box--search"
      >
        <CiMap />
      </button>
      <button
        onClick={handleUnitToggle}
        className="city--navigation_box--toggle_unit"
      >
        {isCelsius ? 'C°' : 'F°'}
      </button>
    </nav>
  );
};
