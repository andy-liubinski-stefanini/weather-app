import { CiLocationOn, CiMap } from 'react-icons/ci';
import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';

const Navigation = () => {
  const { handleSearchButton, handleGeolocate, handleUnitToggle, celsius } =
    useContext(AppContext);

  return (
    <nav className="city--navigation_box navigation absolute h-full w-16 flex flex-col justify-evenly items-center">
      <button
        onClick={handleGeolocate}
        className="navigation--geolocate border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl"
      >
        <CiLocationOn />
      </button>
      <button
        onClick={handleSearchButton}
        className="navigation--search  border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl"
      >
        <CiMap />
      </button>
      <button
        onClick={handleUnitToggle}
        className="navigation--toggle_unit border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl"
      >
        {celsius ? 'C°' : 'F°'}
      </button>
    </nav>
  );
};

export default Navigation;
