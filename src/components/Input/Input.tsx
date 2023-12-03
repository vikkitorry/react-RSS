import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';
import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormKeys } from '../../utils/constants/Constants';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  type?: string;
  theme?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  register?: (name: FormKeys) => UseFormRegisterReturn<FormKeys>;
  registerName: FormKeys;
  innerref?: React.RefObject<HTMLInputElement>;
  progress?: number;
}

export const Input = memo((props: IInputProps) => {
  const {
    label,
    defaultValue,
    placeholder,
    error,
    register,
    type,
    registerName,
    innerref,
    progress,
    ...otherProps
  } = props;

  return (
    <div className={cls.container}>
      <label htmlFor={registerName}>{label}</label>
      <input
        className={classNames(cls.Input, {}, [])}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type || 'text'}
        id={registerName}
        ref={innerref}
        {...(register && { ...register(registerName) })}
        {...otherProps}
      />
      {progress !== undefined && <progress max={4} value={progress} />}
      <p className={cls.error}>{error}</p>
    </div>
  );
});

export default Input;
