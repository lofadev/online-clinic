import { ModalProps } from 'antd';
import { Button } from 'components';
import ButtonPrimaryWhite from 'components/button/button-white/ButtonPrimaryWhite';
import { ModalStyled } from './styled';

interface IModalProps extends ModalProps {}

const Modal: React.FC<IModalProps> = ({ okText, cancelText, ...props }) => (
  <ModalStyled
    footer={[<ButtonPrimaryWhite>{cancelText}</ButtonPrimaryWhite>, <Button type="primary">{okText}</Button>]}
    {...props}
  />
);

export default Modal;
