import cls from './Detailed.module.scss';
// import { useSearchParams } from 'react-router-dom';
// import { MainPageRoutes } from '../../../app/router/routeConfig/routeConfig';
import React, { memo } from 'react';
import { Loader, LoaderTheme } from '@/components/Loader/Loader';
import { Button, ButtonSize } from '../../Button/Button';
import { service } from '@/src/services/service';
import { useAppSelector } from '@/src/store/hooks/redux';
import { DetailedShowSchema } from '@/src/services/types/serviceTypes';

interface IDetailedCard {
  data: DetailedShowSchema
}

export const DetailedCard = (props: IDetailedCard) => {
  const {data} = props;
  const { isDetaledLoad } = useAppSelector((state) => state.loadReducer);
  const { showId } = useAppSelector((state) => state.viewReducer);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const { data } = service.useGetShowQuery({
  //   showId,
  // });

  const onClick = async () => {
    // searchParams.delete(MainPageRoutes.SHOW);
    // setSearchParams(searchParams);
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
      )}
    </div>
  );
};
