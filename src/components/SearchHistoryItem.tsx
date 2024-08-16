import './styles.scss';
import { CiCircleRemove } from 'react-icons/ci';

interface SearchHistoryItemProps {
  handleHistoryItem: (place: string) => void;
  handleDeleteHistoryItem: () => void;
  place: string;
}

export const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  handleHistoryItem,
  handleDeleteHistoryItem,
  place,
}) => {
  return (
    <li className="history--item history-item">
      <p
        onClick={() => handleHistoryItem(place)}
        className="history-item--text"
      >
        {place}
      </p>
      <button
        type="button"
        onClick={handleDeleteHistoryItem}
        className="history-item--button"
      >
        <CiCircleRemove className="history-item--icon font-bold" />
      </button>
    </li>
  );
};
