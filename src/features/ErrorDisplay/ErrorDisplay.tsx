import './styles.scss';
import { selectError } from '../../store/errorSlice';
import { useAppSelector } from '../../store/store';

export const ErrorDisplay: React.FC = () => {
  const error = useAppSelector(selectError);
  if (!error) return null;
  return <p className="error-message">{error}</p>;
};
