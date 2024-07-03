import { formatDateToJapanese } from 'utils/date';

export const HomePage: React.FC = () => {
  return (
    <div>
      <div>{formatDateToJapanese('2024-07-02')}</div>
      <div>{formatDateToJapanese('2024-07-03')}</div>
      <div>{formatDateToJapanese('2024-07-04')}</div>
      <div>{formatDateToJapanese('2024-07-05')}</div>
      <div>{formatDateToJapanese('2024-07-06')}</div>
      <div>{formatDateToJapanese('2024-07-07')}</div>
      <div>{formatDateToJapanese('2024-07-08')}</div>
    </div>
  );
};
