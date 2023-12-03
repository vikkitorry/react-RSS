import { AppLink, AppLinkTheme } from '../../Link/AppLink';
import cls from './Navbar.module.scss';
import { RoutePath } from '../../../app/router/routeConfig/routeConfig';

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
        to={RoutePath.form_one}
        className={cls.item}
        theme={AppLinkTheme.DARK}
      >
        <span className={cls.link}>Uncontrolled</span>
      </AppLink>
      <AppLink
        to={RoutePath.form_two}
        className={cls.item}
        theme={AppLinkTheme.DARK}
      >
        <span className={cls.link}>Controlled</span>
      </AppLink>
    </div>
  );
};
