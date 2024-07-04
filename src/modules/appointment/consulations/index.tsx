import { ReactComponent as PicAppointment } from 'assets/svgs/appointment/pic_appointment_image.svg';
import { Title } from 'components';
import { useEffect, useMemo } from 'react';
import { useAppointment } from 'slices/appointment';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import LoadingAppointment from '../components/loading';
import ConsulationItemEdit from './components/item';
import { EmptyBookingStyled } from './styled';

const Consulations: React.FC = () => {
  const { lists, fetchAppointment, loading } = useAppointment();

  useEffect(() => {
    fetchAppointment();
  }, []);

  const listBooking = useMemo(
    () => lists.filter((list) => list.status === 'ACCEPTED' || list.status === 'NEW'),
    [lists],
  );

  return (
    <AppointmentArticle title="診療待ち">
      <AppointmentBlock>
        {loading ? (
          <LoadingAppointment />
        ) : !listBooking.length ? (
          <EmptyBookingStyled>
            <PicAppointment />
            <Title.Primary level={2} fontSize="SIZE_24">
              ご予約はありません
            </Title.Primary>
            <Title.Primary level={3} fontSize="SIZE_16">
              「診療予約」ボタンよりご予約をお願いいたします。
            </Title.Primary>
          </EmptyBookingStyled>
        ) : (
          listBooking.map((item) => <ConsulationItemEdit key={item.id} item={item} />)
        )}
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default Consulations;
