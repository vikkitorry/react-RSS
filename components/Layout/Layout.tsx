import { Navbar } from '../Navbar/Navbar';
import { ReactNode } from 'react';
import { FC } from 'react';

interface ILayout {
  children?: ReactNode;
}

export const Layout: FC<ILayout> = (props ) => {
  return (
    <>
    <Navbar />
    {props.children}
    </>
  );
};
