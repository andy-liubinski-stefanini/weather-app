import { CiSearch } from 'react-icons/ci';
import { GlobalContext } from '../../store/GlobalContext';
import { useContext } from 'react';

const Search = () => {
  const { searchField } = useContext(GlobalContext);

  return (
    <div
      className={`city_box--search search-box transition-all duration-200 w-1/2 h-12  flex-row justify-evenly items-center ${
        searchField ? 'flex' : 'hidden'
      }  `}
    >
      <input
        placeholder="Enter a city"
        className="search-box--input rounded active:border active:border-slate-600 active:outline-none h-10 w-2/3 p-1 placeholder:opacity-50 text-black"
      ></input>
      <button className="search-box--button border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl">
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
