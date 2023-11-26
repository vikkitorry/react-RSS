import cls from './Navbar.module.scss';
import { BugButton } from '../Button/BugButton/BugButton';

export const Navbar = () => {
  return (
    <nav className={cls.Navbar}>
      <BugButton></BugButton>
    </nav>
  );
};
