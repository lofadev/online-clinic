import { ButtonProps } from 'antd';
import { ButtonType as BaseButtonType } from 'antd/lib/button';
import { ButtonStyled } from './styled';

type ButtonType = Exclude<BaseButtonType, 'dashed'>;
export type ColorType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type RadiusType = 'sm' | 'md' | 'lg';

export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: ButtonType;
  color?: ColorType;
  rounded?: RadiusType;
}

const Button: React.FC<IButtonProps> = (props) => <ButtonStyled {...props} />;

export default Button;
