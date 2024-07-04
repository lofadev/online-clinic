import { Text, Title } from 'components';
import { WrapperStyled } from './styled';

const ConsulationItem = () => {
  return (
    <WrapperStyled>
      <Text.Primary>2024年7月7日 (日) 08:00</Text.Primary>
      <Title.Primary level={4} fontSize="SIZE_16">
        男性AGA（再診）
      </Title.Primary>
      <Title.Primary level={4} fontSize="SIZE_16">
        キャンセル済み
      </Title.Primary>
    </WrapperStyled>
  );
};

export default ConsulationItem;
