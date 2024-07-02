import { FC, ReactNode } from 'react';

import { Content, IconReasonStyle, IconSVG } from './styled';

export type PropsReason = {
  id: number;
  icon: ReactNode;
  content: string;
  gender: 'male' | 'female' | 'general';
};

const IconReason: FC<PropsReason> = (props) => {
  const { id, content, icon, gender } = props;
  return (
    <IconReasonStyle key={id} className={gender}>
      <IconSVG className="icon-svg">{icon}</IconSVG>

      <Content>{content}</Content>
    </IconReasonStyle>
  );
};

export default IconReason;
