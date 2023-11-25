import cls from './Detailed.module.scss';
import { Button, ButtonSize } from '../../Button/Button';
import { useRouter } from 'next/router';
import { DetailedShowSchema } from '@/src/services/types/serviceTypes';

interface IDetailedCard {
  data: DetailedShowSchema | null;
}

export const DetailedCard = (props : IDetailedCard) => {
  const { data } = props;
  const router = useRouter();
  const { query, page, limit } = router.query;

  const onClick = async () => {
    router.push({
      query: { query, page, limit},
    });
  };

  return (
    <div className={cls.DetailedCard} data-testid={'detailedCard'}>
      <Button
        className={cls.btnPositionEnd}
        size={ButtonSize.S}
        onClick={onClick}
      >
        X
      </Button>
        <div className={cls.Card}>
          <img
            src={data?.image}
            alt="character photo"
            data-testid={'load'}
            className={cls.image}
          />
          <div className={cls.title}>{data?.title}</div>
          <p>
            Year:
            <span>{data?.year}</span>
          </p>
          <p>
            Country:
            <span>{data?.country}</span>
          </p>
          <p>
            Started:
            <span>{data?.started}</span>
          </p>
          <p>
            Ended:
            <span>{data?.ended}</span>
          </p>
          <p>
            Status:
            <span>{data?.status}</span>
          </p>
          <p>
            Imdb:
            <span>{data?.imdbRating}</span>
          </p>
          <p>
            Kinopoisk:
            <span>{data?.kinopoiskRating}</span>
          </p>
        </div>
    </div>
  );
};
