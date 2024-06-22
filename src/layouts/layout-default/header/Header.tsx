import { FC } from 'react';

import TopHeader from './top-header/top-header/TopHeader';
import { HeaderStyle } from './style';
import PreHeader from './pre-header/PreHeader';

const Header: FC = () => {
  return (
    <HeaderStyle>
      <TopHeader />

      <PreHeader />
    </HeaderStyle>
  );
};

export default Header;
