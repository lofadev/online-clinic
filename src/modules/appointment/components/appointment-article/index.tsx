import { PropsWithChildren } from 'react';
import { TitleHeadingStyled, WrapperStyled } from './styled';

interface IProps extends PropsWithChildren {
  title?: string;
}

const AppointmentArticle: React.FC<IProps> = ({ title, children }) => (
  <WrapperStyled>
    {!!title && <TitleHeadingStyled>{title}</TitleHeadingStyled>}
    {children}
  </WrapperStyled>
);

export default AppointmentArticle;
