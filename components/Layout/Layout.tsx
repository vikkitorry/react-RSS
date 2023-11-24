import cls from './Navbar.module.scss';
import { BugButton } from '../Button/BugButton/BugButton';
import { Navbar } from '../Navbar/Navbar';
import { ReactNode } from 'react';

export const Layout = (children: React.Fragment ) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  );
};
