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

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  theme?: ButtonTheme;
  size: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = memo((props) => {
  const {
    className,
    children,
    type,
    theme = ButtonTheme.BACKGROUND_DARK,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button
      type={type || 'button'}
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
