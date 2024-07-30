import { CiSearch } from 'react-icons/ci';
import { AppContext } from '../../store/AppContext';
import { useEffect, useContext, useRef, useState } from 'react';

const Search = () => {
  const { searchFieldVisible, setSearchFieldVisible, setSelectedLocation } =
    useContext(AppContext);
  const inputRef = useRef(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load search history from local storage when the component mounts
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    const inputValue = inputRef.current.value;
    const newHistory = [inputValue, ...searchHistory].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    inputRef.current.value = '';
    setSelectedLocation({ locationName: inputValue });
    setSearchFieldVisible(prevState => !prevState);
  }

  useEffect(() => {
    if (searchFieldVisible) {
      inputRef.current.focus();
    }
  }, [searchFieldVisible]);

  return (
    <form
      onSubmit={handleSearchSubmit}
      autoFocus
      className={`city_box--search search-box transition-all duration-200 w-1/2 h-12  flex-row justify-evenly items-center ${
        searchFieldVisible ? 'flex' : 'hidden'
      }  `}
    >
      <input
        list="search-history"
        ref={inputRef}
        placeholder="Enter a city"
        className="search-box--input rounded active:border active:border-slate-600 active:outline-none h-10 w-2/3 p-1 placeholder:opacity-50 text-black"
      ></input>
      <datalist id="search-history" className="mt-2 p-1">
        {searchHistory.map(place => (
          <option key={place} value={place} className="p-1"></option>
        ))}
      </datalist>
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
