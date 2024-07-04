import moment from 'moment';

export const formatDateToJapanese = (dateStr: string, type: string = 'D日 (ddd)') => {
  moment.locale('ja');
  moment.updateLocale('ja', {
    weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
  });
  const date = moment(dateStr);
  return date.format(type);
};

export const formatDateToDayAndMonth = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
};

export const formatDateToDateString = (date: Date, type: string = 'YYYY-MM-DD') => {
  const currentDate = moment(date);
  return currentDate.format(type);
};

export const getDate = (additionDays: number = 0, date: string = '', type: string = 'YYYY-MM-DD') => {
  const resultDate = moment(date || new Date()).add(additionDays, 'days');
  return resultDate.format(type);
};

export const isWeekend = (dateStr: string) => {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export const isToday = (dateStr: string) => {
  const todayStr = new Date().toISOString().split('T')[0];
  return dateStr === todayStr;
};

export const timeToHourMinutes = (time: string) => {
  const timeArr = time.split(':');
  return `${timeArr[0]}:${timeArr[1]}`;
};
