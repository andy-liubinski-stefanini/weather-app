import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="city_box--search search-box w-1/2 h-12  flex-row justify-evenly items-center hidden">
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
