import cls from './Detailed.module.scss';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../../app/router/routeConfig/routeConfig';
import React, { memo } from 'react';
import { Loader, LoaderTheme } from '../../widgets/Loader/Loader';
import { Button, ButtonSize } from '../../Button/Button';
import { service } from '../../../app/services/service';
import { useAppSelector } from '../../../store/hooks/redux';

export const DetailedCard = memo(() => {
  const { isDetaledLoad } = useAppSelector((state) => state.loadReducer);
  const { showId } = useAppSelector((state) => state.viewReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = service.useGetShowQuery({
    showId,
  });

  const onClick = async () => {
    searchParams.delete(MainPageRoutes.SHOW);
    setSearchParams(searchParams);
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
});
