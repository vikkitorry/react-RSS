import cls from './Card.module.scss';
import { CharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { memo } from 'react';
// import { useSearchParams } from 'react-router-dom';

interface ICard {
  cardData: CharacterSchema;
}

export const Card = memo((props: ICard) => {
  // const [, setSearchParams] = useSearchParams();
  const { cardData } = props;
  const onClick = () => {
    // setSearchParams((URLSearchParams) => URLSearchParams.set('product', cardData.id.toString()));
  };
  return (
    <div className={cls.Card} onClick={onClick}>
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
});
