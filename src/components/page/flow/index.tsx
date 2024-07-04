import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Content, ContentFlow, FlowItemStyle, Count, ImageShow, ImageStyle, TitleFlow } from './styled';

export type PropsFlow = {
  id: number;
  picture: string;
  count: number;
  title: string;
  content: string;
  gender: 'male' | 'female' | 'general';
};

const FlowItem: FC<PropsFlow> = (props) => {
  const { id, picture, count, title, content, gender } = props;

  const { t } = useTranslation();
  return (
    <FlowItemStyle className={gender} key={id}>
      <ImageShow className="imageShow">
        <ImageStyle src={picture} alt="picture" />

        <Count className="id-flow">{count}</Count>
      </ImageShow>

      <ContentFlow className="content-flow">
        <TitleFlow className="title-flow">{t(title)}</TitleFlow>

        <Content>{t(content)}</Content>
      </ContentFlow>
    </FlowItemStyle>
  );
};

export default FlowItem;
