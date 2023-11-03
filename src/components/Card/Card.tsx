import cls from './Card.module.scss';
import { ShowSchema } from '../../app/providers/services/types/serviceTypes';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';

interface ICard {
  cardData: ShowSchema;
}

export const Card = memo((props: ICard) => {
  const [, setSearchParams] = useSearchParams();
  const { cardData } = props;

  const onClick = async () => {
    const id = cardData.id || 0;
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.SHOW, id.toString());
      return searchParams;
    });
  };

  return (
    <div className={cls.Card} onClick={onClick}>
      <img
        src={cardData.image}
        alt={`${cardData.title} poster`}
        className={cls.image}
      />
      <div className={cls.title}>{cardData.title}</div>
      <div>
        {'Category:'}
        <span> {cardData.category}</span>
      </div>
      <div>
        {'Status:'}
        <span> {cardData.status}</span>
      </div>
      <div>
        {'Rating:'}
        <span> {cardData.rating} / 5</span>
      </div>
    </div>
  );
});
