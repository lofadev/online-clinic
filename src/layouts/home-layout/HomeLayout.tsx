import React from 'react';

interface IProps {
  children: JSX.Element[];
}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default HomeLayout;
