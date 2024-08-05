import { CiSearch } from 'react-icons/ci';
import { CiCircleRemove } from 'react-icons/ci';
import { AppContext } from '../../index';
import { useEffect, useContext, useRef, useState } from 'react';

export const Search = () => {
  const { searchFieldVisible, setSearchFieldVisible, setSelectedLocation } =
    useContext(AppContext);
  const inputRef = useRef(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    // Load search history from local storage when the component mounts
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleDeleteHistoryItem = i => {
    const newHistory = searchHistory.filter((place, ii) => ii !== i);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      const newHistory = [
        inputValue,
        ...searchHistory.filter(place => place !== inputValue),
      ].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      setSelectedLocation({ locationName: inputValue });
      setSearchFieldVisible(prevState => !prevState);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (searchFieldVisible) {
      inputRef.current.focus();
    }
  }, [searchFieldVisible]);

  const handleHistoryItem = place => {
    setSelectedLocation({ locationName: place });
    setSearchFieldVisible(prevState => !prevState);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      autoFocus
      className={` city_box--search search-box  w-1/2 h-12 flex-row justify-evenly items-center ${
        searchFieldVisible ? 'flex' : 'hidden'
      }`}
    >
      <div className="w-2/3 relative">
        <input
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          list="search-history"
          ref={inputRef}
          placeholder="Enter a city"
          className="search-box--input rounded active:border active:border-slate-600 active:outline-none h-10 w-full p-1 placeholder:opacity-50 text-black"
        />
        <ul
          className={`absolute search-box--history history w-full transition-all duration-200 ${
            isInputFocused && searchHistory.length > 0
              ? 'h-auto opacity-100'
              : 'h-0 opacity-0'
          } bg-slate-50 border rounded p-2 z-50`}
        >
          {searchHistory.map((place, i) => (
            <li
              onClick={() => handleHistoryItem(place)}
              key={i}
              className="history--item cursor-pointer flex flex-row justify-between opacity-[inherit] hover:bg-slate-100"
            >
              <p className="text-black">{place}</p>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  handleDeleteHistoryItem(i);
                }}
                className=""
              >
                <CiCircleRemove className="delete-icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="submit"
        className="search-box--button border rounded-full h-12 w-12 flex justify-center items-center hover:border-2 font-thin text-xl"
      >
        <CiSearch />
      </button>
    </form>
  );
};
