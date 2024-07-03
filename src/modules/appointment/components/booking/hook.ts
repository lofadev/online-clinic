import { TTime } from 'models/time.model';
import { ITimeable, TAppointmentItem } from 'slices/appointment/types';

type TDataTransform = {
  timeline: {
    time: string;
    hour: number;
    hasEvenTimeline: boolean;
    sessionOfTheDay: TTime;
  };
  values: TAppointmentItem[];
};

export const useTransformData = (data?: ITimeable[]) => {
  let dataTransform: TDataTransform[] | undefined;
  if (data && data.length > 0) {
    const timelines = data[0].appointments.map((item) => item.time.substring(0, 5));
    dataTransform = timelines.map((time, index1) => {
      const values = data.map((date, index2) => {
        const currentAppointment = date.appointments[index1];

        const timeArr = currentAppointment.time.split(':');
        const timeStart: string = `${timeArr[0]}:${timeArr[1]}`;
        const timeEnd: string = `${timeArr[0]}:${Number(timeArr[1]) + 14}`;
        return {
          id: `${index1}${index2}`,
          date: date.date.toString(),
          timeStart,
          timeEnd,
          ...currentAppointment,
        };
      });

      let sessionOfTheDay: TTime;
      const timelineArr: string[] = time.split(':');
      const hasEvenTimeline: boolean = timelineArr[1] === '00';
      const hour: number = Number(timelineArr[0]);

      if (hour >= 0 && hour < 7) sessionOfTheDay = 'midnight';
      else if (hour >= 7 && hour < 13) sessionOfTheDay = 'morning';
      else if (hour >= 13 && hour < 19) sessionOfTheDay = 'evening';
      else sessionOfTheDay = 'night';

      return { timeline: { time, hour, hasEvenTimeline, sessionOfTheDay }, values };
    });
  }
  return dataTransform;
};
