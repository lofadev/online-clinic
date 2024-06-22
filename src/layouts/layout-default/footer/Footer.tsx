import { FC } from 'react';

import GoToTop from 'components/goto-top/GoToTop';
import TopFooter from './top-footer/TopFooter';
import MainFooter from './main-footer/MainFooter';
import BottomFooter from './bottom-footer/BottomFooter';
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
