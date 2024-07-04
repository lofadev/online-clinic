import { useEffect } from 'react';
import { useAppointment } from 'slices/appointment';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import ConsulationItem from '../components/consulation-item';
import { WrapperStyled } from './styled';

const ConsulationsDone = () => {
  const { fetchAppointment, lists } = useAppointment();

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <AppointmentArticle title="診療済み">
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
