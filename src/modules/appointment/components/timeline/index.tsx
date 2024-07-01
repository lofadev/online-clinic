import { TTime } from 'models/time.model';
import { PropsWithChildren } from 'react';
import { TimelineStyled } from './styled';

export type TTimelineProps = PropsWithChildren & {
  time: TTime;
  hasEvenTimeline: boolean;
};

const Timeline: React.FC<TTimelineProps> = ({ children, ...props }) => (
  <TimelineStyled {...props}>{children}</TimelineStyled>
);

export default Timeline;
