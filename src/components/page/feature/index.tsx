import { FC } from 'react';

import { PropsSiekte } from '../siekte';
import { ContentFeature, IconFeatureStyle, IconFilled, ImageStyle } from './styled';

const IconFeature: FC<PropsSiekte> = (props) => {
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
