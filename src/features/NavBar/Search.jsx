import { CiSearch } from 'react-icons/ci';
import { AppContext } from '../../store';
import { SearchHistory } from '.';
import { useEffect, useContext, useRef, useState } from 'react';
import './styles.scss'; // Import the SCSS file

export const Search = () => {
  const { searchFieldVisible, setSearchFieldVisible, setSelectedLocation } =
    useContext(AppContext);
  const inputRef = useRef(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

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

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`city_box--search search-box ${searchFieldVisible ? 'flex' : 'hidden'}`}
    >
      <div className="search-box--wrapper">
        <input
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          list="search-history"
          ref={inputRef}
          placeholder="Enter a city"
          className="search-box--input"
        />
        <SearchHistory
          isInputFocused={isInputFocused}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      </div>
      <button type="submit" className="search-box--button">
        <CiSearch />
      </button>
    </form>
  );
};
