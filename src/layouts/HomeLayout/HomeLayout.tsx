import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

interface IProps {
  children: JSX.Element[];
}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
