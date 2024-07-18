import { CiLocationOn, CiMap } from 'react-icons/ci';

const Navigation = () => {
  return (
    <nav className="city--navigation_box navigation absolute h-full w-16 flex flex-col justify-evenly items-center">
      <button className="navigation--geolocate border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
        <CiLocationOn />
      </button>
      <button className="navigation--search  border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
        <CiMap />
      </button>
      <button className="navigation--toggle_unit border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
        C°
      </button>
    </nav>
  );
};

export default Navigation;
