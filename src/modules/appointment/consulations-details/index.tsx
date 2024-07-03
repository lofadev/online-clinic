import { Button, Text, Title } from 'components';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { ButtonWrapperStyled, StartDayStyled } from './styled';

const ConsulationsDetails = () => {
  return (
    <AppointmentArticle title="診療詳細">
      <AppointmentBlock>
        <Title.Primary fontSize="SIZE_20">女性AGA（初診）</Title.Primary>
        <StartDayStyled>
          <Title.Primary fontSize="SIZE_16">診療開始日時</Title.Primary>
          <Text.Primary fontSize="SIZE_16">2024年7月4日 (木) 08:45～08:59開始</Text.Primary>
        </StartDayStyled>

        <ButtonWrapperStyled>
          <Button>日時を変更する</Button>
          <Button type="link">予約をキャンセル</Button>
        </ButtonWrapperStyled>
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default ConsulationsDetails;
