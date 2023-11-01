import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './cards.module.scss';
import React, { useState, useEffect, useCallback, memo } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../widgets/GridTable/GridTable';
import { AllCharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../widgets/SearchBar/SearchBar';
import { NoResultsPage } from '../../pages/noResults/NoResultsPage';
import { Loader } from '../widgets/Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
// import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export enum ResultsSize {
  FULL = 'full_screen',
  LEFT_SCREEN = 'left_screen',
}

// interface ResultsProps {
//   size: ResultsSize;
// }

const Cards = memo(() => {
  // const { size } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AllCharacterSchema | null>(null);
  const isDetailedOpen = searchParams.get('cardId');
  const pageQuery = searchParams.get('page');
  const page = pageQuery ? +pageQuery : 1;

  const mods: Record<string, boolean> = {
    [cls[ResultsSize.FULL]]: !isDetailedOpen,
    [cls[ResultsSize.LEFT_SCREEN]]: !!isDetailedOpen,
  };

  useEffect(() => {
    if (!pageQuery) {
      setSearchParams((searchParams) => {
        searchParams.set('page', '1');
        return searchParams;
      });
    }
  }, [pageQuery, setSearchParams]);

  const getPage = useCallback(() => {
    setIsLoading(true);
    Service.getPage(page, search)
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, search]);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <div className={classNames(cls.Results, mods, [])}>
      <SearchBar setSearch={setSearch} />
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <>
          <GridTable elements={data.results} />
          <Pagination
            totalPages={data?.info.pages}
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

export default Cards;
