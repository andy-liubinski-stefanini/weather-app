import { useState, useEffect } from 'react';
import { createFormattedDates } from '../utils';

export const useDates = () => {
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {
    const dates = createFormattedDates();
    setFormattedDates(dates);
  }, []);

  return { formattedDates };
};
