import { ReactComponent as ArrowRightIcon } from 'assets/svgs/arrowRight.svg';
import { IButtonProps } from 'components/button/Button';
import { ArrowButtonStyled } from './styled';

const ArrowButton: React.FC<IButtonProps> = (props) => <ArrowButtonStyled icon={<ArrowRightIcon />} {...props} />;

export default ArrowButton;
