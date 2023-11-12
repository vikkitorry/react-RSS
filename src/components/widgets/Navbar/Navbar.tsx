import { AppLink, AppLinkTheme } from '../../Link/AppLink';
import cls from './Navbar.module.scss';
import { BugButton } from '../../Button/BugButton/BugButton';
import { RoutePath, Main } from '../../../app/router/routeConfig/routeConfig';

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <AppLink to={Main.path} className={cls.item} theme={AppLinkTheme.DARK}>
        <span className={cls.link}>Main</span>
      </AppLink>
      <AppLink
        to={RoutePath.about}
        className={cls.item}
        theme={AppLinkTheme.DARK}
      >
        <span className={cls.link}>About</span>
      </AppLink>
      <BugButton></BugButton>
    </div>
  );
};
