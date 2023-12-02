import React from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form2.module.scss';

export const Form1 = () => {
  return <div className={classNames(cls.FORM, {}, [])}>About page</div>;
};
