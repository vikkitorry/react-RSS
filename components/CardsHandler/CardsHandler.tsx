import { classNames } from '@/src/utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, { useEffect, memo } from 'react';
import { CardsList } from '../CardsList/CardsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Pagination } from '../Pagination/Pagination';
import { ShowSchema } from '@/src/services/types/serviceTypes';
import { useRouter } from 'next/router';
import { defaultPageSize } from '@/src/services/variables/variables';

export enum CardsHandlerSize {
  FULL = 'full_screen',
  LEFT = 'left_screen',
}

interface ICardsHandlerProps {
  size: CardsHandlerSize;
  onClick: () => void;
  dataCards: ShowSchema[] | null;
}

const CardsHandler = memo((props: ICardsHandlerProps) => {
  const { size, onClick, dataCards } = props;
  const router = useRouter();
  const { page } = router.query;
  const startPage = page ? +page : 1;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
  };

  useEffect(() => {
    if (!page) {
      router.push({
        query: { query: '', page: startPage, limit: defaultPageSize },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPage]);

  return (
    <div className={classNames(cls.Cards, mods, [])} onClick={onClick}>
      <SearchBar />
      <CardsList shows={dataCards} />
      {dataCards?.length && <Pagination />}
    </div>
  );
});

export default CardsHandler;
