import cls from './detailedCard.module.scss';
import { DetailedShowSchema } from '../../../app/providers/services/types/serviceTypes';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../../app/providers/router/routeConfig/routeConfig';
import Service from '../../../app/providers/services/service';
import React, { useState, useEffect, memo } from 'react';
import { Loader, LoaderTheme } from '../../widgets/Loader/Loader';
import { Button, ButtonSize } from '../../Button/Button';

export const DetailedCard = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DetailedShowSchema | null>(null);

  useEffect(() => {
    const id = searchParams.get(MainPageRoutes.SHOW);
    if (id) {
      setIsLoading(true);
      Service.getShow(+id)
        .then((data) => setData(data))
        .catch(() => setData(null))
        .finally(() => setIsLoading(false));
    }
  }, [searchParams]);

  const onClick = async () => {
    searchParams.delete(MainPageRoutes.SHOW);
    setSearchParams(searchParams);
  };

  return (
    <div className={cls.DetailedCard}>
      <Button
        className={cls.btnPositionEnd}
        size={ButtonSize.S}
        onClick={onClick}
      >
        X
      </Button>
      {isLoading ? (
        <Loader color={LoaderTheme.BACKGROUND_LIGHT} />
      ) : (
        <div className={cls.Card}>
          <img src={data?.image} alt="character photo" className={cls.image} />
          <div className={cls.title}>{data?.title}</div>
          <div>
            <div>
              {'Year:'}
              <span>{data?.year}</span>
            </div>
            {'Country:'}
            <span>{data?.country}</span>
          </div>
          <div>
            {'Started:'}
            <span>{data?.started}</span>
          </div>
          <div>
            {'Ended:'}
            <span>{data?.ended}</span>
          </div>
          <div>
            {'Status:'}
            <span>{data?.status}</span>
          </div>
          <div>
            {'Imdb:'}
            <span>{data?.imdbRating}</span>
          </div>
          <div>
            {'Kinopoisk:'}
            <span>{data?.kinopoiskRating}</span>
          </div>
        </div>
      )}
    </div>
  );
});
