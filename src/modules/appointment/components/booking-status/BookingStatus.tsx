// import { CloseIcon, FewIcon, OpenIcon, EndIcon } from 'assets';
import { ReactComponent as CloseIcon } from 'assets/svgs/appointment/ico_appointment_close.svg';
import { ReactComponent as EndIcon } from 'assets/svgs/appointment/ico_appointment_end.svg';
import { ReactComponent as FewIcon } from 'assets/svgs/appointment/ico_appointment_few.svg';
import { ReactComponent as OpenIcon } from 'assets/svgs/appointment/ico_appointment_open.svg';
import { TBookingStatus } from 'models/appointment.model';
import { useMemo } from 'react';
import { BookingStatusStyled } from './styled';

export interface IProps {
  status: TBookingStatus;
}

const BookingStatus: React.FC<IProps> = ({ status }) => {
  const statusIcon = useMemo(() => {
    if (status === 'NONE') return <EndIcon />;
    if (status === 'CLOSE') return <CloseIcon />;
    if (status === 'AVAILABLE') return <OpenIcon />;
    return <FewIcon />;
  }, [status]);

  return <BookingStatusStyled status={status}>{statusIcon}</BookingStatusStyled>;
};

export default BookingStatus;
