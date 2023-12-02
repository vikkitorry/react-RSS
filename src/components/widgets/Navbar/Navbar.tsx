import { AppLink, AppLinkTheme } from '../../Link/AppLink';
import cls from './Navbar.module.scss';
import { BugButton } from '../../Button/BugButton/BugButton';
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
        <span className={cls.link}>Form 1</span>
      </AppLink>
      <AppLink
        to={RoutePath.form_two}
        className={cls.item}
        theme={AppLinkTheme.DARK}
      >
        <span className={cls.link}>Form 2</span>
      </AppLink>
      <BugButton></BugButton>
    </div>
  );
};
