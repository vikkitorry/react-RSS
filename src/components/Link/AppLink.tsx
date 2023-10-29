import { classNames } from '../../utils/libs/classNames/classNames';
import { Component } from 'react';
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

export class AppLink extends Component<AppLinkProps> {
  constructor(props: AppLinkProps) {
    super(props);
  }
  render() {
    return (
      <Link
        to={this.props.to}
        className={classNames(cls.AppLink, { [cls[this.props.theme]]: true }, [
          this.props.className,
        ])}
      >
        {this.props.children}
      </Link>
    );
  }
}
