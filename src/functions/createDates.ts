import { createFormattedDates } from '../utils';
import { setFormattedDates } from '../store/appSlice';
import { useAppDispatch } from '../store/store';

export const useDates = () => {
  const dates = createFormattedDates();
  const dispatch = useAppDispatch();
  dispatch(setFormattedDates(dates));
};
