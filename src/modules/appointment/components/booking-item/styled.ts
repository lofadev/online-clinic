import styled from 'styled-components';
import { TProps } from './BookingItem';

export const BookingItemStyled = styled.div<TProps>`
  width: 95px;
  height: 45px;
  border: 1px solid #e1e2eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: ${({ theme, isWeekend, isToday }) => (isToday ? theme.white : isWeekend && theme.textDanger)};
  background-color: ${({ theme, isToday }) => isToday && theme.primary};

  & + & {
    border-left: 0px;
  }
`;
