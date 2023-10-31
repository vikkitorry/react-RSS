import { classNames } from '../../utils/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { memo } from 'react';

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
  theme?: ButtonTheme;
  size: ButtonSize;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND_DARK,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
