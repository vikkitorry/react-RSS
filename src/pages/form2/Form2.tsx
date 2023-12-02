import React from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form2.module.scss';

export const Form2 = () => {
  return <div className={classNames(cls.Form, {}, [])}>Form 2</div>;
};
