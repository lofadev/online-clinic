import { Title } from 'components';
import AppointmentBlock from './components/appointment-block';
import BookingTop from './components/booking-top/BookingTop';
import Booking from './components/booking';

const Appointment = () => {
  return (
    <div style={{ backgroundColor: '#ecfaff' }}>
      <AppointmentBlock>
        <Title.Primary fontSize="SIZE_16">2.診療開始日時を選択</Title.Primary>
        <BookingTop />
        <Booking />
      </AppointmentBlock>
    </div>
  );
};

export default Appointment;
