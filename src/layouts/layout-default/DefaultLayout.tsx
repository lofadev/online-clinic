import { ReactNode } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import { Wrapper } from './style';

type Props = {
  children: ReactNode;
};

const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default DefaultLayout;
