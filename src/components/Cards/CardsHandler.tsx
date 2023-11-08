import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { GridTable } from '../widgets/GridTable/GridTable';
import { ShowSchema } from '../../app/services/types/serviceTypes';
import { SearchBar } from '../SearchBar/SearchBar';
import { NoResultsPage } from '../../pages/noResults/NoResultsPage';
import { Loader, LoaderTheme } from '../widgets/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/router/routeConfig/routeConfig';
import { getPageData } from '../../app/services/service';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';

export enum CardsHandlerSize {
  FULL = 'full_screen',
  LEFT = 'left_screen',
}

interface ICardsHandlerProps {
  size: CardsHandlerSize;
  onClick: () => void;
}

const CardsHandler = memo((props: ICardsHandlerProps) => {
  const { size, onClick } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || ''
  );
  const [numOfItems, setNumOfItems] = useState<number>(30);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ShowSchema[] | null>(null);
  const pageQuery = searchParams.get(MainPageRoutes.PAGE);
  const page = pageQuery ? +pageQuery : 1;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
  };

  useEffect(() => {
    if (!pageQuery) {
      setSearchParams((searchParams) => {
        searchParams.set(MainPageRoutes.PAGE, '1');
        return searchParams;
      });
    }
  }, [pageQuery, setSearchParams]);

  const getPage = useCallback(() => {
    setIsLoading(true);
    getPageData(page, search, numOfItems)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [page, search, numOfItems]);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <div className={classNames(cls.Cards, mods, [])} onClick={onClick}>
      <SearchBar
        setSearch={setSearch}
        setSearchParams={setSearchParams}
        setNumOfItems={setNumOfItems}
      />
      {isLoading ? (
        <Loader color={LoaderTheme.BACKGROUND_DARK} />
      ) : data ? (
        <>
          <GridTable elements={data} />
          <Pagination page={page} setSearchParams={setSearchParams} />
        </>
      ) : (
        <NoResultsPage />
      )}
    </div>
  );
});

export default CardsHandler;
