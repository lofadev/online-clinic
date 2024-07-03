import styled from 'styled-components';

export const StartDayStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px dashed ${({ theme }) => theme.lightGray};
`;

export const ButtonWrapperStyled = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
