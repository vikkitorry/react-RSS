import { classNames } from '../../../utils/libs/classNames/classNames';
//import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

export const Navbar = () => {
  return <div className={classNames(cls.Navbar, {}, [])}>Войти</div>;
};
