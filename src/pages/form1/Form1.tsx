import React from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form1.module.scss';

export const Form1 = () => {
  return <div className={classNames(cls.Form, {}, [])}>About page</div>;
};
