import { CiSearch } from 'react-icons/ci';
import { SearchHistory } from '.';
import { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { setError, clearError } from '../../store/errorSlice';
import { toggleSearchFieldVisible, setWeatherData, selectSearchFieldVisible } from '../../store/appSlice';
import { weatherService } from '../../functions';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchFieldVisible = useAppSelector(selectSearchFieldVisible);

  const handleToggleSearchFieldVisibility = () => {
    dispatch(toggleSearchFieldVisible());
  };

  async function handleGetCityWeather(location: string) {
    try {
      const weather = await weatherService({ locationName: location });
      dispatch(setWeatherData(weather));
      dispatch(clearError());
    } catch (error) {
      dispatch(setError((error as Error).toString()));
    }
  }

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const inputValue = inputRef.current?.value.trim();
    if (inputValue) {
      const newHistory = [inputValue, ...searchHistory.filter(place => place !== inputValue)].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      handleToggleSearchFieldVisibility();
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      handleGetCityWeather(inputValue);
    }
  };

  useEffect(() => {
    if (searchFieldVisible) {
      inputRef.current?.focus();
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
      hidden={!searchFieldVisible}
      onSubmit={handleSearchSubmit}
      className="city_box--search search-box"
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
          handleGetCityWeather={handleGetCityWeather}
          isInputFocused={isInputFocused}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      </div>
      <button
        type="submit"
        className="search-box--button"
      >
        <CiSearch />
      </button>
    </form>
  );
};
