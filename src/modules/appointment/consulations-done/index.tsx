import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import ConsulationItem from '../components/consulation-item';

const ConsulationsDone = () => {
  return (
    <AppointmentArticle title="診療済み">
      <AppointmentBlock>
        <ConsulationItem />
        <ConsulationItem />
        <ConsulationItem />
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default ConsulationsDone;
