import { useContext } from 'react';
import { ErrorContext } from '../../index';

export const ErrorDisplay = () => {
  const { error } = useContext(ErrorContext);
  if (!error) return null;
  return <p className="text-red-500 bg-slate-50">{error}</p>;
};
