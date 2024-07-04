import { Title } from 'components';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  background-color: ${({ theme }) => theme.lightBlue};
  padding: 50px 0;
`;

export const TitleHeadingStyled = styled(Title.Primary)`
  &.ant-typography {
    display: block;
    margin-bottom: 24px;
    text-align: center;
  }
`;
