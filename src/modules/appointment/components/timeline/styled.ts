import styled from 'styled-components';
import { TTimelineProps } from '.';

export const TimelineStyled = styled.div<TTimelineProps>`
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, time }) => {
    switch (time) {
      case 'morning':
        return theme.blue;
      case 'evening':
        return theme.orange;
      case 'night':
        return theme.purple;
      default:
        return theme.darkPurple;
    }
  }};
  font-weight: ${({ hasEvenTimeline }) => !hasEvenTimeline && '400'};
`;
