import { FC, ReactNode } from 'react';

import history from 'configs/history';
import { ContentButtonNavigate, NavigateButtonStyle } from './styled';

export type PropsNavigateButton = {
  id: number;
  content: string;
  path?: string;
  children?: ReactNode;
};
const NavigateButton: FC<PropsNavigateButton> = (props) => {
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
