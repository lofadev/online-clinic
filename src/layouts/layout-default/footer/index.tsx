import { FC } from 'react';

import GoToTop from 'components/goto-top/GoToTop';
import TopFooter from 'components/footer/top-footer/index';
import MainFooter from 'components/footer/main-footer';
import BottomFooter from 'components/footer/bottom-footer';
import { FooterStyle } from './style';

const Footer: FC = () => {
  return (
    <FooterStyle>
      <GoToTop />

      <TopFooter />

      <MainFooter />

      <BottomFooter />
    </FooterStyle>
  );
};

export default Footer;
