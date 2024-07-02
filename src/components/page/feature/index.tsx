import { FC } from 'react';
import { ContentFeature, IconFeatureStyle, IconFilled, ImageStyle } from './styled';

export type PropsFeature = {
  id: number;
  icon: string;
  content: string;
  gender: 'male' | 'female' | 'general';
};
const IconFeature: FC<PropsFeature> = (props) => {
  const { id, icon, content, gender } = props;
  return (
    <IconFeatureStyle key={id}>
      <IconFilled className={gender}>
        <ImageStyle src={icon} alt="icon" className="icon-gender" />
      </IconFilled>

      <ContentFeature>{content}</ContentFeature>
    </IconFeatureStyle>
  );
};

export default IconFeature;
