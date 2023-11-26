import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/src/utils/libs/classNames/classNames';
import { memo } from 'react';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onBlur'> {
  className: string;
  theme: string;
  onBlur?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

export const Input = memo((props: IInputProps) => {
  const { className, theme, defaultValue, placeholder, onBlur, ...otherProps } =
    props;
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e.target.value);
  };

  return (
    <input
      className={classNames(cls.Input, { [cls[theme]]: true }, [className])}
      onBlur={onBlurHandler}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...otherProps}
    ></input>
  );
});

export default Input;
