import { ReactNode } from 'react';
import { BookingItemStyled } from './styled';

type TProps = {
  children?: ReactNode | string;
};

const BookingItem: React.FC<TProps> = ({ children }) => {
  return <BookingItemStyled>{children}</BookingItemStyled>;
};

export default BookingItem;
