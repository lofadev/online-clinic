import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import {
  BottomFooterStyle,
  ContentBottomFooter,
  CoppyRight,
  ItemContentBottomFooter,
  ItemContentBottomFooterNoneBorder,
} from './style';

const BottomFooter: FC = () => {
  const { t } = useTranslation();
  const { footer } = translations;

  return (
    <BottomFooterStyle>
      <ContentBottomFooter>
        <ItemContentBottomFooterNoneBorder href="/path1" target="_blank">
          {t(footer.bottom_footer.company_overview)}
        </ItemContentBottomFooterNoneBorder>

        <ItemContentBottomFooter href="/path2" target="_blank">
          {t(footer.bottom_footer.press_release)}
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path3" target="_blank">
          {t(footer.bottom_footer.membership_terms)}
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path4" target="_blank">
          {t(footer.bottom_footer.privacy_policy)}
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path5" target="_blank">
          {t(footer.bottom_footer.legal_notice)}
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path6" target="_blank">
          {t(footer.bottom_footer.business_partnership_manda)}
        </ItemContentBottomFooter>

        <ItemContentBottomFooter href="/path7" target="_blank">
          {t(footer.bottom_footer.recruitment_information)}
        </ItemContentBottomFooter>
      </ContentBottomFooter>

      <CoppyRight>Copyright © since 1998 DMM All Rights Reserved.</CoppyRight>
    </BottomFooterStyle>
  );
};

export default BottomFooter;
