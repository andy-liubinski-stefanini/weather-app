import { SearchHistoryItem } from '../../components';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { toggleSearchFieldVisible } from '../../store/appSlice';

interface SearchHistoryProps {
  handleGetCityWeather: (place: string) => void;
  isInputFocused: boolean;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  handleGetCityWeather,
  isInputFocused,
  searchHistory,
  setSearchHistory,
}) => {
  const dispatch = useDispatch();
  const handleToggleSearchFieldVisibility = () => {
    dispatch(toggleSearchFieldVisible());
  };

  const handleDeleteHistoryItem = (historyIndex: number) => () => {
    const newHistory = searchHistory.filter(
      (_, localStorageIndex) => localStorageIndex !== historyIndex
    );
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleHistoryItem = (place: string) => {
    handleGetCityWeather(place);
    handleToggleSearchFieldVisibility();
  };

  const historyClass =
    isInputFocused && searchHistory.length > 0
      ? 'search-box--history expanded'
      : 'search-box--history collapsed';

  return (
    <ul className={historyClass}>
      {searchHistory.map((place, historyIndex) => (
        <SearchHistoryItem
          handleHistoryItem={handleHistoryItem}
          handleDeleteHistoryItem={handleDeleteHistoryItem(historyIndex)}
          key={`${place}-${historyIndex}`}
          place={place}
        />
      ))}
    </ul>
  );
};
