import { useContext } from 'react';
import { ErrorContext } from '../../store';
import './styles.scss'

export const ErrorDisplay = () => {
  const { error } = useContext(ErrorContext);
  if (!error) return null;
  return <p className="error-message">{error}</p>;
};
