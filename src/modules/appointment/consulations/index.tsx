import { IconConsulationDetail } from 'assets';
import { Text, Title } from 'components';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { ButtonStyled, TextBlockStyled, WrapperStyled } from './styled';

const Consulations: React.FC = () => {
  return (
    <AppointmentArticle title="診療待ち">
      <AppointmentBlock>
        <WrapperStyled>
          <TextBlockStyled>
            <Text.Primary fontSize="SIZE_16">2024年7月4日 (木) 08:45～08:59開始</Text.Primary>
            <Title.Primary fontSize="SIZE_20">女性AGA（初診）</Title.Primary>
          </TextBlockStyled>
          <ButtonStyled type="text">
            <IconConsulationDetail />
          </ButtonStyled>
        </WrapperStyled>
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default Consulations;
