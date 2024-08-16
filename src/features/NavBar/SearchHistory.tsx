import { useContext } from 'react';
import { AppContext } from '../../store';
import { SearchHistoryItem } from '../../components';
import './styles.scss';

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
  const { setSearchFieldVisible, setSelectedLocation } = useContext(AppContext);

  const handleDeleteHistoryItem = (historyIndex: number) => () => {
    const newHistory = searchHistory.filter(
      (_, localStorageIndex) => localStorageIndex !== historyIndex
    );
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleHistoryItem = (place: string) => {
    setSelectedLocation({ locationName: place });
    setSearchFieldVisible(prevState => !prevState);
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
