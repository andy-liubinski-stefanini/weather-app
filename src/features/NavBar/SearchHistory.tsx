/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../../store';
import { SearchHistoryItem } from '../../components';
import './styles.scss'; // Import the SCSS file

export const SearchHistory = ({
  isInputFocused,
  searchHistory,
  setSearchHistory,
}) => {
  const { setSearchFieldVisible, setSelectedLocation } = useContext(AppContext);

  const handleDeleteHistoryItem = i => {
    const newHistory = searchHistory.filter((place, ii) => ii !== i);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleHistoryItem = place => {
    setSelectedLocation({ locationName: place });
    setSearchFieldVisible(prevState => !prevState);
  };

  const historyClass = isInputFocused && searchHistory.length > 0
    ? 'search-box--history expanded'
    : 'search-box--history collapsed';

  return (
    <ul className={historyClass}>
      {searchHistory.map((place, i) => (
        <SearchHistoryItem
          handleHistoryItem={handleHistoryItem}
          handleDeleteHistoryItem={handleDeleteHistoryItem}
          key={`${place}-${i}`}
          place={place}
          i={i}
        />
      ))}
    </ul>
  );
};
