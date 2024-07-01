import { PropsWithChildren } from 'react';
import { WrapperStyled } from './styled';

const AppointmentBlock = ({ children }: PropsWithChildren) => <WrapperStyled>{children}</WrapperStyled>;

export default AppointmentBlock;
