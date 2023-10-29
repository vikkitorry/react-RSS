import { Component } from 'react';
import cls from './Loader.module.scss';

export class Loader extends Component {
  render() {
    return (
      <div className={cls.Loader}>
        <div>Loading ...</div>
      </div>
    );
  }
}
