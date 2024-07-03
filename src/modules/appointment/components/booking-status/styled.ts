import { TBookingStatus } from 'models/appointment.model';
import styled from 'styled-components';

export const BookingStatusStyled = styled.div<{ status: TBookingStatus }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status, theme }) => (status === 'CLOSE' || status === 'NONE' ? '#f7f9fc' : theme.white)};

  &:hover {
    cursor: ${({ status }) => (status === 'AVAILABLE' || status === 'ALERT') && 'pointer'};
    background-color: ${({ status }) => (status === 'AVAILABLE' || status === 'ALERT') && '#ecfaff'};
  }
`;
