import { PropsWithChildren } from 'react';
import { ButtonStyled } from './styled';
import { IButtonProps } from '../Button';

interface IProps extends PropsWithChildren, IButtonProps {}

const ButtonPrimaryWhite: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <ButtonStyled type="primary" size="small" rounded="sm" {...props}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonPrimaryWhite;
