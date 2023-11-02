import cls from './detailedCard.module.scss';
import { ShowSchema } from '../../../app/providers/services/types/serviceTypes';
import { useSearchParams } from 'react-router-dom';
// import { MainPageRoutes } from '../../../app/providers/router/routeConfig/routeConfig';
import Service from '../../../app/providers/services/service';
import React, { useState, useEffect, memo } from 'react';
import { Loader } from '../../widgets/Loader/Loader';

interface IDetailedCard {
  id: number;
}

export const DetailedCard = memo((props: IDetailedCard) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const { id } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ShowSchema | null>(null);

  useEffect(() => {
    setIsLoading(true);
    Service.getShow(id)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onClick = async () => {
    // const id = cardData.id || 0;
    // setSearchParams((searchParams) => {
    //   searchParams.set(MainPageRoutes.SHOW, id.toString());
    //   return searchParams;
    // });
  };

  return (
    <div className={cls.DetailedCard} onClick={onClick}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.Card}>
          <img src={data?.image} alt="character photo" className={cls.image} />
          <div className={cls.name}>{data?.title}</div>
          <div>
            {'Category:'}
            <span>{data?.category}</span>
          </div>
          <div>
            {'Status:'}
            <span>{data?.status}</span>
          </div>
          <div>
            {'Rating:'}
            <span>{data?.rating}</span>
          </div>
        </div>
      )}
    </div>
  );
});
