import { useSelector } from 'react-redux';
import './styles.scss';
import { selectError } from '../../store/errorSlice';

export const ErrorDisplay: React.FC = () => {
  const error = useSelector(selectError);
  if (!error) return null;
  return <p className="error-message">{error}</p>;
};
