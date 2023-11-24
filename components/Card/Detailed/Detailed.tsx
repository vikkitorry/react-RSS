import cls from './Detailed.module.scss';
import React, { memo } from 'react';
import { Loader, LoaderTheme } from '@/components/Loader/Loader';
import { Button, ButtonSize } from '../../Button/Button';
import { service } from '@/src/services/service';
import { useAppSelector } from '@/src/store/hooks/redux';
import { MainPageRoutes } from '@/src/pages';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export const DetailedCard = () => {
  const { isDetaledLoad } = useAppSelector((state) => state.loadReducer);
  const searchParams = useSearchParams();
  const showId = searchParams.get(MainPageRoutes.show);
  const router = useRouter();
  const { data } = service.useGetShowQuery({
    showId: showId ? +showId : null,
  });

  const onClick = async () => {
    const { pathname, query } = router;
    delete query.show;
    const updatedUrl = { pathname, query };
    router.replace(updatedUrl);
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
      {isDetaledLoad ? (
        <Loader color={LoaderTheme.BACKGROUND_LIGHT} />
      ) : (
        <div className={cls.Card}>
          <img
            src={data?.result?.image}
            alt="character photo"
            data-testid={'load'}
            className={cls.image}
          />
          <div className={cls.title}>{data?.result?.title}</div>
          <p>
            Year:
            <span>{data?.result?.year}</span>
          </p>
          <p>
            Country:
            <span>{data?.result?.country}</span>
          </p>
          <p>
            Started:
            <span>{data?.result?.started}</span>
          </p>
          <p>
            Ended:
            <span>{data?.result?.ended}</span>
          </p>
          <p>
            Status:
            <span>{data?.result?.status}</span>
          </p>
          <p>
            Imdb:
            <span>{data?.result?.imdbRating}</span>
          </p>
          <p>
            Kinopoisk:
            <span>{data?.result?.kinopoiskRating}</span>
          </p>
        </div>
      )}
    </div>
  );
};
