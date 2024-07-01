import ArrownRight from 'assets/svgs/ico_arrow_light_gray.svg';
import { Text } from 'components';
import { ArrowStyled, ImgStyled, WrapperStyled } from './styled';

export type TPeriodProps = {
  icon: string;
  timeline: string;
};

const PeriodItem: React.FC<TPeriodProps> = ({ icon, timeline }) => {
  return (
    <WrapperStyled>
      <ImgStyled src={icon} alt="" />
      <Text.Primary fontSize="SIZE_18" fontWeight="FW_700">
        {timeline} ~
      </Text.Primary>
      <ArrowStyled src={ArrownRight} alt="" />
    </WrapperStyled>
  );
};

export default PeriodItem;
