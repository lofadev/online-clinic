import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { BorderIcon, ContentIcon, IconFill, IconSiekteStyle } from './styled';

export type PropsSiekte = {
  id: number;
  icon: string;
  content: string;
  gender: 'FOR_MALE' | 'FOR_FEMALE' | 'GENERAL';
  disable?: boolean;
  path?: string;
};

const IconSiekte: FC<PropsSiekte> = (props) => {
  const { id, icon, content, gender, disable, path } = props;
  const history = useHistory();

  const handleClick = () => {
    if (!disable && path) {
      history.push(path);
    }
  };

  return (
    <IconSiekteStyle className={`${gender} ${props?.disable ? 'disable' : ''}`} onClick={handleClick} key={id}>
      <BorderIcon className="border-icon">
        <IconFill className="icon-fill" dangerouslySetInnerHTML={{ __html: icon }} />
        <ContentIcon>{content}</ContentIcon>
      </BorderIcon>
    </IconSiekteStyle>
  );
};

export default IconSiekte;
