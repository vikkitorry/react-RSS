import { classNames } from '../../utils/libs/classNames/classNames';
import { ButtonHTMLAttributes, Component } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  BACKGROUND_LIGHT = 'backgroundLight',
  BACKGROUND_DARK = 'backgroundDark',
  BACKGROUND_ERROR = 'backgroundError',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  theme: ButtonTheme;
  size: ButtonSize;
  onClick: () => void;
}

export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  mods: Record<string, boolean> = {
    [cls[this.props.theme]]: true,
    [cls[this.props.size]]: true,
  };

  render() {
    return (
      <button
        type="button"
        onClick={() => this.props.onClick()}
        className={classNames(cls.Button, this.mods, [this.props.className])}
      >
        {this.props.children}
      </button>
    );
  }
}
