import { PropsWithChildren } from 'react';
import { WrapperStyled } from './styled';

interface IProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const AppointmentBlock = ({ children, ...props }: IProps) => <WrapperStyled {...props}>{children}</WrapperStyled>;

export default AppointmentBlock;
