import { add, format } from 'date-fns';

export interface FormattedDate {
  formattedDate: string;
  formattedWeekday: string;
}

const createOneDay = (days: number): FormattedDate => {
  const futureDay = add(new Date(), { days });

  return {
    formattedDate: format(futureDay, 'dd MMMM, yyyy'),
    formattedWeekday: format(futureDay, 'EEEE'),
  };
};

export const createFormattedDates = (): FormattedDate[] => {
  const formattedDates: FormattedDate[] = [];
  for (let i = 0; i < 5; i++) {
    formattedDates.push(createOneDay(i));
  }
  return formattedDates;
};
