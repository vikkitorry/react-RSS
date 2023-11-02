import { AppLink, AppLinkTheme } from '../../Link/AppLink';
import cls from './Navbar.module.scss';
import { BugButton } from '../../../app/providers/ErrorBoundary/BugButton';
import { RoutePath } from '../../../app/providers/router/routeConfig/routeConfig';

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <AppLink
        to={RoutePath.main}
        className={cls.item}
        theme={AppLinkTheme.DARK}
      >
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
