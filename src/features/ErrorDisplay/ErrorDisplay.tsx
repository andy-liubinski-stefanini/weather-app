import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './styles.scss';

export const ErrorDisplay: React.FC = () => {
  const error: string | undefined = useSelector(
    (state: RootState) => state.error.error
  );
  if (!error) return null;
  return <p className="error-message">{error}</p>;
};
