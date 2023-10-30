import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
  className: string;
  theme: string;
}

export enum AppLinkTheme {
  LIGHT = 'light-link',
  DARK = 'dark-link',
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.DARK,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
