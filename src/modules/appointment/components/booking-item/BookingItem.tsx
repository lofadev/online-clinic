import { ReactNode } from 'react';
import { BookingItemStyled } from './styled';

export type TProps = {
  children?: ReactNode | string;
  isWeekend?: boolean;
  isToday?: boolean;
};

const BookingItem: React.FC<TProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <BookingItemStyled {...props}>{children}</BookingItemStyled>
);

export default BookingItem;
