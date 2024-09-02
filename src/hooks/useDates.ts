import { createFormattedDates } from '../utils';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../store';
import { setFormattedDates } from '../store/appSlice';

// interface FormattedDate {
//   formattedDate: string;
//   formattedWeekday: string;
// }

export const useDates = () => {
  const dates = createFormattedDates();
  // const [formattedDates, setFormattedDates] = useState<FormattedDate[]>([]);

  const dispatch = useDispatch();
  dispatch(setFormattedDates(dates));

  //  return { formattedDates };
};
