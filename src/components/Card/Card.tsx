import { Component } from 'react';
import cls from './Card.module.scss';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';

interface ICard {
  cardData: CharacterSchema;
}

export class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    const { cardData } = this.props;
    return (
      <div className={cls.Card}>
        <img src={cardData.image} alt="character photo" className={cls.image} />
        <div className={cls.name}>{cardData.name}</div>
        <div>
          {'Gender:'}
          <span>{cardData.gender}</span>
        </div>
        <div>
          {'Species:'}
          <span>{cardData.species}</span>
        </div>
        <div>
          {'Status:'}
          <span>{cardData.status}</span>
        </div>
      </div>
    );
  }
}
