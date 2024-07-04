import { FC, ReactNode } from 'react';

import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <CommitmentStyle className={point % 2 ? 'left' : 'right'} key={id}>
      <IconPoint>
        <ImageStyle src={picture} alt="picture" />
      </IconPoint>

      <MainCommitmemt>
        <Point>Point {point}</Point>

        <TitleCommitment>{t(title)}</TitleCommitment>

        {content.length &&
          content.map((contentDetail) => (
            <ContentCommitment key={contentDetail.id}>{t(contentDetail.text)}</ContentCommitment>
          ))}

        {children}
      </MainCommitmemt>
    </CommitmentStyle>
  );
};

export default Commitment;
