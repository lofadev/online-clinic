import BookingItem from '../booking-item/BookingItem';
import BookingStatus from '../booking-status/BookingStatus';
import Timeline from '../timeline';
import { useTransformData } from './hook';
import { BookingRowStyled } from './styled';

const Booking = () => {
  const dataTransform = useTransformData();
  return (
    <div>
      {dataTransform.map((item) => (
        <BookingRowStyled key={item.timeline}>
          <BookingItem>
            <Timeline time={item.sessionOfTheDay} hasEvenTimeline={item.hasEvenTimeline}>
              {item.timeline}
            </Timeline>
          </BookingItem>
          {item.values.map((value) => (
            <BookingItem key={value.id}>
              <BookingStatus status={value.appointment_timetable_status} />
            </BookingItem>
          ))}
        </BookingRowStyled>
      ))}
    </div>
  );
};

export default Booking;
