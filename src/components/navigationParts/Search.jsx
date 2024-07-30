import { CiSearch } from 'react-icons/ci';
import { AppContext } from '../../store/AppContext';
import { useContext, useRef } from 'react';

const Search = () => {
  const { searchFieldVisible, setSearchFieldVisible, setSelectedLocation } =
    useContext(AppContext);

  const inputRef = useRef(null);

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    const inputValue = inputRef.current.value;
    inputRef.current.value = '';
    setSelectedLocation({ locationName: inputValue });
    console.log(inputRef.current.value);
    setSearchFieldVisible(prevState => !prevState);
  }

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`city_box--search search-box transition-all duration-200 w-1/2 h-12  flex-row justify-evenly items-center ${
        searchFieldVisible ? 'flex' : 'hidden'
      }  `}
    >
      <input
        ref={inputRef}
        placeholder="Enter a city"
        className="search-box--input rounded active:border active:border-slate-600 active:outline-none h-10 w-2/3 p-1 placeholder:opacity-50 text-black"
      ></input>
      <button
        type="submit"
        className="search-box--button border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Search;
