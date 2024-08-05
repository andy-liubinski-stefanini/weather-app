import { useState, useEffect } from 'react';
import { dateUtil } from '../index';

export const useDates = () => {
  const [datesArray, setDatesArray] = useState([]);

  useEffect(() => {
    const dates = dateUtil();
    setDatesArray(dates);
  }, []);

  return { datesArray };
};
