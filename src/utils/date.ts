export const formatDateToJapanese = (dateStr: string) => {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions | undefined = { day: 'numeric', weekday: 'short' };
  const formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(dateObj);

  const [day] = formattedDate.split(' ');
  return day;
};
