import { FC } from 'react';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import DetailMainFooter, { PropsDetailMainFooter } from './DetailMainFooter';
import { MainFooterStyle } from './styled';

const MainFooter: FC = () => {
  const { t } = useTranslation();
  const { footer } = translations;

  const listDataMainFooter: PropsDetailMainFooter[] = [
    {
      id: 1,
      title: t(footer.main_footer.contact_clinic),
      children: [{ id: 1, content: t(footer.main_footer.contact), path: '/path1' }],
    },
    {
      id: 2,
      title: t(footer.main_footer.terms_clinic),
      children: [
        { id: 1, content: t(footer.main_footer.legal_notice), path: '/path2' },
        { id: 2, content: t(footer.main_footer.terms_support), path: '/path3' },
        { id: 3, content: t(footer.main_footer.privacy_support), path: '/path4' },
        {
          id: 4,
          content: t(footer.main_footer.terms_welfare),
          path: '/path5',
        },
        {
          id: 5,
          content: t(footer.main_footer.partners),
          path: '/path6',
        },
      ],
    },
    {
      id: 3,
      title: t(footer.main_footer.offers),
      children: [
        {
          id: 1,
          content: t(footer.main_footer.newsletter),
          subContent: t(footer.main_footer.offers_info),
          path: '/path7',
        },
        {
          id: 2,
          content: t(footer.main_footer.affiliate),
          subContent: t(footer.main_footer.affiliate_desc),
          path: '/path8',
        },
      ],
    },
  ];

  return (
    <MainFooterStyle>
      {listDataMainFooter.length && listDataMainFooter.map((data) => <DetailMainFooter {...data} key={data.id} />)}
    </MainFooterStyle>
  );
};

export default MainFooter;
