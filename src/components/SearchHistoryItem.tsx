/* eslint-disable react/prop-types */
import './styles.scss';

import { CiCircleRemove } from 'react-icons/ci';

export const SearchHistoryItem = ({
  handleHistoryItem,
  handleDeleteHistoryItem,
  place,
  i,
}) => {
  return (
    <li className="history--item history-item">
      <p onClick={() => handleHistoryItem(place)} className="history-item--text">
        {place}
      </p>
      <button
        type="button"
        onClick={() => handleDeleteHistoryItem(i)}
        className="history-item--button"
      >
        <CiCircleRemove
          className="history-item--icon font-bold" />
      </button>
    </li>
  );
};

