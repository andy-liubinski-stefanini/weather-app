import { add, format } from 'date-fns';

const createOneDay = days => {
  const futureDay = add(new Date(), { days });

  return {
    formattedDate: format(futureDay, 'dd MMMM, yyyy'),
    formattedWeekday: format(futureDay, 'EEEE'),
  };
};

export const createFormattedDates = () => {
  const formattedDates = [];
  for (let i = 0; i < 5; i++) {
    formattedDates.push(createOneDay(i));
  }
  return formattedDates;
};
