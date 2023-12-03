import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';
import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormKeys } from '../../utils/constants/Constants';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onBlur'> {
  className?: string;
  type?: string;
  theme?: string;
  label?: string;
  onBlur?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  register?: (name: FormKeys) => UseFormRegisterReturn<FormKeys>;
  registerName: FormKeys;
  innerref?: React.RefObject<HTMLInputElement>;
}

export const Input = memo((props: IInputProps) => {
  const {
    label,
    defaultValue,
    placeholder,
    onBlur,
    error,
    register,
    type,
    registerName,
    innerref,
    ...otherProps
  } = props;
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e.target.value);
  };

  return (
    <div className={cls.container}>
      <label htmlFor={registerName}>{label}</label>
      <input
        className={classNames(cls.Input, {}, [])}
        onBlur={onBlurHandler}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type || 'text'}
        id={registerName}
        ref={innerref}
        {...(register && { ...register(registerName) })}
        {...otherProps}
      />
      <p className={cls.error}>{error}</p>
    </div>
  );
});

export default Input;
