import { ReactNode } from 'react';

import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const LayoutSecond: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutSecond;
