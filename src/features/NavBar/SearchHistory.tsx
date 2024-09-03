import { SearchHistoryItem } from '../../components';
import './styles.scss';
import { toggleSearchFieldVisible } from '../../store/appSlice';
import { useAppDispatch } from '../../store/store';

interface SearchHistoryProps {
  handleGetCityWeather: (place: string) => void;
  isInputFocused: boolean;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({ handleGetCityWeather, isInputFocused, searchHistory, setSearchHistory }) => {
  const dispatch = useAppDispatch();
  const handleToggleSearchFieldVisibility = () => {
    dispatch(toggleSearchFieldVisible());
  };

  const handleDeleteHistoryItem = (historyIndex: number) => () => {
    const newHistory = searchHistory.filter((_, localStorageIndex) => localStorageIndex !== historyIndex);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleHistoryItem = (place: string) => () => {
    handleGetCityWeather(place);
    handleToggleSearchFieldVisibility();
  };

  const historyClass = isInputFocused && searchHistory.length > 0 ? 'search-box--history expanded' : 'search-box--history collapsed';

  return (
    <ul className={historyClass}>
      {searchHistory.map((place, historyIndex) => (
        <SearchHistoryItem
          handleHistoryItem={handleHistoryItem(place)}
          handleDeleteHistoryItem={handleDeleteHistoryItem(historyIndex)}
          key={`${place}-${historyIndex}`}
          place={place}
        />
      ))}
    </ul>
  );
};
