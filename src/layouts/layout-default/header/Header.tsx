import { FC } from 'react';

import PreHeader from './pre-header/preHeader';
import { HeaderStyle } from './style';
import TopHeader from './top-header/top-header/TopHeader';

const Header: FC = () => {
  return (
    <HeaderStyle>
      <TopHeader />

      <PreHeader />
    </HeaderStyle>
  );
};

export default Header;
