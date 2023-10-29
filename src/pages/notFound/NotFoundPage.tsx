import React, { Component } from 'react';
import cls from './NotFoundPage.module.scss';

export class NotFoundPage extends Component {
  render() {
    return (
      <div className={cls.NotFoundPage}>
        <div className={cls.errorContainer}>
          <div>4</div>
          <div className={cls.error}></div>
          <div>4</div>
        </div>
        <div>Oooooops...</div>
        <div>Page Not Found</div>
      </div>
    );
  }
}

export default NotFoundPage;
