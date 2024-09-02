import { createFormattedDates } from '../utils';
import { useDispatch } from 'react-redux';
import { setFormattedDates } from '../store/appSlice';

export const useDates = () => {
  const dates = createFormattedDates();
  const dispatch = useDispatch();
  dispatch(setFormattedDates(dates));
};
