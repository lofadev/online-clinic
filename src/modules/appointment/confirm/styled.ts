import { Button, Title } from 'components';
import styled from 'styled-components';

export const BlockContentStyled = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
`;

export const TitleStyled = styled(Title.Primary)`
  &.ant-typography {
    display: block;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 372px;
  margin: 0 auto;
  margin-top: 48px;
`;

export const ButtonLinkStyled = styled(Button)`
  margin: 0 auto;
  margin-top: 20px;
`;
