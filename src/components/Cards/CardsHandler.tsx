import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './CardsHandler.module.scss';
import React, { useState, useEffect, useCallback, memo } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../widgets/GridTable/GridTable';
import { Response } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../widgets/SearchBar/SearchBar';
import { NoResultsPage } from '../../pages/noResults/NoResultsPage';
import { Loader } from '../widgets/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { MainPageRoutes } from '../../app/providers/router/routeConfig/routeConfig';

export enum CardsHandlerSize {
  FULL = 'full_screen',
  LEFT_SCREEN = 'left_screen',
}

interface CardsHandlerProps {
  size: CardsHandlerSize;
}

const CardsHandler = memo((props: CardsHandlerProps) => {
  const { size } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);
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
    const query = search || '';
    Service.getPage(page, { query })
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [page, search]);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <div className={classNames(cls.Results, mods, [])}>
      <SearchBar setSearch={setSearch} />
      {isLoading ? (
        <Loader />
      ) : data?.result ? (
        <>
          <GridTable elements={data.result} />
          <Pagination
            totalPages={1}
            page={page}
            setSearchParams={setSearchParams}
          />
        </>
      ) : (
        <NoResultsPage />
      )}
    </div>
  );
});

export default CardsHandler;
