import { FC, ReactNode } from 'react';

import {
  CommitmentStyle,
  ContentCommitment,
  IconPoint,
  ImageStyle,
  MainCommitmemt,
  Point,
  TitleCommitment,
} from './styled';

export type PropsCommitment = {
  id: number;
  picture: string;
  point: number;
  title: string;
  content: ContentCommitment[];
  children?: ReactNode;
};
type ContentCommitment = {
  id: number;
  text: string;
};
const Commitment: FC<PropsCommitment> = (props) => {
  const { id, picture, point, title, content, children } = props;
  return (
    <CommitmentStyle className={point % 2 ? 'left' : 'right'} key={id}>
      <IconPoint>
        <ImageStyle src={picture} alt="picture" />
      </IconPoint>

      <MainCommitmemt>
        <Point>Point {point}</Point>

        <TitleCommitment>{title}</TitleCommitment>

        {content.length &&
          content.map((contentDetail) => (
            <ContentCommitment key={contentDetail.id}>{contentDetail.text}</ContentCommitment>
          ))}

        {children}
      </MainCommitmemt>
    </CommitmentStyle>
  );
};

export default Commitment;
