import { ITimeable } from 'slices/appointment/types';
import { isToday, isWeekend } from 'utils/date';
import { Iday } from './types';

export const daysTransform = (dateList?: ITimeable[]) => {
  let days: Iday[] | undefined;
  if (dateList && dateList.length > 0) {
    days = dateList.map((date) => ({
      date: date.date,
      isWeekend: isWeekend(date.date),
      isToday: isToday(date.date),
    }));
  }
  return days;
};
