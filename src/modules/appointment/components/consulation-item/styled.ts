import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 16px 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 1px dashed ${({ theme }) => theme.lightGray};
  }

  h4.ant-typography {
    margin-top: 4px;
  }
`;
