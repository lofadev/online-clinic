import { CloseIcon, EndIcon, FewIcon, OpenIcon } from 'assets';
import { TBookingStatus } from 'models/appointment.model';
import { useMemo } from 'react';
import { BookingStatusStyled } from './styled';

export interface IProps {
  status: TBookingStatus;
}

const BookingStatus: React.FC<IProps> = ({ status }) => {
  const statusIcon = useMemo(() => {
    if (status === 'none') return <EndIcon />;
    if (status === 'close') return <CloseIcon />;
    if (status === 'open') return <OpenIcon />;
    return <FewIcon />;
  }, [status]);

  return <BookingStatusStyled status={status}>{statusIcon}</BookingStatusStyled>;
};

export default BookingStatus;
