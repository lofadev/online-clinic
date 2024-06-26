import { TBookingStatus } from 'models/appointment.model';
import styled from 'styled-components';

export const BookingStatusStyled = styled.div<{ status: TBookingStatus }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status, theme }) => (status === 'close' || status === 'none' ? '#f7f9fc' : theme.white)};

  &:hover {
    cursor: ${({ status }) => (status === 'open' || status === 'alert') && 'pointer'};
    background-color: ${({ status }) => (status === 'open' || status === 'alert') && '#ecfaff'};
  }
`;
