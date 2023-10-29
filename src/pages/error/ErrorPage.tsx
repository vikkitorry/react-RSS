import { Component } from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './ErrorPage.module.scss';

export class ErrorPage extends Component {
  render() {
    return (
      <div className={classNames(cls.ErrorPage, {}, [])}>
        <p>Oooops... Error</p>
        <p>You should reload page</p>
      </div>
    );
  }
}
