import { useState, useEffect } from 'react';
import { dateUtil } from '../index';

export const useDates = () => {
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {
    const dates = dateUtil();
    setFormattedDates(dates);
  }, []);

  return { formattedDates };
};
