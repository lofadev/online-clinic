import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { ContentMainFooter, DetailMainFooterStyle, SubContent, TextContent, TitleMainFooter } from './styled';

export type PropsDetailMainFooter = {
  id: number;
  title: string;
  children: PropsItemDetailMainFooter[];
};

type PropsItemDetailMainFooter = {
  id: number;
  content: string;
  subContent?: string;
  path?: string;
};

const DetailMainFooter: FC<PropsDetailMainFooter> = (props) => {
  const { id, title, children } = props;
  const history = useHistory();

  const handleClick = (url: string) => {
    if (url) {
      history.push(url);
    }
  };

  return (
    <DetailMainFooterStyle key={id}>
      <TitleMainFooter>{title}</TitleMainFooter>

      {children.length &&
        children.map((data) => (
          <ContentMainFooter key={data.id}>
            <TextContent onClick={() => handleClick(data.path ?? '')}>{data.content}</TextContent>

            <SubContent>{data.subContent}</SubContent>
          </ContentMainFooter>
        ))}
    </DetailMainFooterStyle>
  );
};

export default DetailMainFooter;
