import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';
import { memo } from 'react';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onBlur'> {
  className?: string;
  theme?: string;
  label?: string;
  onBlur?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

export const Input = memo((props: IInputProps) => {
  const { label, defaultValue, placeholder, onBlur, ...otherProps } = props;
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e.target.value);
  };

  return (
    <div className={cls.container}>
      {label ? <>{label}</> : <></>}
      <input
        className={classNames(cls.Input, {}, [])}
        onBlur={onBlurHandler}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
