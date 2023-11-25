import cls from './Card.module.scss';
import { ShowSchema } from '@/src/services/types/serviceTypes';
import React, { memo, useCallback } from 'react';
import { MainPageRoutes } from '@/src/pages';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/src/store/hooks/redux';
import { viewSlice } from '@/src/store/reducers/ViewSlice';

interface ICard {
  cardData: ShowSchema;
}

export const Card = memo((props: ICard) => {
  const { cardData } = props;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const onClick = async () => {
    const isShowOpen = searchParams.get(MainPageRoutes.show);
    if (!isShowOpen) {
      const id = cardData.id || 0;
      router.push(pathname + '?' + createQueryString(MainPageRoutes.show, `${id}`))
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
});
