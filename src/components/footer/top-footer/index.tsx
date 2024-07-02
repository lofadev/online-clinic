import { FC } from 'react';

import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { ContentTopFooter, ImageStyle, TopFooterStyle } from './styled';

const TopFooter: FC = () => {
  const { t } = useTranslation();
  const { footer } = translations;
  return (
    <TopFooterStyle>
      <ImageStyle
        src="https://clinic.dmm.com/img/pc/top/logo_DMMclinic_footer.svg?id=ba1fdd2e60dc563c3336"
        alt="picture"
      />

      <ContentTopFooter>{t(footer.top_footer)}</ContentTopFooter>
    </TopFooterStyle>
  );
};

export default TopFooter;
