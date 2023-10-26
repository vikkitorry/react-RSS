import { classNames } from '../../utils/libs/classNames/classNames';
import { Component } from 'react';
import cls from './Card.module.scss';

interface ICard {
  className: string;
}

export class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className={classNames(cls.Card, {}, [this.props.className])}>
        <div>dgdgdggdd</div>
        <div>dgdgdggdd</div>
        <div>dgdgdggdd</div>
        <div>dgdgdggdd</div>
      </div>
    );
  }
}
