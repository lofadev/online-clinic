import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import {
  ContentConfirm,
  ContentDate,
  ContentDrColumn,
  ContentDrColumnDetail,
  DrColumnStyle,
  ImageStyle,
  ImageBox,
  InforContent,
  Siekte,
  SubContent,
  TitleDrColumn,
} from './style';

export type PropsDrColumn = {
  id: number;
  picture: string;
  title: string;
  content: string;
  siekte: string;
  date: string;
  confirm: string;
  path: string;
};

const DrColumn: FC<PropsDrColumn> = (props) => {
  const { id, picture, title, content, siekte, date, confirm, path } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <DrColumnStyle onClick={handleClick} key={id}>
      <ImageBox>
        <ImageStyle src={picture} />
      </ImageBox>

      <ContentDrColumn>
        <TitleDrColumn>{title}</TitleDrColumn>

        <ContentDrColumnDetail>{content}</ContentDrColumnDetail>

        <SubContent>
          <InforContent>
            <ContentDate>{date}</ContentDate>

            <ContentConfirm>{confirm}</ContentConfirm>
          </InforContent>

          <Siekte>{siekte}</Siekte>
        </SubContent>
      </ContentDrColumn>
    </DrColumnStyle>
  );
};

export default DrColumn;
