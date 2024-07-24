import { add, format } from 'date-fns';

const createOneDay = days => {
  const futureDay = add(new Date(), { days });

  return {
    formattedDate: format(futureDay, 'dd MMMM, yyyy'),
    formattedWeekday: format(futureDay, 'EEEE'),
  };
};

const useDate = () => {
  const arrayOfDays = [];
  for (let i = 0; i < 5; i++) {
    arrayOfDays.push(createOneDay(i));
  }
  return arrayOfDays;
};

export default useDate;
