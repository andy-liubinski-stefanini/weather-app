import { CiLocationOn, CiMap } from 'react-icons/ci';
import './styles.scss';
import { setError } from '../../store/errorSlice';
import { toggleIsCelsius, toggleSearchFieldVisible, setWeatherData, selectIsCelsius, selectCoordinates } from '../../store/appSlice';
import { weatherService } from '../../functions';
import type { Coordinates } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleUnitToggle = () => {
    dispatch(toggleIsCelsius());
  };

  const isCelsius = useAppSelector(selectIsCelsius);
  const coordinates: Coordinates = useAppSelector(selectCoordinates);

  const handleSearchButton = () => {
    dispatch(toggleSearchFieldVisible());
  };

  async function handleGetLocalWeather() {
    try {
      const weather = await weatherService(coordinates);
      dispatch(setWeatherData(weather));
    } catch (error) {
      dispatch(setError((error as Error).toString()));
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
