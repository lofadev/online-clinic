import Title from 'components/title';
import { EvoBannerStyled } from './styled';

interface IProps {
  title: string;
}

const EvoBanner: React.FC<IProps> = ({ title }) => (
  <EvoBannerStyled>
    <Title.Primary fontSize="SIZE_40" color="white">
      {title}
    </Title.Primary>
  </EvoBannerStyled>
);

export default EvoBanner;
