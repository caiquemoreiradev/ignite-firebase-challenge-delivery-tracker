import { addDays } from 'date-fns';

function getPlatformDate(date: Date): Date {

  return addDays(date, 1);
}

export { getPlatformDate };