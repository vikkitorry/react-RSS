import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Results.module.scss';
import React, { useState, useEffect, useCallback, memo } from 'react';
import Service from '../../app/providers/services/service';
import { GridTable } from '../../components/widgets/GridTable/GridTable';
import { AllCharacterSchema } from '../../app/providers/services/types/serviceTypes';
import { SearchBar } from '../../components/widgets/SearchBar/SearchBar';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
import { NoResultsPage } from '../noResults/NoResultsPage';
import { Loader } from '../../components/widgets/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
// import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export enum ResultsSize {
  FULL = 'full_screen',
  LEFT_SCREEN = 'left_screen',
}

// interface ResultsProps {
//   size: ResultsSize;
// }

export const Results = memo(() => {
  // const { size } = props;
  const [inputValue, setInputValue] = useState<string | undefined>(
    localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AllCharacterSchema | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // const mods: Record<string, boolean> = {
  //   [cls[size]]: true,
  // };

  const setQueryParam = useCallback(
    (page: string) => {
      setSearchParams((searchParams) => {
        searchParams.set('page', page);
        return searchParams;
      });
    },
    [setSearchParams]
  );

  const getPage = useCallback(
    (page: number) => {
      setIsLoading(true);
      Service.getPage(page, inputValue)
        .then((data) => setData(data))
        .catch(() => setData(null))
        .finally(() => {
          setIsLoading(false);
          setQueryParam(`${page}`);
        });
    },
    [inputValue, setQueryParam]
  );

  const onBlur = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const onSubmit = useCallback(() => {
    // getPage(10);
    console.log(searchParams);
  }, [searchParams]);

  useEffect(() => {
    getPage(1);
  }, [getPage]);

  return (
    <div className={classNames(cls.Results, {}, [])}>
      <SearchBar onSubmit={onSubmit} onBlur={onBlur} inputValue={inputValue} />
      <Pagination
        totalPages={data?.info.pages}
        getPage={getPage}
        setQueryParam={setQueryParam}
      />
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <GridTable elements={data.results} />
      ) : (
        <NoResultsPage />
      )}
    </div>
  );
});

export default Results;
