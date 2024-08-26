import { useState, useEffect } from 'react';
import { createFormattedDates } from '../utils';

interface FormattedDate {
  formattedDate: string;
  formattedWeekday: string;
}

export const useDates = (): { formattedDates: FormattedDate[] } => {
  const [formattedDates, setFormattedDates] = useState<FormattedDate[]>([]);

  useEffect(() => {
    const dates = createFormattedDates();
    setFormattedDates(dates);
  }, []);

  return { formattedDates };
};
