import { useState, useEffect } from 'react';
import generateFutureDates from '../utils/dateUtil';

export const useDates = () => {
  const [datesArray, setDatesArray] = useState([]);

  useEffect(() => {
    const dates = generateFutureDates();
    setDatesArray(dates);
  }, []);

  return { datesArray };
};
