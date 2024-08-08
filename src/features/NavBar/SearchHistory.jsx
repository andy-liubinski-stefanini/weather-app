/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../../store';
import { SearchHistoryItem } from '../../components';

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

  return (
    <ul
      className={`absolute search-box--history history w-full transition-all duration-200 ${
        isInputFocused && searchHistory.length > 0
          ? 'h-auto opacity-100'
          : 'h-0 opacity-0'
      } bg-slate-50 border rounded p-2 z-50`}
    >
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
