import { FC } from 'react';

import TopHeader from 'components/header/top-header/top-header';
import PreHeader from 'components/header/pre-header';
import { HeaderStyle } from './styled';

const Header: FC = () => {
  return (
    <HeaderStyle>
      <TopHeader />

      <PreHeader />
    </HeaderStyle>
  );
};

export default Header;
