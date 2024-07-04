import { ReactComponent as PicAppointment } from 'assets/svgs/appointment/pic_appointment_image.svg';
import { Title } from 'components';
import { translations } from 'locales/translations';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppointment } from 'slices/appointment';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import LoadingAppointment from '../components/loading';
import ConsulationItemEdit from './components/item';
import { EmptyBookingStyled } from './styled';

const Consulations: React.FC = () => {
  const { lists, fetchAppointment, loading } = useAppointment();
  const { t } = useTranslation();
  const { appointment } = translations;

  useEffect(() => {
    fetchAppointment();
  }, []);

  const listBooking = useMemo(
    () => lists.filter((list) => list.status === 'ACCEPTED' || list.status === 'NEW'),
    [lists],
  );

  return (
    <AppointmentArticle title={t(appointment.consultations.title)}>
      <AppointmentBlock>
        {loading ? (
          <LoadingAppointment />
        ) : !listBooking.length ? (
          <EmptyBookingStyled>
            <PicAppointment />
            <Title.Primary level={2} fontSize="SIZE_24">
              {t(appointment.consultations.no_reservations)}
            </Title.Primary>
            <Title.Primary level={3} fontSize="SIZE_16">
              {t(appointment.consultations.reminder)}
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
