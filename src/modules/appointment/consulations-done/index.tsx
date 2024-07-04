import { translations } from 'locales/translations';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppointment } from 'slices/appointment';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import ConsulationItem from '../components/consulation-item';
import { WrapperStyled } from './styled';

const ConsulationsDone = () => {
  const { fetchAppointment, lists } = useAppointment();
  const { t } = useTranslation();
  const { appointment } = translations;

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <AppointmentArticle title={t(appointment.consultations.completed)}>
      <AppointmentBlock>
        <WrapperStyled>
          {[...lists].reverse().map((item) => (
            <ConsulationItem key={item.id} {...item} />
          ))}
        </WrapperStyled>
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default ConsulationsDone;
