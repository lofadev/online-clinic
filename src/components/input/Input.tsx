import { InputProps } from 'antd';

import { InputStyled, LabelStyled } from './styled';

interface IProps extends InputProps {
  label?: string;
}

const Input: React.FC<IProps> = ({ label, name, ...props }) => (
  <>
    {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
    <InputStyled id={name} name={name} {...props} />
  </>
);

export default Input;
