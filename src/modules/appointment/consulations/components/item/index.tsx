import { ReactComponent as IconConsulationDetail } from 'assets/svgs/appointment/ico_consultation_detail.svg';
import { Button, Text, Title } from 'components';
import history from 'configs/history';
import { IAppointmentItem } from 'slices/appointment/types';
import { formatDateToJapanese, timeToHourMinutes } from 'utils/date';
import { ButtonStyled, ButtonWrapperStyled, TextBlockStyled, TextDangerStyled, WrapperStyled } from './styled';

interface IProps {
  item: IAppointmentItem;
}

const ConsulationItemEdit: React.FC<IProps> = ({ item }) => {
  const handleNavigateDetails = (id: number) => {
    history.push(`/consultations/${id}`);
  };

  return (
    <WrapperStyled>
      <TextBlockStyled>
        <Text.Primary fontSize="SIZE_16">
          {formatDateToJapanese(item?.booking_date, 'Y年M月D日 (ddd)')} {timeToHourMinutes(item.time.start_time)}～
          {timeToHourMinutes(item.time.end_time)}
          開始
        </Text.Primary>
        <Title.Primary fontSize="SIZE_20">{item.service.name}</Title.Primary>
        <TextDangerStyled>問診票が未入力です</TextDangerStyled>
        <TextDangerStyled>診療開始日時までに必ずご入力ください</TextDangerStyled>
      </TextBlockStyled>
      <ButtonWrapperStyled>
        <Button className="btn-faq" type="primary">
          問診票入力
        </Button>
        <Button className="btn-faq" type="primary">
          診療開始
        </Button>
        <ButtonStyled type="text" onClick={() => handleNavigateDetails(item.id)}>
          <IconConsulationDetail />
        </ButtonStyled>
      </ButtonWrapperStyled>
    </WrapperStyled>
  );
};

export default ConsulationItemEdit;
