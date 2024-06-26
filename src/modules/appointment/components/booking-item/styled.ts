import styled from 'styled-components';

export const BookingItemStyled = styled.div`
  width: 95px;
  height: 45px;
  border: 1px solid #e1e2eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  & + & {
    border-left: 0px;
  }
`;
