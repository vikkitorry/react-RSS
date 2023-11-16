import cls from './Detailed.module.scss';
import { DetailedShowSchema } from '../../../app/services/types/serviceTypes';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../../app/router/routeConfig/routeConfig';
import React, { useState, useEffect, memo } from 'react';
import { Loader, LoaderTheme } from '../../widgets/Loader/Loader';
import { Button, ButtonSize } from '../../Button/Button';
import { getShow } from '../../../app/services/service';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/redux';
import { loadSlice } from '../../../store/reducers/LoadSlice';

export const DetailedCard = memo(() => {
  const { isDetaledLoad } = useAppSelector((state) => state.loadReducer);
  const dispatch = useAppDispatch();
  const { setisDetaledLoad } = loadSlice.actions;
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<DetailedShowSchema | null>(null);

  useEffect(() => {
    const id = searchParams.get(MainPageRoutes.SHOW);
    dispatch(setisDetaledLoad(true));
    getShow(id ? +id : 0)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => dispatch(setisDetaledLoad(false)));
  }, [searchParams, dispatch, setisDetaledLoad]);

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
});
