import React, { Component } from 'react';
import cls from './NoResultsPage.module.scss';

export class NoResultsPage extends Component {
  render() {
    return (
      <div className={cls.NoResultsPage}>
        <div className={cls.error}></div>
        <div>There is no character with such name</div>
      </div>
    );
  }
}
