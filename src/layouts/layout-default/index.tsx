import { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';
import { MainStyled } from './styled';

type Props = {
  children: ReactNode;
};

const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default DefaultLayout;
