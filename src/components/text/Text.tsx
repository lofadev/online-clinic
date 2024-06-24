import { TextProps } from 'antd/es/typography/Text';
import { ITextProps } from 'models';
import { TextStyled } from './styled';

type TTextProps = TextProps & ITextProps & {};

const BaseText: React.FC<TTextProps> = (props) => <TextStyled {...props} />;

export { BaseText };
