import cls from './Card.module.scss';
import { ShowSchema } from '../../app/services/types/serviceTypes';
import { memo } from 'react';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { SetURLSearchParams } from 'react-router-dom';

interface ICard {
  cardData: ShowSchema;
  setSearchParams: SetURLSearchParams;
}

export const Card = memo((props: ICard) => {
  const { cardData, setSearchParams } = props;

  const onClick = async () => {
    const id = cardData.id || 0;
    setSearchParams((searchParams) => {
      searchParams.set(MainPageRoutes.SHOW, id.toString());
      return searchParams;
    });
  };

  return (
    <div className={cls.Card} onClick={onClick} data-testid={'card'}>
      <img
        src={cardData.image}
        alt={`${cardData.title} poster`}
        className={cls.image}
      />
      <div className={cls.title}>{cardData.title}</div>
      <p>
        Seasons:
        <span> {cardData.totalSeasons}</span>
      </p>
      <p>
        Status:
        <span> {cardData.status}</span>
      </p>
      <p>
        Rating:
        <span> {cardData.rating} / 5</span>
      </p>
    </div>
  );
});
