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

  const handleDeleteHistoryItem = (i: number) => () => {
    const newHistory = searchHistory.filter((_, ii) => ii !== i);
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
      {searchHistory.map((place, i) => (
        <SearchHistoryItem
          handleHistoryItem={handleHistoryItem}
          handleDeleteHistoryItem={handleDeleteHistoryItem(i)}
          key={`${place}-${i}`}
          place={place}
        />
      ))}
    </ul>
  );
};
