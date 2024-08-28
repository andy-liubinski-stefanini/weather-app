import { useContext } from 'react';
import { AppContext } from '../../store';
import { SearchHistoryItem } from '../../components';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleSearchFieldVisible } from '../../store/appSlice';

interface SearchHistoryProps {
  isInputFocused: boolean;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  isInputFocused,
  searchHistory,
  setSearchHistory,
}) => {
  const { setSelectedLocation } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleToggleSearchFieldVisibility = () => {
    dispatch(toggleSearchFieldVisible());
  };

  // const { setSearchFieldVisible, setSelectedLocation } = useContext(AppContext);

  const handleDeleteHistoryItem = (historyIndex: number) => () => {
    const newHistory = searchHistory.filter(
      (_, localStorageIndex) => localStorageIndex !== historyIndex
    );
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleHistoryItem = (place: string) => {
    setSelectedLocation({ locationName: place });
    handleToggleSearchFieldVisibility();
    // setSearchFieldVisible(prevState => !prevState);
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
