import { add, format } from 'date-fns';

export interface FormattedDate {
  formattedDate: string;
  formattedWeekday: string;
}

const createOneDay = (days: number): FormattedDate => {
  const futureDay = add(new Date(), { days });
  let formattedWeekday: string;
  if (days === 0) {
    formattedWeekday = 'Today';
  } else {
    formattedWeekday = format(futureDay, 'EEE');
  }

  return {
    formattedDate: format(futureDay, 'dd MMMM, yyyy'),
    formattedWeekday,
  };
};

export const createFormattedDates = (): FormattedDate[] => {
  const formattedDates: FormattedDate[] = [];
  for (let i = 0; i < 5; i++) {
    formattedDates.push(createOneDay(i));
  }
  return formattedDates;
};
