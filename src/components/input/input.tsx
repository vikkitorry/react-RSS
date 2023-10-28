import React, { Component } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';

interface IInput {
  className: string;
  theme: string;
}

export class Input extends Component<IInput> {
  constructor(props: IInput) {
    super(props);
  }
  render() {
    return (
      <input
        className={classNames(cls.AppLink, { [cls[this.props.theme]]: true }, [
          this.props.className,
        ])}
      ></input>
    );
  }
}

export default Input;
