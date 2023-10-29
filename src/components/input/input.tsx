import React, { Component, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onBlur'> {
  className: string;
  theme: string;
  onBlur?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

export class Input extends Component<IInput> {
  constructor(props: IInput) {
    super(props);
  }

  onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    this.props.onBlur?.(e.target.value);
  };

  render() {
    const { className, theme, defaultValue, placeholder } = this.props;
    return (
      <input
        className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
        onBlur={this.onBlurHandler}
        defaultValue={defaultValue}
        placeholder={placeholder}
      ></input>
    );
  }
}

export default Input;
