import { CiLocationOn, CiMap } from 'react-icons/ci';
import { useContext } from 'react';
import { AppContext } from '../../store';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleIsCelsius } from '../../store/appSlice';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  // const { handleSearchButton, handleGeolocate, handleUnitToggle, isCelsius } =
  //   useContext(AppContext);

  const handleUnitToggle = () => {
    dispatch(toggleIsCelsius());
  };

  const isCelsius = useSelector((state: RootState) => state.app.isCelsius);

  const { handleSearchButton, handleGeolocate } = useContext(AppContext);

  return (
    <nav className="city--navigation_box">
      <button
        onClick={handleGeolocate}
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
