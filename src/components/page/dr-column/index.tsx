import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
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
} from './styled';

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
  const { t } = useTranslation();
  const handleClick = () => {
    history.push(path);
  };

  return (
    <DrColumnStyle onClick={handleClick} key={id}>
      <ImageBox>
        <ImageStyle src={picture} />
      </ImageBox>

      <ContentDrColumn>
        <TitleDrColumn>{t(title)}</TitleDrColumn>

        <ContentDrColumnDetail>{t(content)}</ContentDrColumnDetail>

        <SubContent>
          <InforContent>
            <ContentDate>{date}</ContentDate>

            <ContentConfirm>{confirm}</ContentConfirm>
          </InforContent>

          <Siekte>{t(siekte)}</Siekte>
        </SubContent>
      </ContentDrColumn>
    </DrColumnStyle>
  );
};

export default DrColumn;
