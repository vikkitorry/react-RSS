import cls from './Card.module.scss';
import { ShowSchema } from '@/src/services/types/serviceTypes';
import { useRouter } from 'next/router';

interface ICard {
  cardData: ShowSchema;
}

export const Card = (props: ICard) => {
  const { cardData } = props;
  const router = useRouter();

  const onClick = async () => {
    const { query, page, limit, show } = router.query;
    if (!show) {
      router.push({
        query: { query, page, limit, show: cardData.id || 0 },
      });
    }
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
};
