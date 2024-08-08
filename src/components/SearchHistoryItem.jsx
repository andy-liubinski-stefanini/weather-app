/* eslint-disable react/prop-types */
import { CiCircleRemove } from 'react-icons/ci';

const SearchHistoryItem = ({
  handleHistoryItem,
  handleDeleteHistoryItem,
  place,
  i,
}) => {
  return (
    <li className="history--item cursor-pointer flex flex-row justify-between opacity-[inherit] hover:bg-slate-200">
      <p onClick={() => handleHistoryItem(place)} className="text-black">
        {place}
      </p>
      <button
        type="button"
        onClick={() => handleDeleteHistoryItem(i)}
        className="size-6 place-items-center flex"
      >
        <CiCircleRemove className="font-bold text-red-800 size-6 hover:bg-red-100" />
      </button>
    </li>
  );
};

export default SearchHistoryItem;
