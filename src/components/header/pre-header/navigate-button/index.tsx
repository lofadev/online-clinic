import { FC, ReactNode } from 'react';

import { useHistory } from 'react-router-dom';
import { NavigateButtonStyle, ContentButtonNavigate } from './style';

export type PropsNavigateButton = {
  id: number;
  content: string;
  path?: string;
  children?: ReactNode;
};
const NavigateButton: FC<PropsNavigateButton> = (props) => {
  const history = useHistory();
  const { id, content, children, path } = props;
  const handleClick = () => {
    if (path) {
      history.push(path);
    }
  };
  return (
    <NavigateButtonStyle className={children ? 'extend' : 'noneExtend'} onClick={handleClick} key={id}>
      <ContentButtonNavigate>{content}</ContentButtonNavigate>
      {children}
    </NavigateButtonStyle>
  );
};

export default NavigateButton;
