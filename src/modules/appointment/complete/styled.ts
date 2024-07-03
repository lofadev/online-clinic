import { Button, Text } from 'components';
import styled from 'styled-components';

export const TextStyled = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.4;
`;

export const TextNotiStyled = styled(Text.Primary)`
  &.ant-typography {
    margin: 16px 0 24px;
    padding: 12px;
    color: ${({ theme }) => theme.textDanger};
    font-weight: 700;
    background-color: ${({ theme }) => theme.extraGray};
    border-radius: 4px;
  }
`;

export const ButtonStyled = styled(Button)`
  margin: 0 auto;
`;
