import { FC } from 'react';

import { ContentTopFooter, ImageStyle, TopFooterStyle } from './style';

const TopFooter: FC = () => {
  return (
    <TopFooterStyle>
      <ImageStyle
        src="https://clinic.dmm.com/img/pc/top/logo_DMMclinic_footer.svg?id=ba1fdd2e60dc563c3336"
        alt="picture"
      />

      <ContentTopFooter>
        DMMオンラインクリニックはオンライン診療のプラットフォームサービスです。 診療は提携先医療機関が行っています。
      </ContentTopFooter>
    </TopFooterStyle>
  );
};

export default TopFooter;
