import { Text, Title } from 'components';
import { IAppointmentItem } from 'slices/appointment/types';
import { formatDateToJapanese, timeToHourMinutes } from 'utils/date';
import { WrapperStyled } from './styled';

interface IProps extends IAppointmentItem {}

const ConsulationItem: React.FC<IProps> = ({ booking_date, time, service, status }) => {
  return (
    <WrapperStyled>
      <Text.Primary>
        {formatDateToJapanese(booking_date, 'Y年M月D日 (ddd)')} {timeToHourMinutes(time.start_time)}
      </Text.Primary>
      <Title.Primary level={4} fontSize="SIZE_16">
        {service.name}
      </Title.Primary>
      <Title.Primary level={4} fontSize="SIZE_16">
        {status}
      </Title.Primary>
    </WrapperStyled>
  );
};

export default ConsulationItem;
