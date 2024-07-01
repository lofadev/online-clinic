import { TTime } from 'models/time.model';
import dataJson from './fakeResponse.json';

export const useTransformData = () => {
  const timelines = Object.keys(Object.values(dataJson.data)[0]);
  const dates = Object.values(dataJson.data).filter((item, index) => index <= 6);
  const dataTransform = timelines.map((time) => {
    const values = dates.map((date, index) => ({ id: index, ...date[time] }));

    let sessionOfTheDay: TTime;
    const timelineArr: string[] = time.split(':');
    const hasEvenTimeline: boolean = timelineArr[1] === '00';
    const hour: number = Number(timelineArr[0]);

    if (hour >= 0 && hour < 7) sessionOfTheDay = 'midnight';
    else if (hour >= 7 && hour < 13) sessionOfTheDay = 'morning';
    else if (hour >= 13 && hour < 19) sessionOfTheDay = 'evening';
    else sessionOfTheDay = 'night';

    return { timeline: time, values, hasEvenTimeline, sessionOfTheDay };
  });
  return dataTransform;
};
