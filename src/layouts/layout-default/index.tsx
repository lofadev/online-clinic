import { ReactNode } from 'react';

import Header from './header';
import Footer from './footer';
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
