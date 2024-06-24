import { Typography } from 'antd';
import { ITextProps } from 'models';
import styled from 'styled-components';
import { FONT_FAMILY, FONT_STYLE, FONT_WEIGHT, SIZE } from 'styles/styleConstants';

const { Title } = Typography;

export const TitleStyled = styled(Title)<ITextProps>`
  &.ant-typography {
    display: inline-block;
    margin: 0;
    color: ${({ theme, color }) => theme[color || 'textPrimary']};
    font-size: ${({ fontSize }) => SIZE[fontSize || 'SIZE_32']};
    font-weight: ${({ fontWeight }) => FONT_WEIGHT[fontWeight || 'FW_700']};
    font-family: ${({ fontFamily }) => FONT_FAMILY[fontFamily || 'NOTO_SANS']};
    font-style: ${({ fontStyle }) => FONT_STYLE[fontStyle || 'NORMAL']};
  }
`;
