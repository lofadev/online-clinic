import { FC } from 'react';

import { useHistory } from 'react-router-dom';
import { ContentIcon, IconDetailStyle, ImageStyle, ImgArrow, TextContent } from './styled';

export type PropsIconDetail = {
  id: number;
  icon?: string;
  content: string;
  path?: string;
};

const IconDetailHeader: FC<PropsIconDetail> = (props) => {
  const { id, icon, content, path } = props;
  const history = useHistory();

  const handleClick = () => {
    if (path) {
      history.push(path);
    }
  };

  return (
    <IconDetailStyle onClick={handleClick} key={id}>
      <ContentIcon>
        {icon && <ImageStyle src={icon} alt="icon" />}

        <TextContent>{content}</TextContent>
      </ContentIcon>

      <ImgArrow src="https://navismithapis-cdn.com/img/pc_arrow.svg" alt="arrow" />
    </IconDetailStyle>
  );
};

export default IconDetailHeader;
