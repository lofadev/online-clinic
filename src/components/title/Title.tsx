import { TitleProps } from 'antd/es/typography/Title';
import { ITextProps, THEME_TYPE } from 'models';
import styled from 'styled-components';
import { TitleStyled } from './styled';

type TTtitleProps = TitleProps & ITextProps & {};

const BaseTitle: React.FC<TTtitleProps> = (props) => <TitleStyled {...props} />;

const BackgroundTitle = styled(BaseTitle)<TTtitleProps & { background: THEME_TYPE }>`
  &.ant-typography {
    color: ${({ theme, color }) => theme[color || 'white']};
  }
  padding: 0 20px;
  background-color: ${({ theme, background }) => theme[background]};
`;

export { BackgroundTitle, BaseTitle };
